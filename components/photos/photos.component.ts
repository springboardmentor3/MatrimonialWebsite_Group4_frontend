// import { Component,OnInit } from '@angular/core';
// import {MatButtonModule} from '@angular/material/button';
// import {MatCardModule} from '@angular/material/card';
// import { HttpClient } from '@angular/common/http';
// import { MatDialogModule } from '@angular/material/dialog';
// import { MyDialogComponent } from '../../my-dialog/my-dialog.component';
// import { MatDialog } from '@angular/material/dialog';
// import { ProfileService } from '../../services/profile.service';


// @Component({
//   selector: 'app-photos',
//   templateUrl: './photos.component.html',
//   styleUrl: './photos.component.css'
// })
// export class PhotosComponent implements OnInit {
//   images: any[] = [];
//   brides: any[] = []; // Array to hold bride data
//   selectedFile: File | null = null;  // Initialize selectedFile to null
//   imgURL: any;
//   retrievedImage: any;
//   base64Data: any;
//   retrieveResponse: any;
//   message: string = "";  // Initialize message to an empty string
//   imageName: any;
//   imageid:any;
//   userID:any;
//   profiles: any[] = [];

//   constructor(private http: HttpClient,public dialog: MatDialog,private profileService: ProfileService) { }

//   ngOnInit(): void {
//     this.loadBridePhotos();
//     this.getImages();

//     this.profileService.getProfiles().subscribe(data => {
//       this.profiles = data.map(profile => ({
//         ...profile,
       
//       }));
//     });
//   }

//   getImages() {
//     this.http.get<any[]>('http://localhost:8080/image/images')
//       .subscribe(
//         res => {
//           this.images = res.map(image => ({
//             ...image,
//             retrievedImage: 'data:image/jpeg;base64,' + image.picByte
//           }));
//         },
//         err => {
//           console.error(err);
//         }
//       );
//   }

//   loadBridePhotos(): void {
//     // Dummy bride data for demonstration
//     this.brides = [
//       { name: 'Bride 1', age: 25, imageUrl: 'https://media.istockphoto.com/id/1290304564/photo/portrait-of-very-beautiful-young-indian-bride-in-luxurious-bridal-costume-with-makeup-and.jpg?s=612x612&w=0&k=20&c=P0FoifDVWIjqxIrSLoWHPwaAojeB23_7KLVbt35Aeak=' },
//       { name: 'Bride 2', age: 28, imageUrl: 'https://image.wedmegood.com/resized-nw/600X/wp-content/uploads/2019/03/189465533_191384629509277_8411658702903306049_n.jpg' },
//       { name: 'Bride 3', age: 30, imageUrl: 'https://media.istockphoto.com/id/1219062770/photo/portrait-of-a-woman-in-a-traditional-indian-outfit.jpg?s=612x612&w=0&k=20&c=K-GSJ9Fe2qYiDO5FEHa-2KA8DcTYQfgUndjr2LkIq0Y=' },
//       // Add more bride objects with image URLs
//     ];
    
//     // Shuffle the array randomly (optional)
//     this.brides = this.shuffle(this.brides);
//   }

//   // Helper function to shuffle array
//   shuffle(array: any[]): any[] {
//     return array.sort(() => Math.random() - 0.5);
//   }
//   openDialog(dataToShow: String): void {
   
//     this.dialog.open(MyDialogComponent, {
//       data: dataToShow,
//     });
//   }

//   onCardClick(rid: number) {
//     // Make API call to fetch data for the selected card
//     this.http.get<any>(`http://localhost:8080/personal/${rid}`)
//       .subscribe(data => {
//         // Handle the response data
//         console.log(data);
//         const ageToShow = data.age; // Assuming 'age' is the property name in the response
//         const multilineContent = `Age: ${ageToShow}
//         Height: ${data.height}
//         Weight: ${data.weight}
//         Blood_Group: ${data.weight}
//         Blood_Group: ${data.bloodType}
//         Registration_ID: ${data.rId}`;
//         this.openDialog(multilineContent);

        
//       });


//   }

// }

import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';
import { MyDialogComponent } from '../../my-dialog/my-dialog.component';
import { ProfileService } from '../../services/profile.service';
import { Router } from '@angular/router';
import { NotificationService } from '../../services/notification.service';
import { UserService } from '../../services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css'] // Corrected property name
})
export class PhotosComponent implements OnInit {
  images: any[] = [];
  profiles: any[] = [];
  profileImages: any[] = [];
  selectedFile: File | null = null;
  imgURL: any;
  retrievedImage: any;
  base64Data: any;
  retrieveResponse: any;
  message: string = "";
  imageName: any;
  imageid: any;
  userID: any;
  email: string = '';
  message1: string = '';
  names:any;
  addresses:any;
  emails:any;
  phones:any;


  constructor(
    private http: HttpClient,
    public dialog: MatDialog,
    private profileService: ProfileService,
    private router: Router,
    private notificationService: NotificationService,
    private userService: UserService
  ) {
    const name = sessionStorage.getItem('name');
    if (name) {
      this.names = name;
    }
    const address = sessionStorage.getItem('address');
    if (address) {
      this.addresses = address;
    }

    const email = sessionStorage.getItem('email');
    if (email) {
      this.emails = email;
    }

    const phone = sessionStorage.getItem('phone');
    if (phone) {
      this.phones = phone;
    }
   }

  ngOnInit(): void {
   
    this.getImages();

    this.profileService.getProfiles().subscribe(data => {
      this.profiles = data;
      this.combineProfilesAndImages();
    });
  }

  getImages() {
    this.http.get<any[]>('http://localhost:8080/image/images')
      .subscribe(
        res => {
          this.images = res.map(image => ({
            ...image,
            retrievedImage: 'data:image/jpeg;base64,' + image.picByte
          }));
          this.combineProfilesAndImages();
        },
        err => {
          console.error(err);
        }
      );
  }

  combineProfilesAndImages() {
    if (this.profiles.length && this.images.length) {
      this.profileImages = this.profiles.map((profile, index) => ({
        profile,
        image: this.images[index] ? this.images[index].retrievedImage : null
      }));
    }
  }

  openDialog(dataToShow: String): void {
    this.dialog.open(MyDialogComponent, {
      data: dataToShow,
    });
  }

  onCardClick(rid: number) {
    this.http.get<any>(`http://localhost:8080/personal/${rid}`)
      .subscribe(data => {
        const multilineContent = `Age: ${data.age}
        Height: ${data.height}
        Weight: ${data.weight}
        Blood_Group: ${data.bloodType}
        Registration_ID: ${data.rId}`;
        this.openDialog(multilineContent);
      });
  }

  onMeetingClick(rid: number) {
    this.router.navigate(['/meeting-form', rid]);
  }
  onProfileClick(rid: number) {
    this.router.navigate(['/profile', rid]);
  }

  sendNotification(email: string, message: string) {
    this.notificationService.sendNotification(email, message).subscribe(response => {
      console.log('Notification sent successfully', response);
    }, error => {
      console.error('Error sending notification', error);
    });
  }

  addToFavorites(profile: any): void {
    const recrid = profile.id;
    const sendrid = sessionStorage.getItem('userId'); // Get sender ID from session storage
    const favorite = {
      recrid: recrid,
      sendrid: sendrid,
      email: profile.email,
      phone: profile.phone,
      name: profile.name
    };

    this.userService.addToFavorites(favorite).subscribe(response => {
      console.log('Profile added to favorites:', response);
      Swal.fire('Successfully Done !! ','Successfully added to profiles','success');
    }, error => {
      console.error('Error adding profile to favorites:', error);
      // Optionally, show an error message to the user
    });
  }
}


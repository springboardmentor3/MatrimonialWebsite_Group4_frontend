import { Component, OnInit } from '@angular/core';
import { ImageService } from '../services/image.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import Swal from 'sweetalert2';
import { DomSanitizer } from '@angular/platform-browser';
import { PersonalService } from '../services/personal.service';
import { FamilyService } from '../services/family.service';
import { EducationService } from '../services/education.service';
import { HttpClient, HttpEventType } from '@angular/common/http';

@Component({
  selector: 'app-completeprofile',
  templateUrl: './completeprofile.component.html',
  styleUrls: ['./completeprofile.component.css']
})
export class CompleteprofileComponent implements OnInit {
  public aboutYourself: string = '';

  images: any[] = [];
  public names: string = "";
  selectedFile: File | null = null;
  imgURL: any;
  retrievedImage: any;
  base64Data: any;
  retrieveResponse: any;
  message: string = "";
  imageName: any;
  imageid: any;
  userID: any;
  id: any;
  imageId: any; // Add this property for the image ID

  ngOnInit() {}

  constructor(
    private imageService: ImageService,
    private snack: MatSnackBar,
    private sanitizer: DomSanitizer,
    private personalService: PersonalService,
    private familyService: FamilyService,
    private educationService: EducationService,
    private httpClient: HttpClient
  ) {
    const userId = sessionStorage.getItem('userId');
    if (userId) {
      this.personal.rId = userId;
      this.family.rId = userId;
      this.education.rId = userId;
      this.imageId = userId;
    }

    const name = sessionStorage.getItem('name');
    if (name) {
      this.names = name;
    }
  }

  public education = {
    rId: '',
    education_level: '',
    education_filed: ''
  };

  formSubmit3() {
    console.log(this.education);
    this.educationService.addEducation(this.education).subscribe(
      (data) => {
        console.log(data);
        Swal.fire('Successfully Done !! ', 'Updated successfully', 'success');
      },
      (error) => {
        console.log(error);
        this.snack.open("Something went wrong!", '', { duration: 3000, verticalPosition: 'top' });
      }
    );
  }

  public personal = {
    rId: '',
    age: '',
    height: '',
    weight: '',
    bloodType: '',
   
  };

  formSubmit1() {
    console.log(this.personal);
    this.personalService.addPersonal(this.personal).subscribe(
      (data) => {
        console.log(data);
        Swal.fire('Successfully Done !! ', 'Updated successfully', 'success');
      },
      (error) => {
        console.log(error);
        this.snack.open("Something went wrong!", '', { duration: 3000, verticalPosition: 'top' });
      }
    );
    const descriptionCard = document.querySelector('.description_card .mat-card-content');
    if (descriptionCard) {
      console.log(this.aboutYourself);
      descriptionCard.innerHTML =this.aboutYourself;
    }
  }

  public family = {
    rId: '',
    family_status: '',
    family_name: '',
    family_Types: ''
  };

  formSubmit2() {
    console.log(this.family);
    this.familyService.addFamily(this.family).subscribe(
      (data) => {
        console.log(data);
        Swal.fire('Successfully Done !! ', 'Updated Successfully', 'success');
      },
      (error) => {
        console.log(error);
        this.snack.open("Something went wrong!", '', { duration: 3000, verticalPosition: 'top' });
      }
    );
  }

  // Gets called when the user selects an image
  public onFileChanged(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.selectedFile = input.files[0];
    }
  }

  // Gets called when the user clicks on submit to upload the image
  onUpload() {
    if (this.selectedFile && this.imageId) {
      console.log(this.selectedFile);

      // FormData API provides methods and properties to allow us easily prepare form data to be sent with POST HTTP requests.
      const uploadImageData = new FormData();
      uploadImageData.append('imageFile', this.selectedFile, this.selectedFile.name);
      uploadImageData.append('id', this.imageId); // Include the image ID

      // Make a call to the Spring Boot Application to save the image
      this.httpClient.post('http://localhost:8080/image/upload', uploadImageData, { observe: 'response' })
        .subscribe((response) => {
          if (response.status === 200) {
            this.message = 'Image uploaded successfully';
          } else {
            this.message = 'Image not uploaded successfully';
          }
        });
    } else {
      this.message = 'Please select an image and provide an ID';
    }
  }

  // Gets called when the user clicks on retrieve image button to get the image from back end
  getImage() {
    // Make a call to Spring Boot to get the Image Bytes.
    this.httpClient.get('http://localhost:8080/image/get/' + this.imageId)
      .subscribe(
        res => {
          this.retrieveResponse = res;
          this.base64Data = this.retrieveResponse.picByte;
          this.retrievedImage = 'data:image/jpeg;base64,' + this.base64Data;
        }
      );
  }


}

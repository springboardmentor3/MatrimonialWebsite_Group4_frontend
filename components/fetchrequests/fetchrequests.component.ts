import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { RequestService } from '../../services/request.service';
import { Router } from '@angular/router';
import { ProfileService } from '../../services/profile.service';
import { forkJoin } from 'rxjs';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-fetchrequests',
  templateUrl: './fetchrequests.component.html',
  styleUrls: ['./fetchrequests.component.css']
})
export class FetchrequestsComponent implements OnInit {
  profiles: any[] = [];
  nameprofiles: any[] = [];
  combinedProfiles: any[] = [];

  constructor(
    private http: HttpClient,
    public dialog: MatDialog,
    private requestService: RequestService,
    private profileService: ProfileService,
    private router: Router
  ) {}

  ngOnInit(): void {
this.loadProfiles();

    this.combineProfiles();
  }

  loadProfiles(): void {
    this.requestService.getProfilesByRecrid().subscribe(
      (data) => {
        this.profiles = data;
        this.loadNameProfiles(data.map(profile => profile.send_rid));
        console.log(this.profiles);
      },
      (error) => {
        console.error('Error fetching profiles:', error);
      }
    );
  }

  loadNameProfiles(rids: number[]): void {

    const requests = rids.map(rid => this.profileService.getProfileByRid(rid));
    console.log(requests);
   
    forkJoin(requests).subscribe(
      (nameProfiles) => {
        
        this.nameprofiles = nameProfiles;

        
        
        this.combineProfiles();
        console.log("Done");
      },
      (error) => {
        console.error('Error fetching name profiles:', error);
      }
    );
  }

  approveMessage(item: any) {
    // Call the service method to update the approval status
    this.requestService.updateApprovalStatus(item.profile.recrid).subscribe(
      () => {
        Swal.fire('Successfully Done !! ', 'Changed Approved Status', 'success');
        // Handle success
        console.log('Approval status updated successfully.');
      },
      (error) => {
        // Handle error
        console.error('Error updating approval status:', error);
      }
    );
  }

  // combineProfiles(): void {
  //   this.combinedProfiles = this.profiles.map(profile => {
  //     const nameProfile = this.nameprofiles.find(np => np.id === profile.sendrid);
  //     console.log(nameProfile);
  //     return { ...profile, ...nameProfile };
  //   });
  // }
  // combineProfiles(): void {
  //   this.combinedProfiles = [...this.profiles, ...this.nameprofiles];
  //   console.log(this.combinedProfiles);
  // }

  combineProfiles(): void {
    // Ensure both arrays are of the same length
    const maxLength = Math.max(this.profiles.length, this.nameprofiles.length);
    this.combinedProfiles = [];

    for (let i = 0; i < maxLength; i++) {
      this.combinedProfiles.push({
        profile: this.profiles[i] || {},
        nameProfile: this.nameprofiles[i] || {}
      });
    }
    console.log(this.combinedProfiles);
  }
}

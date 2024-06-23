import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { forkJoin } from 'rxjs';
import { ProfileService } from '../../services/profile.service';
import { RequestService } from '../../services/request.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sendrequests',
  templateUrl: './sendrequests.component.html',
  styleUrl: './sendrequests.component.css'
})
export class SendrequestsComponent {
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
    this.requestService.getProfilesBysendRecrid().subscribe(
      (data) => {
        this.profiles = data;
     
        this.loadNameProfiles(data.map(profile => profile.recrid));
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

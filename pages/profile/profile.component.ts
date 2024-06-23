import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { PersonalService } from '../../services/personal.service';
import { EducationService } from '../../services/education.service';
import { FamilyService } from '../../services/family.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  profile: any = null; // Change to single object
  rid: number | null = null;
  education:any=null;
  family :any=null;

  constructor(
    private http: HttpClient,
    public dialog: MatDialog,
    private route: ActivatedRoute,
    private personalService: PersonalService,
    private educationService: EducationService,
    private familyService:FamilyService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const ridParam = params.get('rid');
      if (ridParam) {
        this.rid = +ridParam;
        this.loadProfile(this.rid); // Load single profile
        this.loadEducation(this.rid);
        this.loadFamily(this.rid);
      }
    });
  }

  loadProfile(rid: number): void {
    this.personalService.getPersonal(rid).subscribe(
      (data) => {
        this.profile = data; // Assign the single profile
        console.log(this.profile);
      },
      (error) => {
        console.error('Error fetching profile:', error);
      }
    );
  }

  loadEducation(rid: number): void {
    this.educationService.getEducation(rid).subscribe(
      (data) => {
        this.education = data; // Assign the single profile
        console.log(this.education);
      },
      (error) => {
        console.error('Error fetching profile:', error);
      }
    );
  }

  loadFamily(rid: number): void {
    this.familyService.getFamily(rid).subscribe(
      (data) => {
        this.family = data; // Assign the single profile
        console.log(this.family);
      },
      (error) => {
        console.error('Error fetching profile:', error);
      }
    );
  }
}

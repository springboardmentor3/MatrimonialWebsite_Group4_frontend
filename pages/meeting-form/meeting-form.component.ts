import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MeetingService } from '../../services/meeting.service';
import Swal from 'sweetalert2';
import { MatSnackBar } from '@angular/material/snack-bar';
import {MatStepperModule} from '@angular/material/stepper';

@Component({
  selector: 'app-meeting-form',
  templateUrl: './meeting-form.component.html',
  styleUrls: ['./meeting-form.component.css']
})
export class MeetingFormComponent implements OnInit {
  meetingForm: FormGroup;
  

  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private meetingService: MeetingService,
    private snack: MatSnackBar
  ) {
    const userId = sessionStorage.getItem('userId');
    this.meetingForm = this.fb.group({
      recrid: [''],
      sendrid: [''],
      place: [''],
      date: [''],
      time: [''],
      message: ['']
    });
  }

  ngOnInit(): void {
    const send_rid = sessionStorage.getItem('userId');
    if (send_rid) {
      this.meetingForm.patchValue({sendrid: send_rid});
    }
    this.route.paramMap.subscribe(params => {
      const rid = params.get('rid');
      this.meetingForm.patchValue({ recrid: rid });
    });
  }

  onSubmit() {
    const formData = this.meetingForm.value;
    if (!formData.sendrid) {
      this.snack.open("Send Rid must not be null!", '', {
        duration: 3000,
        verticalPosition: 'top',
      });
      return;
    }
    // Ensure the time is in 'HH:mm:ss' format
    const formattedTime = this.formatTime(formData.time);
    if (!formattedTime) {
      this.snack.open("Invalid time format!", '', {
        duration: 3000,
        verticalPosition: 'top',
      });
      return;
    }
    formData.time = formattedTime;
    this.meetingService.addMeeting(formData).subscribe(
      (data) => {
        console.log(data);
        Swal.fire('Successfully Done !!', 'User is registered', 'success');
      },
      (error) => {
        console.log(error);
        this.snack.open("Something went wrong!", '', {
          duration: 3000,
          verticalPosition: 'top',
        });
      }
    );
    console.log(formData);
  }

  private formatTime(time: string): string | null {
    const timeParts = time.split(':');
    if (timeParts.length === 2) {
      // Add seconds if only hours and minutes are provided
      return `${timeParts[0]}:${timeParts[1]}:00`;
    } else if (timeParts.length === 3) {
      return time;
    } else {
      return null; // Invalid format
    }
  }
  isLinear = false;
}

  
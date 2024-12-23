import { Component, inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { EventApiService } from '../../../../utils/event-api.service';

@Component({
  selector: 'app-edit-event',
  standalone: false,
  
  templateUrl: './edit-event.component.html',
  styleUrl: './edit-event.component.scss'
})
export class EditEventComponent {
  constructor(private eventAPI: EventApiService, private dialogRef: MatDialogRef<EditEventComponent>) {}
  eventDetails = inject(MAT_DIALOG_DATA);
  newEvent = { ...this.eventDetails };

  editEvent() {
    this.eventAPI.editEvent(this.newEvent);
    this.dialogRef.close();
  }
}

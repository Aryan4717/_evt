import { Component } from '@angular/core';
import { EventApiService } from '../../../../utils/event-api.service';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-event',
  standalone: false,
  
  templateUrl: './add-event.component.html',
  styleUrl: './add-event.component.scss'
})
export class AddEventComponent {
  constructor(private eventAPI: EventApiService, private dialogRef: MatDialogRef<AddEventComponent>) {}
  newEvent: any = {
    eventName: "",
    date: new Date(),
    location: "",
    desc: "",
    attendees: []
  };

  addEvent() {
    this.eventAPI.addEvent(this.newEvent);
    this.dialogRef.close();
  }
}

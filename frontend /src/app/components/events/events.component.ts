import { Component, OnInit } from '@angular/core';

import { EventApiService } from '../../utils/event-api.service';
import { MatDialog } from '@angular/material/dialog';
import { EditEventComponent } from './components/edit-event/edit-event.component';
import { AddEventComponent } from './components/add-event/add-event.component';

@Component({
  selector: 'app-events',
  standalone: false,
  
  templateUrl: './events.component.html',
  styleUrl: './events.component.scss'
})

export class EventsComponent implements OnInit {
  constructor(private eventAPI: EventApiService, private dialog: MatDialog) {}

  eventsList: any[] = [];
  selectedEvent: any = {};

  async ngOnInit() {
    await this.getEvents();
  }

  async getEvents() {
    try {
      this.eventsList = await this.eventAPI.getEvents();
    } catch (error) {
      console.error('Error fetching events:', error);
    }

    this.selectedEvent = {};
  }

  isEmptyObj(obj: any): boolean {
    return obj && Object.keys(obj).length === 0;
  }

  async addEvent() {
    const dialogRef = this.dialog.open(AddEventComponent, {
      height: `75vh`,
      width: `50vw`
    })

    dialogRef.afterClosed().subscribe(() => {
      this.getEvents();
    });
  }

  async editEvent(event: any) {
    const dialogRef = this.dialog.open(EditEventComponent, {
      height: `75vh`,
      width: `50vw`,
      data: event
    })

    dialogRef.afterClosed().subscribe(() => {
      this.getEvents();
    });
  }

  async delEvent(id: string) {
    this.eventAPI.deleteEvent(id);
    await this.getEvents();
  }
}


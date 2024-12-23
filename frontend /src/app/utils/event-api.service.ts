import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EventApiService {
  constructor(private http: HttpClient) { }
  private URL = 'http://localhost:3000/events';

  async getEvents(): Promise<any> {
    try {
      return await lastValueFrom(this.http.get<any>(this.URL));
    } catch (error: any) {
      throw error;
    }
  }

  async addEvent(event: any): Promise<any> {
    try {
      return await lastValueFrom(this.http.post<any>(this.URL, event));
    } catch (error: any) {
      throw error;
    }
  }

  async editEvent(event: any): Promise<any> {
    try {
      return await lastValueFrom(this.http.patch<any>(`${this.URL}/${event.id}`, event));
    } catch (error: any) {
      throw error;
    }
  }

  async deleteEvent(eventID: string): Promise<any> {
    try {
      return await lastValueFrom(this.http.delete<any>(`${this.URL}/${eventID}`));
    } catch (error: any) {
      throw error;
    }
  }
}

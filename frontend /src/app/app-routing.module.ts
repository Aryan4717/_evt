import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomepageComponent } from './components/homepage/homepage.component';
import { EventsComponent } from './components/events/events.component';
import { UsersComponent } from './components/users/users.component';
import { TasksComponent } from './components/tasks/tasks.component';

const routes: Routes = [
  { path: '', title: 'Home', component: HomepageComponent },
  { path: 'home', title: 'Home', component: HomepageComponent },
  { path: 'events', title: 'Manage Events', component: EventsComponent },
  { path: 'tasks', title: 'Task Manager', component: TasksComponent },
  { path: 'users', title: 'Manage Users', component: UsersComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

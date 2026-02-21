import { Component, signal } from '@angular/core';
// import {NgFor, NgIf} from '@angular/common';

import { Header } from "./header/header";
import { User } from "./user/user";
import { DUMMY_USERS } from './dummy-users';
import { Tasks } from "./tasks/tasks";


@Component({
  selector: 'app-root',
  imports: [Header, User, Tasks],
  // imports: [Header, User, Tasks, NgFor, NgIf],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('first-angular-app');
  protected readonly users = signal(DUMMY_USERS);
  selectedUserID?: string;

  get selectedUser() {
    const user = this.users().find(u => u.id === this.selectedUserID);
    return user ? user : undefined;
  }

  onSelectUserApp(id: string){
    this.selectedUserID = id;
  }
}

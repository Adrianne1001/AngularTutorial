import { Component, signal } from '@angular/core';
import { Header } from "./header/header";
import { User } from "./user/user";
import { DUMMY_USERS } from './dummy-users';
import { Tasks } from "./tasks/tasks";

@Component({
  selector: 'app-root',
  imports: [Header, User, Tasks],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('first-angular-app');
  protected readonly users = signal(DUMMY_USERS);
  selectedUserID = 'u1';

  get selectedUserName() {
    const user = this.users().find(u => u.id === this.selectedUserID);
    return user ? user.name : '';
  }

  onSelectUserApp(id: string){
    this.selectedUserID = id;
  }
}

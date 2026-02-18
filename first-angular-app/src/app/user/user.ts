// import { Component, signal, computed } from '@angular/core';
import { Component, EventEmitter, Input, Output, computed, input, output } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';

const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.css',
})
// export class User {
//   // selectedUser = DUMMY_USERS[randomIndex];
//   selectedUser = signal(DUMMY_USERS[randomIndex]);
  
//   // get imagePath() {
//   //   return `assets/users/${this.selectedUser.avatar}`;
//   // }
  
//   imagePath = computed(() => `assets/users/${this.selectedUser().avatar}`);

//   onSelectUser(){  
//     const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
//     // this.selectedUser = DUMMY_USERS[randomIndex];
//     this.selectedUser.set(DUMMY_USERS[randomIndex]);
//   }
// }

export class User {
  // avatar = input.required<string>();
  // name = input.required<string>();
  // imagePath = computed(() => `assets/users/${this.avatar}`);
  // select = output<string>();
  
  @Input({required: true}) id!: string;
  @Input({required: true}) avatar!: string;
  @Input({required: true}) name!: string;
  get imagePath() {
    return `assets/users/${this.avatar}`;
  }

  @Output() select = new EventEmitter<string>();  
  onSelectUser(){
    this.select.emit(this.id);
  }
}
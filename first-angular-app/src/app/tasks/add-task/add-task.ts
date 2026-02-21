import { Component,EventEmitter, Input, Output } from '@angular/core';
import { TaskObj } from '../../task/task.model';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-add-task',
  imports: [FormsModule],
  templateUrl: './add-task.html',
  styleUrl: './add-task.css',
})
export class AddTask {
  @Input({required: true}) selectedUserID!: string;
  @Output() cancelAddTask = new EventEmitter<void>();
  @Output() addTask = new EventEmitter<TaskObj>();
  
  newTask = {} as TaskObj;
  ngOnInit() {
    this.newTask.userId = this.selectedUserID;
  }
  onCancel(){
    this.cancelAddTask.emit();
  }
  onSubmit(){
    this.newTask.id = Math.random().toString(36).substring(2, 9);
    this.addTask.emit(this.newTask);
  }
}

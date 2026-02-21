import { Component, Input, signal } from '@angular/core';
import { Task } from '../task/task';
import { dummyTasks } from '../dummyTasks';
import { TaskObj } from '../task/task.model';
import { AddTask } from './add-task/add-task';

@Component({
  selector: 'app-tasks',
  imports: [Task, AddTask],
  templateUrl: './tasks.html',
  styleUrl: './tasks.css',
})
export class Tasks {
  @Input({required: true}) name!: string;
  @Input({required: true}) selectedUserID!: string;
  protected tasks = signal(dummyTasks);
  isStartAddingTask = false;

  get selectedUserTasks() {
    const task = this.tasks().filter(t => t.userId === this.selectedUserID);
    return task? task : undefined;
  }
  onCompleteTask(taskId: string){
    this.tasks.set(this.tasks().filter(t => t.id !== taskId));
  }
  onAddTask(){
    this.isStartAddingTask = true;
  } 
  onCancelAddTask(){
    this.isStartAddingTask = false;
  }
  onSubmitTask(newTask: TaskObj){
    this.tasks().push(newTask);
    this.isStartAddingTask = false;
  }
}

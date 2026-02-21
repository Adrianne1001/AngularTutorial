import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TaskObj } from './task.model';
import { Card } from "../shared/card/card";
import { DatePipe } from '@angular/common';


@Component({
  selector: 'app-task',
  templateUrl: './task.html',
  styleUrl: './task.css',
  imports: [Card, DatePipe],
})
export class Task {
  @Input({required: true}) task!: TaskObj;
  @Output() complete = new EventEmitter<string>();

  OnCompleteTask(){
    this.complete.emit(this.task.id);
  }
}

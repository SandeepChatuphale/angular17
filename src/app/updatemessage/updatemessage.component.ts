import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Message } from '../../model/Message';
import { MessageService } from '../service/message.service';

@Component({
  selector: 'app-updatemessage',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './updatemessage.component.html',
  styleUrl: './updatemessage.component.css'
})
export class UpdatemessageComponent {

  id:number = 0;
  name:string = ''

  //Input decorator is used to pass data from parent to child
  @Input()
  sm = new Message(0,'')

  //Output decorator is used to pass data from Child to Parent
  @Output()
  messageEmitter = new EventEmitter<string>();

  constructor(private service:MessageService){}

  updateMessage()
  {
    this.service.update(this.sm).subscribe({
      next: (success) => {this.messageEmitter.emit('updated successfully')},  //this call should invoke a method in parent component
      error: (e) => this.messageEmitter.emit('Error try again')
    })
  }

  cancel()
  {
    this.messageEmitter.emit('updation cancelled') //this call should invoke a method in parent component
  }
}

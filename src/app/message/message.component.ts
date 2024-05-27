import { Component } from '@angular/core';
import { MessageService } from '../service/message.service';
import { Message } from '../../model/Message';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { UpdatemessageComponent } from '../updatemessage/updatemessage.component';
import { SortmessageComponent } from '../sortmessage/sortmessage.component';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css'],
  standalone: true,
  imports:[CommonModule,HttpClientModule,UpdatemessageComponent,SortmessageComponent]
})
export class MessageComponent {
  
  //todo - make a rest call
  messages:Message[] = []

  message = 'No Data'

  showUpdateForm = false;


  messageTobeUpdated = new Message(0,'')

  //DI - this is Dependency Injection 
  //using DI angular is injecting MessageService Object
  constructor(private service : MessageService){
    this.showAll()
  }

  showAll()
  {
   /* this.service.findAll().subscribe((success:Message[]) => {
      this.messages = success;
      this.message = 'data fetched'
    } )*/

    this.service.findAll().subscribe({
    next:  (success:Message[]) => {
      this.messages = success;
      this.message = 'data fetched'
    },
    error : (e) => {
      if(e.status == 0)
        {
          this.message = 'Server Down please try after sometime'
        }
    }
  })

    this.message = 'Loading...'
  }

  sortMessages(sortCriteria:string)
  {
    if(sortCriteria === 'ASC')
      {
        this.messages.sort((m1,m2) => m1.id - m2.id)
      }
      else if(sortCriteria === 'DESC')
      {
          this.messages.sort((m1,m2) => m2.id - m1.id)
      }
  } 
 
  //this is invoked when child component is emitting
  //this (msg) string is send by child component
  hideUpdateForm(msg:string)
  {
    this.showUpdateForm = false;
    this.message = msg
  }

  //show update form wih exisitng record
  showUpdate(m : Message)
  {
    this.showUpdateForm = true;
    this.messageTobeUpdated = m;
  }

  deleteById(id:number)
  {
    const result = confirm('are you sure?')
    if(result)
    {
     /* this.service.deleteMessageById(id).subscribe(success => {
        this.messages =  this.messages.filter(m => m.id != id)
      }) */

      this.service.deleteMessageById(id).subscribe(
      {
          //success path
        next : (success) => {this.messages =  this.messages.filter(m => m.id != id)},

        //error - is error
        error: (e) => { console.log(e) 

          if(e.status == 404 )
          {
            this.message = 'resource not found'
          }
          if(e.status == 401 )
            {
              this.message = 'you are not authenticated'
            }
        }
      })  
    }
      
  }
}

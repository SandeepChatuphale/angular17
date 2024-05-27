import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MessageComponent } from './message/message.component';
import { AddmessageComponent } from './addmessage/addmessage.component';
import { MenuComponent } from './menu/menu.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,MessageComponent,AddmessageComponent,MenuComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'v2';
}

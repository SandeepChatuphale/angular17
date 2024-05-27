import { Routes } from '@angular/router';
import { AddmessageComponent } from './addmessage/addmessage.component';
import { MessageComponent } from './message/message.component';

export const routes: Routes = [ {path:'messages',component:MessageComponent},
{path:'addmessage',component:AddmessageComponent}];



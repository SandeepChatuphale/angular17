import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-sortmessage',
  standalone: true,
  imports: [],
  templateUrl: './sortmessage.component.html',
  styleUrl: './sortmessage.component.css'
})
export class SortmessageComponent {

  @Output()
  sortEmitter = new EventEmitter<string>();

  updateSortCriteria(criteria:string)
  {
    this.sortEmitter.emit(criteria);
  }
}

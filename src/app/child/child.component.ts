import { Component, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {
  @Output()
dataChange: EventEmitter<string> = new EventEmitter();
sendDataToParent(): void {
  this.dataChange.emit('Chaîne de caractères envoyée au parent');
}
}

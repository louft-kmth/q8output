import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CreateOnomatopiaComponent } from './create-onomatopia/create-onomatopia.component';



@Component({
  selector: 'app-root',
  standalone: true,
  imports : [RouterOutlet, CreateOnomatopiaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'q7';
  onomatopoeiaList: string[] = [];
  onReceiveNewOnomatopia(newOnomatopia: string) {
    this.onomatopoeiaList.push(newOnomatopia);
  }
}

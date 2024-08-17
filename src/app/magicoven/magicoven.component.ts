import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { ingredient } from '../ingredient.modele';

@Component({
  selector: 'app-magicoven',
  standalone: true,
  imports: [],
  templateUrl: './magicoven.component.html',
  styleUrls: ['./magicoven.component.css'] // Correction ici : styleUrls au lieu de styleUrl
})
export class MagicovenComponent implements OnInit {
  @Input() number: number = 0; // Déclarez la propriété number

  @Output()
  cookies: EventEmitter<number> = new EventEmitter(); 

  sendCookies() {
    this.cookies.emit(this.number);
  }

  constructor() {}

  ngOnInit(): void {
    // Initialisation si nécessaire
  }
}

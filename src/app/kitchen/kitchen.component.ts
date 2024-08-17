import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MagicovenComponent } from '../magicoven/magicoven.component';

@Component({
  selector: 'app-kitchen',
  standalone: true,
  imports: [CommonModule, FormsModule, MagicovenComponent],
  templateUrl: './kitchen.component.html',
  styleUrls: ['./kitchen.component.css']
})
export class KitchenComponent implements OnInit {
  flour: number;
  salt: number;
  sugar: number;
  egg: number;
  number: number;
  isCooked: boolean;

  constructor() {
    this.flour = 0;
    this.salt = 0;
    this.sugar = 0;
    this.egg = 0;
    this.number = 0;
    this.isCooked = false;
  }

  startCooking() {
    this.isCooked = true;
  } // Fermez correctement la méthode startCooking

  ngOnInit(): void {
    // Initialisation si nécessaire
  }
}


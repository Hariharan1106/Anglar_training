import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule,CommonModule],
  // templateUrl: './app.html',
   templateUrl:'./app.html',
  styleUrl: './app.css'
})
export class App {

  // clickcount=0;

  // clickMe()
  // {
  //   this.clickcount++;
  // }

  // Fruits = [ 'Apple','Orange','Banana','Mango','Watermelon']
        //      0        1        2        3        4

        applyRed = false;

}

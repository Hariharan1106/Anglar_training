import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
   title = 'List of Movies';


   movies=[
    {title :'Zootopia',director: 'Bryon Howard,Rich Moore',cast : 'Idris Elba,Ginnifer, Jason Bateman ',releaseDate: 'March 4, 2016'},
    {title: 'Batman vs Superman: Dawn of Justice',director:'Zack snyder',cast: 'Ben Affleck, Henry Cavill,Amy Adams', releaseDate:'March 25, 2016'},
     {title :'Captain American',director: 'Bryon Howard,Rich Moore',cast : 'Idris Elba,Ginnifer, Jason Bateman ',releaseDate: 'Feb 4, 2016'},
    {title: 'X-men : Apocalypse',director:'Zack snyder',cast: 'Ben Affleck, Henry Cavill,Amy Adams', releaseDate:'May 27, 2016'},
    {title :'Warcraft ',director: 'Bryon Howard,Rich Moore',cast : 'Idris Elba,Ginnifer, Jason Bateman ',releaseDate: 'June 10 , 2016'}
   
 
]
}

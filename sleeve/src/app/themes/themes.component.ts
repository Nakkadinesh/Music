import { Component } from '@angular/core';

@Component({
  selector: 'app-themes',
  templateUrl: './themes.component.html',
  styleUrl: './themes.component.css'
})
export class ThemesComponent {
services:any[];
constructor(){
  this.services=[
{bgi:"assets/images/playlist1.jpg",para:"Switch between themes with just a click.Modify the built-in themes or create your own using Sleeve’s extensive preferences.",img:"assets/images/Artwork1.jpg",head:"Change it up"},
{bgi:"assets/images/playlist3.jpg",para:"Export your themes and share them with friends using the handy new Sleeve Theme file format.Install themes from anywhere with a double-click or a drag and drop.",img:"assets/images/AppDoppler.png",head:"Shareable"}
  ]
}
}

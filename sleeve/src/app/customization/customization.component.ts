import { Component } from '@angular/core';

@Component({
  selector: 'app-customization',
  templateUrl: './customization.component.html',
  styleUrl: './customization.component.css'
})
export class CustomizationComponent {
services:any[];
constructor(){
  this.services=[
    {paragraph:"Scale artwork all the way up or all the way down.Round the corners or leave them square Choose shadow and lighting effects to bring your album artwork to life.Or hide it completely.",name:"Artwork",topimg:"assets/images/IconArrayArtwork.png",sideimg:"assets/images/Artwork1.jpg"},
    {paragraph:"typo grpahy paraPick the track info you want to display, and then exactly how to display it.Choose the fonts, weights, sizes, and transparency to use for each line, along with customizing color and shadow.",name:"Typography",topimg:"assets/images/Typography1.jpg",sideimg:"assets/images/FeatureText.png"},
    {paragraph:"Customize the layout, alignment and position to fit your setup.Show and hide playback controls. Add a backdrop layer and customize it.",name:"Interface",topimg:"assets/images/IconArrayPosition.png",sideimg:"assets/images/Interface1.jpg"},
    {paragraph:"Decide if Sleeve stays out of the way, behind windows, or in front of them — or only when you need to see it.Show it in the Dock, choose from custom icons, or keep it on the Desktop only.Set your custom keyboard shortcuts and integrate with the apps you use.",name:"Settings",topimg:"assets/images/IconArraySettings.png",sideimg:"assets/images/Settings1.jpg"}
  ]
}
}

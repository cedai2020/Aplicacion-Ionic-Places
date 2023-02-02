import { Component, OnInit } from '@angular/core';
import { PhotosService } from './photos.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  photos = [] as any

  constructor(private photosService: PhotosService) {}

  ngOnInit() {
     this.photosService.getPhotos().subscribe(data => {
      this.photos = data
     })
  }

}

import { Injectable } from '@angular/core';
import {Place} from './place.model'

@Injectable({
  providedIn: 'root'
})
export class PlacesService {

  private places: Place[] = [
    {
      id: '1',
      title: 'Effeil Tower',
      imageURL: 'https://mx.hola.com/imagenes/viajes/20200325164049/torre-eiffel-paris-maravillas-del-mundo-desde-mi-pantalla/0-803-199/torre-eiffel-iliminada-paris-a.jpg',
      coments: ['Un lugar maravilloso', 'Quiero volver ahí']
    },
    {
      id: '2',
      title: 'Alaska',
      imageURL: 'https://tipsparatuviaje.com/wp-content/uploads/2018/11/alaska-ee-uu.jpg',
      coments: ['Muy relajante, aunque hace mucho frío']
    },
    {
      id: '3',
      title: 'Tahití',
      imageURL: 'https://tipsparatuviaje.com/wp-content/uploads/2018/11/tahiti-francia.jpg',
      coments: ['Una lugar paradisiaco', 'Se ve muy interesante']
    },
    {
      id: '4',
      title: 'Cancun',
      imageURL: 'https://tipsparatuviaje.com/wp-content/uploads/2018/11/cancun-mexico.jpg',
      coments: []
    }
  ]

  constructor() { }

  getPlaces() {
    return [...this.places]
  }

  getPlace(placeId: string | null) {
    return {
      ...this.places.find(place => {
        return place.id === placeId
      })
    }
  }

  addPlace(title: string, imageURL: string) {
    this.places.push({
      title,
      imageURL,
      coments: [],
      id: this.places.length + 1 + ""
    });
  }

  deletePlace(placeId: string | undefined) {
    this.places = this.places.filter(place => {
      return place.id !== placeId
    })
  }
}

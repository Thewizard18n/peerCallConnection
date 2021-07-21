import { Injectable} from '@angular/core';
import { config } from './config-local-media'
import { Observable  } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MediaDataService {

  constructor() { }

  getMediaDevices (){
    return new Observable(subscriber => {
      subscriber.next(navigator.mediaDevices.getUserMedia(config));
    }) 
  }
}

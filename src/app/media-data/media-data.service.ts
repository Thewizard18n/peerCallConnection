import { Injectable} from '@angular/core';
import { config } from './config-local-media'

import { Observable , from  } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MediaDataService {

  device: string[] = []

  constructor() { }
  Config = {
    audio:false,
    video:true, 
  }

  getMediaDevices () {
     const media$ =  from(
      navigator.mediaDevices.getUserMedia(this.Config)
     )
     return media$
  }

  getConnectedDevices () {
    const devices$ = from(
      navigator.mediaDevices.enumerateDevices()
    )
    return devices$
  }
}

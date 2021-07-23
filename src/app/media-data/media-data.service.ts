import { Injectable} from '@angular/core';
import { config } from './config-local-media'

import { Observable , from  } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MediaDataService {

  constructor() { }
  Config = {
    audio:true,
    video:true, 
  }

  getMediaDevices (){
    console.log("passei aqui na funcao mediadevice")
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

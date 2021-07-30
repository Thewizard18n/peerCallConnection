import { Injectable} from '@angular/core';
import { config } from './config-local-media'

import { Observable , from  } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MediaDataService {

  Config = {
   audio:true,
   video:true
  }

  constructor() { }


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

      navigator.mediaDevices.addEventListener('devicechange' , () => {})
	  return devices$
  }

}

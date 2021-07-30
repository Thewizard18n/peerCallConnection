import { Component, OnInit, ViewChild , ElementRef} from '@angular/core'
import { MediaDataService } from './media-data.service'
import { Store } from '@ngrx/store'
import { Observable } from 'rxjs'

import { refusedConnection } from '../state/actions/waiting-confirmation'
import { isTracked } from '../state/actions/stream-track'


@Component({
  selector: 'app-media-data',
  templateUrl: './media-data.component.html',
  styleUrls: ['./media-data.component.css']
})

export class MediaDataComponent implements OnInit {

  @ViewChild('videoOfUser') el:any = ElementRef

  stream:any

  waitingConfirmation$: Observable<boolean>
  streamTracked$: Observable<boolean>
 

  isCheckedMic = false
  isCheckedVideo = false
  videoOff = false



  constructor(
    private mediaService: MediaDataService,
    private store: Store<any>
    )
    {
      this.waitingConfirmation$ = store.select("connection")
      this.streamTracked$ = store.select("tracked")
    }
    
    micChange(event:any) {
        const mic = this.el.nativeElement.srcObject.getTracks()[0]
        mic.enabled =  event
    }

    videoChange(event:any) {
        const cam = this.el.nativeElement.srcObject.getTracks()[1]
        cam.enabled =  event
        this.videoOff = !event
    }
    
      
    availablesDevices (callback:any) {
      this.mediaService.getConnectedDevices().subscribe(
        devices => callback(devices.map((devices:any) => {
          if( devices.kind == 'audioinput' || devices.kind == 'videoinput'){
             return devices.kind
          }
        }))
      )
 }
	
   
    
    modelBehavior (data:any) {
      
      if(data.length == 0 ){}
      
      else if(data.includes("videoinput") && data.includes("audioinput")){

       this.store.dispatch(isTracked())
       this.isCheckedMic=true
       this.isCheckedVideo=true
       this.streamOpen(this.stream , this.el.nativeElement) 
       
     }else if(data.includes("videoinput")){

       this.store.dispatch(isTracked())
       this.isCheckedVideo = true
       this.streamOpen(this.stream , this.el.nativeElement) 
        
      }else {

       this.isCheckedMic = true

      }
    }

    streamOpen (stream:any , el:any) {
      el.srcObject =  stream
      el.onloadedmetadata = function () {
      el.play();
    }
   
  } 

    ngOnInit () {
      this.mediaService.getMediaDevices().subscribe( media =>{
        this.stream = media
        this.availablesDevices((data:any) => this.modelBehavior(data))
        
      },
      () => this.store.dispatch(refusedConnection()))
    }
  }



   

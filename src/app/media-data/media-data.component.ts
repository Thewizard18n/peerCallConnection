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
  dd=['audio' , 'video']


  constructor(
    private mediaService: MediaDataService,
    private store: Store<any>
    )
    {
      this.waitingConfirmation$ = store.select("connection")
      this.streamTracked$ = store.select("tracked")
    }
    
    micChange(event:any) {
      if(!event){
        const mic = this.el.nativeElement.srcObject.getTracks()[0]
        mic.enabled =  false
      }else{
        const mic = this.el.nativeElement.srcObject.getTracks()[0]
        mic.enabled =  true
      }
    }

    videoChange(event:any) {
      if(!event){
        const cam = this.el.nativeElement.srcObject.getTracks()[1]
        cam.enabled =  false
      }else {
        const cam = this.el.nativeElement.srcObject.getTracks()[1]
        cam.enabled =  true
      }
        this.videoOff = !event
    }
    
    filterDevicesByType ( ) {
      const filter = (devices:any) => devices.kind == 'audioinput' || devices.kind == 'videoinput'
      return filter
    }
    
    chooseDevice (callback:any) {
      this.mediaService.getConnectedDevices().subscribe(
        devices => callback(devices.filter(this.filterDevicesByType()))
      )
    }

    AvailablesDevices (data:any) {

      const  availableDevices = data.map((devices:any) => {
        if(devices.kind === "videoinput" || devices.kind === "audioinput"){
          return devices.kind
        }
      })

      if(availableDevices.length == 0 ){}
      
      else if(availableDevices.includes("videoinput") && availableDevices.includes("audioinput")){

       this.store.dispatch(isTracked())
       this.isCheckedMic=true
       this.isCheckedVideo=true
       this.streamOpen(this.stream , this.el.nativeElement) 
       
     }else if(availableDevices.includes("videoinput")){

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
        this.chooseDevice((data:any) => this.AvailablesDevices(data))
        
      },
      () => this.store.dispatch(refusedConnection()))
    }
  }



   
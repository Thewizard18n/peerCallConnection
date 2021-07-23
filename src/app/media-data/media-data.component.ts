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
  isCheckedMic = true
  isCheckedVideo = true


  constructor(
    private mediaService: MediaDataService,
    private store: Store<any>
    )
    {
      this.waitingConfirmation$ = store.select("connection")
      this.streamTracked$ = store.select("tracked")
    }
    
    
    micChange(event:any, device:any) {
      if(!event){
        this.el.nativeElement.srcObject.getTracks().map((onDevice:any) => {
          if(onDevice.kind == device){
            onDevice.stop()
          }
        })
      } else {
        this.mediaService.getMediaDevices().subscribe( media =>{
          this.stream = media
          this.store.dispatch(isTracked())
          this.streamOpen(this.stream, this.el.nativeElement) 
        },
        () => {
          this.store.dispatch(refusedConnection())
        })
      }
    }

    videoChange(event:any , device:any ) {
      if(!event){
       this.el.nativeElement.srcObject.getTracks().map((onDevice:any) => {
          if(onDevice.kind == device){
            onDevice.stop()
          }
        }) 
      }else {
        this.mediaService.getMediaDevices().subscribe( media =>{
          this.stream = media
          this.store.dispatch(isTracked())
          this.streamOpen(this.stream, this.el.nativeElement) 
        },
        () => {
          this.store.dispatch(refusedConnection())
        })
      }
    }
    
    filterDevicesByType (type:any) {
      const filter = (devices:any) => devices.kind == type
      return filter
    }
    
    chooseDevice (type:any) {
      this.mediaService.getConnectedDevices().subscribe(
        devices => console.log(devices.filter(this.filterDevicesByType(type)))
        )
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
        this.store.dispatch(isTracked())
        this.streamOpen(this.stream, this.el.nativeElement) 
      },
      () => {
        this.store.dispatch(refusedConnection())
      })
    }
  }
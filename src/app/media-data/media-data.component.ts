import { Component, OnInit, ViewChild , ElementRef} from '@angular/core';
import { MediaDataService } from './media-data.service';


@Component({
  selector: 'app-media-data',
  templateUrl: './media-data.component.html',
  styleUrls: ['./media-data.component.css']
})

export class MediaDataComponent implements OnInit {
  @ViewChild('videoOfUser') el:any = ElementRef

  waitingConfirmation: Boolean = true
  streamTracked = false
  dd=['video' , 'audio']
  foundMedia = true
  micInputOn = false
  videoInputOn = false
  invite= false

  constructor(private mediaService: MediaDataService) {}

    streamOpen (stream:any , el:any) {
      el.srcObject =  stream
      el.onloadedmetadata = function () {
      el.play();
    }
  }
  
    ngOnInit () {
    this.mediaService.getMediaDevices().subscribe(async val =>{
      this.streamOpen(await val , this.el.nativeElement) 
    })
  }
     
}

import { Component, OnInit, ViewChild , ElementRef} from '@angular/core';
import { MediaDataService } from './media-data.service';


@Component({
  selector: 'app-media-data',
  templateUrl: './media-data.component.html',
  styleUrls: ['./media-data.component.css']
})

export class MediaDataComponent implements OnInit {
  @ViewChild('videoOfUser') el:any = ElementRef

  stream:any
  waitingConfirmation: Boolean = true
  streamTracked = false


  constructor(private mediaService: MediaDataService) {}

    streamOpen (stream:any , el:any) {
      console.log(stream)
      el.srcObject =  stream
      el.onloadedmetadata = function () {
      el.play();
    }
  }
    ngOnInit () {
    this.mediaService.getMediaDevices().subscribe(async deviceConnected =>{
      this.stream = await deviceConnected
      this.streamTracked = this.stream.active
      this.streamOpen(this.stream, this.el.nativeElement) 
    })
  }
  
     
}

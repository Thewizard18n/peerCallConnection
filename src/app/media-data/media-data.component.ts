import { Component, OnInit, ViewChild , ElementRef} from '@angular/core';
import { MediaDataService } from './media-data.service';
import { Store } from '@ngrx/store';
import { isTracked } from '../state/actions/stream-track';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-media-data',
  templateUrl: './media-data.component.html',
  styleUrls: ['./media-data.component.css']
})

export class MediaDataComponent implements OnInit {
  @ViewChild('videoOfUser') el:any = ElementRef

  stream:any
  waitingConfirmation: Boolean = true
  streamTracked$: Observable<boolean>


  constructor(
    private mediaService: MediaDataService,
    private store: Store<{ tracked: boolean}>
    ) {
      this.streamTracked$ = store.select("tracked")
    }

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

      this.store.dispatch(isTracked())
      
      this.streamOpen(this.stream, this.el.nativeElement) 
    })
  }
    
}

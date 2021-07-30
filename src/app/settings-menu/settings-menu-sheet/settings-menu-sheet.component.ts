import { Component, OnInit } from '@angular/core';
import {MediaDataService} from 'src/app/media-data/media-data.service';

@Component({
  selector: 'app-settings-menu-sheet',
  templateUrl: './settings-menu-sheet.component.html',
  styleUrls: ['./settings-menu-sheet.component.css']
})
export class SettingsMenuSheetComponent implements OnInit {
	
	devicesForChoosing: any 

  constructor( private mediaService : MediaDataService) { }

  choosingPriorityDevice (type:any) {

			this.mediaService.getConnectedDevices().subscribe( devices => {
				const devicesAvailables = devices.filter((devices: any) => devices.kind == type)
				this.devicesForChoosing = devicesAvailables
				
			})
  }

  ngOnInit(): void {}

}

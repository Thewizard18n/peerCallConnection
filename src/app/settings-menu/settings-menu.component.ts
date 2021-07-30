import { Component, OnInit } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { SettingsMenuSheetComponent } from './settings-menu-sheet/settings-menu-sheet.component';

@Component({
  selector: 'app-settings-menu',
  templateUrl: './settings-menu.component.html',
  styleUrls: ['./settings-menu.component.css']
})
export class SettingsMenuComponent implements OnInit {

  constructor(
	  private settingForDevices: MatBottomSheet
  ) { }

  ngOnInit(): void {
  }
 
  openSettings () {
    this.settingForDevices.open(SettingsMenuSheetComponent)
  }
}

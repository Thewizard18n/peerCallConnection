import { NgModule } from '@angular/core'
import { MatIconModule } from '@angular/material/icon'
import { MatSlideToggleModule } from '@angular/material/slide-toggle'
import { MatButtonModule } from '@angular/material/button' 
import { MatSidenavModule } from '@angular/material/sidenav';


@NgModule({
  declarations: [],
  imports: [
    MatIconModule,
    MatSlideToggleModule,
    MatButtonModule,
    MatSidenavModule
  ],
  exports: [
    MatIconModule,
    MatSlideToggleModule,
    MatButtonModule,
    MatSidenavModule
  ]
})
export class MaterialModule { }

import { NgModule } from '@angular/core'
import { MatIconModule } from '@angular/material/icon'
import { MatSlideToggleModule } from '@angular/material/slide-toggle'
import { MatButtonModule } from '@angular/material/button' 


@NgModule({
  declarations: [],
  imports: [
    MatIconModule,
    MatSlideToggleModule,
    MatButtonModule
  ],
  exports: [
    MatIconModule,
    MatSlideToggleModule,
    MatButtonModule
  ]
})
export class MaterialModule { }

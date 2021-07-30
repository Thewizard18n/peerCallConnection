import { NgModule } from '@angular/core'
import { MatIconModule } from '@angular/material/icon'
import { MatSlideToggleModule } from '@angular/material/slide-toggle'
import { MatButtonModule } from '@angular/material/button' 
import { MatBottomSheetModule } from '@angular/material/bottom-sheet'; 
import { MatExpansionModule } from '@angular/material/expansion'

@NgModule({
  declarations: [],
  imports: [
    MatIconModule,
    MatSlideToggleModule,
    MatButtonModule,
    MatBottomSheetModule,
    MatExpansionModule 
  ],
  exports: [
    MatIconModule,
    MatSlideToggleModule,
    MatButtonModule,
    MatBottomSheetModule,
    MatExpansionModule
 ]
})
export class MaterialModule { }

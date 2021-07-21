import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './share/material/material.module';

import { AppComponent } from './app.component';
import { MediaDataComponent } from './media-data/media-data.component';
import { StoreModule } from '@ngrx/store';
import { streamTrack } from './state/reducers/stream-track-reducer';

@NgModule({
  declarations: [
    AppComponent,
    MediaDataComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MaterialModule,
    StoreModule.forRoot({tracked: streamTrack})
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }

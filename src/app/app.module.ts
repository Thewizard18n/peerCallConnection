import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './share/material/material.module';

import { StoreModule } from '@ngrx/store';
import { streamTrack } from './state/reducers/stream-track-reducer';
import { connection } from './state/reducers/connection-reducer';

import { AppComponent } from './app.component';
import { MediaDataComponent } from './media-data/media-data.component';
import { FormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    AppComponent,
    MediaDataComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MaterialModule,
    StoreModule.forRoot({
      tracked: streamTrack,
      connection: connection,
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }

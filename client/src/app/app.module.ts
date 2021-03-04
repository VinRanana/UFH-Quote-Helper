import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RoomComponent } from './room/room.component';
import { MainComponent } from './main/main.component';
import { OutputLineComponent } from './output-line/output-line.component';

@NgModule({
  declarations: [
    AppComponent,
    RoomComponent,
    MainComponent,
    OutputLineComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

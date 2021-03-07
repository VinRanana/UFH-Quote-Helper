import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RoomComponent } from './room/room.component';
import { MainComponent } from './main/main.component';
import { OutputLineComponent } from './output-line/output-line.component';
import { FormsModule } from '@angular/forms';
import { InputSectionComponent } from './input-section/input-section.component';
import { OutputSectionComponent } from './output-section/output-section.component';

@NgModule({
  declarations: [
    AppComponent,
    RoomComponent,
    MainComponent,
    OutputLineComponent,
    InputSectionComponent,
    OutputSectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

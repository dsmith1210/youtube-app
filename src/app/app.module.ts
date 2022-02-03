import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BigCardComponent } from './navigation/bigcard/bigcard.component';
import { SideNavBarComponent } from './navigation/sidenavbar/sidenavbar.component';
import { TopNavBarComponent } from './navigation/topnavbar/topnavbar.component';
import { VideoCardsComponent } from './navigation/videocards/videocard.component';

@NgModule({
  declarations: [
    AppComponent,
    TopNavBarComponent,
    BigCardComponent,
    SideNavBarComponent,
    VideoCardsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

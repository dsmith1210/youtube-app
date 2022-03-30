import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'; 
import { UserInfoComponent } from './header/user-info.component';

import { AppComponent } from './app.component';
import { BigCardComponent } from './navigation/bigcard/bigcard.component';
import { SideNavBarComponent } from './navigation/sidenavbar/sidenavbar.component';
import { TopNavBarComponent } from './navigation/topnavbar/topnavbar.component';
import { VideoCardsComponent } from './navigation/videocards/videocard.component';
import { AppRoutingModule } from './app-routing.module';
import { Video1Component } from './video/card1-layout.component';
import { AddVideoComponent } from './add-video/add-video.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideDatabase,getDatabase } from '@angular/fire/database';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import * as firebase from 'firebase/compat';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    TopNavBarComponent,
    BigCardComponent,
    SideNavBarComponent,
    VideoCardsComponent,
    UserInfoComponent,
    AddVideoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

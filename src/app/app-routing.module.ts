import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AddVideoComponent } from './add-video/add-video.component';
import { TopNavBarComponent } from './navigation/topnavbar/topnavbar.component';

const routes:Routes = [
  {path: "", component: TopNavBarComponent},
  {path: "admin", component: AddVideoComponent}
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }

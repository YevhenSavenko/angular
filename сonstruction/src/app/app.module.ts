import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BasicComponent } from './basic/basic.component';
import { FirstLayoutComponent } from './first-layout/first-layout.component';
import { BootstrapComponent } from './bootstrap/bootstrap.component';
import { AdaptiveComponent } from './adaptive/adaptive.component';
import { PseudoclassesComponent } from './pseudoclasses/pseudoclasses.component';
import { AnimationComponent } from './animation/animation.component';
import { VideoBgComponent } from './video-bg/video-bg.component';

@NgModule({
  declarations: [
    AppComponent,
    BasicComponent,
    FirstLayoutComponent,
    BootstrapComponent,
    AdaptiveComponent,
    PseudoclassesComponent,
    AnimationComponent,
    VideoBgComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

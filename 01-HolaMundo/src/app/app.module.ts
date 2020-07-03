import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import {HeaderComponet} from './components/header/header.component';
import {BodyComponent} from './components/body/body.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponet,
    BodyComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

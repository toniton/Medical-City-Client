import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';

var firebaseConfig = {
    apiKey: "AIzaSyCPjBDyOeSdUFLKcR4BOykevMyA-t6b8WI",
    authDomain: "windy-planet-111216.firebaseapp.com",
    databaseURL: "https://windy-planet-111216.firebaseio.com",
    projectId: "windy-planet-111216",
    storageBucket: "windy-planet-111216.appspot.com",
    messagingSenderId: "950758849605",
    appId: "1:950758849605:web:93ed547808a4649020372c"
  };

@NgModule({
  imports:      [ BrowserModule, AngularFireModule.initializeApp(firebaseConfig), FormsModule ],
  declarations: [ AppComponent, HelloComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

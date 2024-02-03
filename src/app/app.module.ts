import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoteshomeComponent } from './noteshome/noteshome.component';
import { NotesAddComponent } from './notes-add/notes-add.component';

@NgModule({
  declarations: [
    AppComponent,
    NoteshomeComponent,
    NotesAddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

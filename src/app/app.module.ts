import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ContactinfoComponent } from './contactinfo/contactinfo.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactinfoComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

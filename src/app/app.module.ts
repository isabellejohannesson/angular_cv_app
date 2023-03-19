import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ProjectsInterfaceComponent } from './projects-interface/projects-interface.component';

@NgModule({
  declarations: [
    AppComponent,
    ProjectsInterfaceComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

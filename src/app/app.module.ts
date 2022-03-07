import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {SideElementComponent} from './components/side/elements/side-element.component';
import {SideComponent} from './components/side/side.component';
import {StaticDataService} from './services/static/static-data.component';
import {BodyComponent} from './components/body/body.component';
import {MainComponent} from './components/body/main/main.component';
import {FooterComponent} from './components/footer/footer.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    SideComponent,
    SideElementComponent,
    BodyComponent,
    MainComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NgbModule
  ],
  providers: [
    StaticDataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

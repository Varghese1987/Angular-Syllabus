import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {NgbModalModule, NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { TopicModelComponent } from './topic-model/topic-model.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule} from '@angular/common/http';
import { AngularEditorModule } from '@kolkov/angular-editor';

@NgModule({
  declarations: [
    AppComponent,
    TopicModelComponent, 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModalModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule, 
    AngularEditorModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [TopicModelComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule,Routes }   from '@angular/router';
import { FormsModule, ReactiveFormsModule}    from '@angular/forms';
import { HttpModule } from '@angular/http';
import {HttpClientModule} from '@angular/common/http';
import { CommonModule } from '@angular/common'; 

import { AppComponent } from './app.component';


let routes : Routes=[
  
]



@NgModule({
  declarations: [
    AppComponent,
     ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

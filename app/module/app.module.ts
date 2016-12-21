import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { AppComponent }   from '../component/app.component';
import {APP_BASE_HREF} from '@angular/common';

@NgModule({
    imports:      [ BrowserModule, FormsModule ],
    declarations: [ AppComponent ],
    bootstrap:    [ AppComponent ],
    providers: [{provide: APP_BASE_HREF, useValue : '/' }]
})
export class AppModule { }
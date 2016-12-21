import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule}   from '@angular/forms';
import {Routes, RouterModule} from '@angular/router';
import {APP_BASE_HREF} from '@angular/common';

import {AppComponent}   from '../component/app.component';
import {AboutComponent}   from '../component/router/about.component';
import {HomeComponent}   from '../component/router/home.component';
import {NotFoundComponent}   from '../component/router/not-found.component';


// Route definition
const appRoutes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'about', component: AboutComponent},
    {path: '**', component: NotFoundComponent}
];

@NgModule({
    imports: [BrowserModule, RouterModule.forRoot(appRoutes), FormsModule],
    declarations: [AppComponent, HomeComponent, AboutComponent, NotFoundComponent],
    bootstrap: [AppComponent],
    providers: [{provide: APP_BASE_HREF, useValue: '/'}]
})
export class AppModule {
}
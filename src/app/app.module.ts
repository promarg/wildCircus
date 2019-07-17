import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { ArtistsComponent } from './artists/artists.component';
import { ApiService } from './api.service'
import { HttpClientModule } from '@angular/common/http';
import { ShowsComponent } from './shows/shows.component';
import { ROUTES } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { BilleterieComponent } from './billeterie/billeterie.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ArtistsComponent,
    ShowsComponent,
    BilleterieComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(ROUTES),
    ReactiveFormsModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }

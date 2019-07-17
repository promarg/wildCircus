import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArtistsComponent } from './artists/artists.component';
import { ShowsComponent } from './shows/shows.component'
import { AboutComponent } from './about/about.component';
import { BilleterieComponent } from './billeterie/billeterie.component';

const ROUTES: Routes = [
  {path: 'artists', component: ArtistsComponent},
  {path: 'shows', component: ShowsComponent},
  {path: 'home', component: AboutComponent},
  {path: 'billeterie', component: BilleterieComponent}

];


export { ROUTES };

@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

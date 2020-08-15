import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutComponent } from "./components/about/about.component";
import { GalleryComponent} from "./components/gallery/gallery.component";
import { HomeComponent} from "./components/home/home.component";
import { NotFoundComponent} from "./components/not-found/not-found.component";


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'notFound', component: NotFoundComponent },
  { path: '**', component: GalleryComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

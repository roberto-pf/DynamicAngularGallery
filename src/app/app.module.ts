import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './components/about/about.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { UrlSerializer } from '@angular/router';
import { LowerCaseUrlSerializer} from './lower-case-url-serializer';
import { NewLinePipe } from './pipes/new-line.pipe';
 
@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    GalleryComponent,
    HomeComponent,
    NotFoundComponent,
    NewLinePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FontAwesomeModule
  ],
  providers: [HttpClientModule,
    {
        provide: UrlSerializer,
        useClass: LowerCaseUrlSerializer
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }

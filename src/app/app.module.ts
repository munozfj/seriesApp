import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { JsonpModule } from '@angular/http';
import { SeriesService } from './providers/series.service';
import { ShowImagePipe } from './pipes/show-image.pipe';
import { ListComponent } from './components/list/list.component';
import { GalleryComponent } from './components/home/gallery.component';
import { LittleInfoComponent } from './components/home/little-info.component';
import { ShowComponent } from './components/show/show.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    SearchComponent,
    ShowImagePipe,
    ListComponent,
    GalleryComponent,
    LittleInfoComponent,
    ShowComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    JsonpModule,
    FormsModule
  ],
  providers: [SeriesService],
  bootstrap: [AppComponent]
})
export class AppModule { }

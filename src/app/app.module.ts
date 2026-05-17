import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { VideoGridComponent } from './components/video-grid/video-grid.component';
import { DrawerComponent } from './components/drawer/drawer.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SidebarComponent,
    NavbarComponent,
    VideoGridComponent,
    DrawerComponent
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

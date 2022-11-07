import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/shared/navigation/navigation.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { HeadersComponent } from './components/shared/headers/headers.component';
import { HomeComponent } from './layout/pages/home/home.component';
import { AboutComponent } from './layout/pages/about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    FooterComponent,
    HeadersComponent,
    HomeComponent,
    AboutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

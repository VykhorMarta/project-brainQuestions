import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';



import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { QuestionService } from './services/question.service';
import { HeaderComponent } from './header/header.component';
import { MainImageComponent } from './header/main-image/main-image.component';
import { FooterComponent } from './footer/footer.component';


import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatDialogModule} from '@angular/material/dialog';
import { AboutUsComponent } from './about-us/about-us.component';
import { LocationComponent } from './location/location.component';
import { PriceComponent } from './price/price.component';



@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    HeaderComponent,
    MainImageComponent,
    FooterComponent,
    AboutUsComponent,
    LocationComponent,
    PriceComponent
  ],
  imports: [
    BrowserModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    BrowserAnimationsModule,
    MatDialogModule
  ],
  providers: [QuestionService],
  bootstrap: [AppComponent]
})
export class AppModule { }

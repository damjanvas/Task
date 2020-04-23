import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {FieldsetModule} from 'primeng/fieldset';
import {CardModule} from 'primeng/card';
import {ToolbarModule} from 'primeng/toolbar';
import {ButtonModule} from 'primeng/button';
import {ProgressSpinnerModule} from 'primeng/progressspinner';
import {BlockUIModule} from 'primeng/blockui';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { MainComponent } from './components/main/main.component';
import { NewsComponent } from './components/news/news.component';
import { ProfileComponent } from './components/profile/profile.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './app.routes';
import { NavComponent } from './components/nav/nav.component';
import { NewsResolver } from './resolvers/news.resolver';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MainComponent,
    NewsComponent,
    ProfileComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    FieldsetModule,
    CardModule,
    ToolbarModule,
    ButtonModule,
    ReactiveFormsModule,
    ProgressSpinnerModule,
    BlockUIModule
  ],
  providers: [
    NewsResolver
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

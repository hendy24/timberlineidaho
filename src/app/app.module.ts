import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { HomePageComponent } from './home-page/home-page.component';
import { NavigationComponent } from './navigation/navigation.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { BlogComponent } from './blog/blog.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { OurCompanyComponent } from './about/our-company/our-company.component';
import { OurTeamComponent } from './about/our-team/our-team.component';
import { CurrentPropertiesComponent } from './current-properties/current-properties.component';
import { UsersComponent } from './users/users.component';
import { UserLoginComponent } from './user-login/user-login.component';


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    NavigationComponent,
    AboutComponent,
    ContactComponent,
    BlogComponent,
    PageNotFoundComponent,
    OurCompanyComponent,
    OurTeamComponent,
    CurrentPropertiesComponent,
    UsersComponent,
    UserLoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

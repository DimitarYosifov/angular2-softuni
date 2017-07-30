import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { GithubExampleComponent } from './githubExample/github.example.component';
import { FollowersComponent } from './followers/followers.component';
import { ReposComponent } from './repos/repos.component';
import { ContributorsComponent } from './contributors/contributors.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GithubExampleComponent,
    FollowersComponent,
    ReposComponent,
    ContributorsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

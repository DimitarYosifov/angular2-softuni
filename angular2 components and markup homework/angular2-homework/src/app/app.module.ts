import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { PostsComponent } from './posts/posts.component';
import { ThreadContainerComponent } from './thread-container/thread-container.component';
import { FontSizeComponent } from './font-size/font-size.component';



@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    ThreadContainerComponent,
    FontSizeComponent
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

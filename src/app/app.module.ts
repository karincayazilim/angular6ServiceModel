import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SolMenuComponent } from './pages/sol-menu/sol-menu.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatGridListModule, MatCardModule, MatMenuModule } from '@angular/material';
import { AnaSayfaComponent } from './pages/ana-sayfa/ana-sayfa.component';
import { TodoComponent } from './pages/todo/todo.component';
import {RouterModule, Routes} from '@angular/router';
import { PostComponent } from './pages/post/post.component';
import {FormsModule} from '@angular/forms';
import {TodoService} from './services/todo/todo.service';
import {PostService} from './services/post/post.service';
import {HttpClientModule} from '@angular/common/http';
import { PostDetailComponent } from './pages/post/post-detail/post-detail.component';

const rootes: Routes = [
  { path: 'todos', component: TodoComponent },
  { path: 'posts', component: PostComponent },
  { path: 'posts/:id', component: PostDetailComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    SolMenuComponent,
    AnaSayfaComponent,
    TodoComponent,
    PostComponent,
    PostDetailComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(rootes)
  ],
  providers: [TodoService, PostService ],
  bootstrap: [AppComponent]
})
export class AppModule { }

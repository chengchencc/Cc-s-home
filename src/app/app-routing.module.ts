import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { BlogComponent } from './pages/blog/blog.component';
import { PostComponent } from './pages/blog/post/post.component';

const routes: Routes = [
  {path:'',redirectTo:'/home',pathMatch: 'full'},
  {path:'home',component:HomeComponent,data: {animation: 'HomePage'} },
  {path:'blog',component:BlogComponent,data: {animation: 'AboutPage'} },
  {path:"post/:id",component:PostComponent,data: {animation: 'FilterPage'}}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }

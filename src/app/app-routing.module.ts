import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutMeComponent } from './about-me/about-me.component'
import { ProjectsComponent } from './projects/projects.component'
import { ContactComponent } from './contact/contact.component'
import { BlogComponent } from './blog/blog.component';

const routes: Routes = [{ path: '', redirectTo: '/about', pathMatch: 'full'},
                        { path: 'about', component: AboutMeComponent },
                        { path: 'contact', component: ContactComponent },
                        { path: 'blog', component: BlogComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CursosComponent } from './components/cursos/cursos.component';
import { DocentesComponent } from './components/docentes/docentes.component';
import { IndexDocentesComponent } from './components/private/docentes/index-docentes/index-docentes.component';
import { EventosComponent } from './components/eventos/eventos.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { NosotrosComponent } from './components/nosotros/nosotros.component';
import { DashboardComponent } from './components/private/dashboard/dashboard.component';
import { IndexComponent as IndexAlumnosComponent} from './components/private/alumnos/index/indexAlumnos.component';
import { WelcomeComponent } from './components/private/welcome/welcome.component';
import { BlogComponent } from './components/blog/blog.component';
import { ContactanosComponent } from './components/contactanos/contactanos.component';
import { WorkshopComponent } from './components/workshop/workshop.component';
import { DegreeComponent } from './components/private/degree/degree.component';
import { CoursesComponent } from './components/private/courses/courses.component';
import { IndexAumnosCrudComponent } from './components/private/alumnos/index-aumnos-crud/index-aumnos-crud.component';
import { CreateAlumnosComponent } from './components/private/alumnos/create-alumnos/create-alumnos.component';
import { CreateDocentesComponent } from './components/private/docentes/create-docentes/create-docentes.component';
import { CreatePostComponent } from './components/private/post/create-post/create-post.component';
import { IndexPostComponent } from './components/private/post/index-post/index-post.component';


const routes: Routes = [
  { path: '', component: InicioComponent, pathMatch: 'full' },
  { path: 'nosotros', component: NosotrosComponent, pathMatch: 'full' },
  { path: 'eventos', component: EventosComponent, pathMatch: 'full' },
  { path: 'talleres', component: WorkshopComponent, pathMatch: 'full' },
  { path: 'docentes', component: DocentesComponent },
  { path: 'blog', component: BlogComponent, pathMatch: 'full' },
  { path: 'contactanos', component: ContactanosComponent, pathMatch: 'full' },
  {
    path: 'admin', component: DashboardComponent,
    children: [
      //{ path: 'dashboard', component: IndexAlumnosComponent },
      { path: 'degrees', component: DegreeComponent },
      { path: 'courses', component: CoursesComponent },
      { path: 'courses/:id', component: CoursesComponent },
      { path: 'alumnos/:id', component: IndexAlumnosComponent },

      { path: 'alumnos', component: IndexAumnosCrudComponent },
      { path: 'alum/create', component: CreateAlumnosComponent },

      { path: 'docentes', component: IndexDocentesComponent },
      { path: 'doc/create', component: CreateDocentesComponent },

      { path: 'post', component: IndexPostComponent },
      { path: 'post/create', component: CreatePostComponent },
      { path: '', component:WelcomeComponent}
    ]
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

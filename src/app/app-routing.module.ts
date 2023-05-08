import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CursosComponent } from './components/cursos/cursos.component';
import { DocentesComponent } from './components/docentes/docentes.component';
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


const routes: Routes = [
  { path: '', component: InicioComponent, pathMatch: 'full' },
  { path: 'nosotros', component: NosotrosComponent, pathMatch: 'full' },
  { path: 'eventos', component: EventosComponent, pathMatch: 'full' },
  { path: 'talleres', component: WorkshopComponent, pathMatch: 'full' },
  { path: 'docentes', component: DocentesComponent, pathMatch: 'full' },
  { path: 'blog', component: BlogComponent, pathMatch: 'full' },
  { path: 'contactanos', component: ContactanosComponent, pathMatch: 'full' },
  {
    path: 'admin', component: DashboardComponent,
    children: [
      { path: 'dashboard', component: IndexAlumnosComponent },
      { path: 'degrees', component: DegreeComponent },
      { path: 'courses', component: CoursesComponent },
      { path: 'courses/:id', component: CoursesComponent },
      { path: 'alumnos/:id', component: IndexAlumnosComponent },
      { path: '', component:WelcomeComponent}
    ]
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

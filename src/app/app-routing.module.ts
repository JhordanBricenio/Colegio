import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CursosComponent } from './components/cursos/cursos.component';
import { DocentesComponent } from './components/docentes/docentes.component';
import { EventosComponent } from './components/eventos/eventos.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { NosotrosComponent } from './components/nosotros/nosotros.component';
import { DashboardComponent } from './components/private/alumnos/dashboard/dashboard.component';
import { IndexComponent } from './components/private/alumnos/index/index.component';
import { WelcomeComponent } from './components/private/alumnos/welcome/welcome.component';
import { BlogComponent } from './components/blog/blog.component';

const routes: Routes = [
  { path: '', component: InicioComponent, pathMatch: 'full' },
  { path: 'nosotros', component: NosotrosComponent, pathMatch: 'full' },
  { path: 'eventos', component: EventosComponent, pathMatch: 'full' },
  { path: 'cursos', component: CursosComponent, pathMatch: 'full' },
  { path: 'docentes', component: DocentesComponent, pathMatch: 'full' },
  { path: 'blog', component: BlogComponent, pathMatch: 'full' },
  {
    path: 'alumnos', component: DashboardComponent,
    children: [
      { path: 'indexAlumnos', component: IndexComponent },
      { path: '', component:WelcomeComponent}
    ]
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

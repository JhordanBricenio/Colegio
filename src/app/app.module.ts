import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { NosotrosComponent } from './components/nosotros/nosotros.component';
import { EventosComponent } from './components/eventos/eventos.component';
import { CursosComponent } from './components/cursos/cursos.component';
import { DocentesComponent } from './components/docentes/docentes.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardComponent } from './components/private/dashboard/dashboard.component';
import { IndexComponent as IndexAlumnosComponent } from './components/private/alumnos/index/indexAlumnos.component';
import { AsideComponent } from './components/private/aside/aside.component';
import { BlogComponent } from './components/blog/blog.component';
import { HttpClientModule } from '@angular/common/http';
import { DatePipe } from '@angular/common';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';



import {MatToolbarModule} from '@angular/material/toolbar';
import {MatChipsModule} from '@angular/material/chips';
import {MatRippleModule} from '@angular/material/core';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatTreeModule} from '@angular/material/tree';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDividerModule} from '@angular/material/divider';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatIconModule} from '@angular/material/icon';
import { MatListModule} from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import {MatTableModule} from '@angular/material/table';
import {MatSelectModule} from '@angular/material/select';
import { WelcomeComponent } from './components/private/welcome/welcome.component';
import { ContactanosComponent } from './components/contactanos/contactanos.component';
import { WorkshopComponent } from './components/workshop/workshop.component';
import { DegreeComponent } from './components/private/degree/degree.component';
import { CoursesComponent } from './components/private/courses/courses.component';
import { IndexAumnosCrudComponent } from './components/private/alumnos/index-aumnos-crud/index-aumnos-crud.component';
import { CreateAlumnosComponent } from './components/private/alumnos/create-alumnos/create-alumnos.component';
import { IndexDocentesComponent } from './components/private/docentes/index-docentes/index-docentes.component';
import { CreateDocentesComponent } from './components/private/docentes/create-docentes/create-docentes.component';
import { IndexPostComponent } from './components/private/post/index-post/index-post.component';
import { CreatePostComponent } from './components/private/post/create-post/create-post.component';
import { IndexTagComponent } from './components/private/post/tag/index-tag/index-tag.component';
import { CreateTagComponent } from './components/private/post/tag/create-tag/create-tag.component';
import { CreateEventComponent } from './components/private/events/create-event/create-event.component';
import { IndexEventsComponent } from './components/private/events/index-events/index-events.component';
import { IndexCrudCoursesComponent } from './components/private/courses/index-crud-courses/index-crud-courses.component';
import { CreateCrudComponent } from './components/private/courses/create-crud/create-crud.component';
import { IndexMatriculaComponent } from './components/private/matricula/index-matricula/index-matricula.component';
import { CreateMatriculaComponent } from './components/private/matricula/create-matricula/create-matricula.component';
import { PaginatorPostComponent } from './components/private/post/paginator-post/paginator-post.component';
import { DetallePostComponent } from './components/private/post/detalle-post/detalle-post.component';
import { DetalleEventComponent } from './components/private/events/detalle-event/detalle-event.component';
import { DetalleDocentesComponent } from './components/private/docentes/detalle-docentes/detalle-docentes.component';
import { DetailMatriculaComponent } from './components/private/matricula/detail-matricula/detail-matricula.component';



@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    FooterComponent,
    HeaderComponent,
    NosotrosComponent,
    EventosComponent,
    CursosComponent,
    DocentesComponent,
    DashboardComponent,
    IndexAlumnosComponent,
    AsideComponent,
    WelcomeComponent,
    BlogComponent,
    ContactanosComponent,
    WorkshopComponent,
    DegreeComponent,
    CoursesComponent,
    IndexAumnosCrudComponent,
    CreateAlumnosComponent,
    IndexDocentesComponent,
    CreateDocentesComponent,
    IndexPostComponent,
    CreatePostComponent,
    IndexTagComponent,
    CreateTagComponent,
  CreateEventComponent,
  IndexEventsComponent,
  IndexCrudCoursesComponent,
  CreateCrudComponent,
  IndexMatriculaComponent,
  CreateMatriculaComponent,
  PaginatorPostComponent,
  DetallePostComponent,
  DetalleEventComponent,
  DetalleDocentesComponent,
  DetailMatriculaComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatProgressBarModule,
    MatDividerModule,
    MatFormFieldModule,
    MatInputModule,
    MatGridListModule,
    MatTreeModule,
    MatPaginatorModule,
    MatAutocompleteModule,
    MatSlideToggleModule,
    MatListModule,
    MatButtonModule,
    MatSnackBarModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    MatChipsModule,
    MatRippleModule,
    MatTableModule,
    CKEditorModule

  ],
  providers: [
    DatePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

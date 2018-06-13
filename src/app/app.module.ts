import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { NgxElectronModule } from 'ngx-electron';
import { AppComponent } from './app.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { CadastroComponent } from './cadastro/cadastro.component';
import { HomeComponent } from './home/home.component';

import { RouterModule, Routes } from '@angular/router';
import { ClassificacaoComponent } from './classificacao/classificacao.component';
import { CadastroService } from './cadastro/cadastro.service';
import { SintomaComponent } from './sintoma/sintoma.component';
import { SintomaService } from './sintoma/sintoma.service';
import { PacienteComponent } from './paciente/paciente.component';

const appRoutes: Routes = [
  { path: 'cadastro', component: CadastroComponent },
  { path: 'home', component: HomeComponent },
  { path: 'classificacao', component: ClassificacaoComponent },
  { path: 'sintomas/:sintoma', component: SintomaComponent },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    CadastroComponent,
    HomeComponent,
    ClassificacaoComponent,
    SintomaComponent,
    PacienteComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      // { enableTracing: true } // <-- debugging purposes only

    ),
    FormsModule,
    BrowserModule,
    NgxElectronModule,
    MatIconModule,
    MatButtonModule,
    HttpClientModule
  ],
  providers: [CadastroService,SintomaService],
  bootstrap: [AppComponent]
})
export class AppModule { }

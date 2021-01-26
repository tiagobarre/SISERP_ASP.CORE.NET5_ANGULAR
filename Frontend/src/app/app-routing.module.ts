import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './Templates/home/home.component';
import { LoginComponent } from './Templates/login/login.component';
import { AdminGuard } from './Services/guard/admin.guard';
import { UsuariosComponent } from './Templates/usuarios/usuarios.component';
import { CadastrarusuariosComponent } from './Templates/cadastrarusuarios/cadastrarusuarios.component';

const routes: Routes = [

  { path: '', component: HomeComponent, canActivate: [AdminGuard]},
  { path: 'login', component: LoginComponent},
  { path: 'home', component: HomeComponent, canActivate: [AdminGuard] },
  { path: 'usuarios', component: UsuariosComponent, canActivate: [AdminGuard] },
  { path: 'cadastrarusuarios', component: CadastrarusuariosComponent, canActivate: [AdminGuard] }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
 

 }

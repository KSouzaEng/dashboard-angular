import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DashboardComponent} from '../dashboard/dashboard.component'
import { InicioComponent } from './inicio/inicio.component';
import { ReportsComponent } from './reports/reports.component';
import { UsuariosComponent } from './usuarios/usuarios.component';


const routes: Routes = [
  {path: '',component:DashboardComponent,children: [
    {path:'',component:InicioComponent},
    {path:'users', component:UsuariosComponent},
    {path:'reports', component:ReportsComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }

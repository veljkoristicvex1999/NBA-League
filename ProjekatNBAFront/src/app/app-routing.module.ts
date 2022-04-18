import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActionsComponent } from './actions/actions.component';
import { AddVestiComponent } from './add-vesti/add-vesti.component';
import { DeleteVestiComponent } from './delete-vesti/delete-vesti.component';
import { AuthGuard } from './guard/auth-guard.service';
import { HomeComponent } from './home/home.component';
import { PlayersComponent } from './players/players.component';
import { ResultsComponent } from './results/results.component';
import { TeamListComponent } from './team-list/team-list.component';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';

const routes: Routes =[{path:'', redirectTo:'/list', pathMatch:'full'},
{path:'login', component: LoginComponent,canActivate: [AuthGuard] },
{path:'register', component: RegisterComponent,canActivate: [AuthGuard]},
{path:'list', component:TeamListComponent},
{path: 'igraci', component:PlayersComponent},
{path: 'tabela', component:TeamListComponent},
{path: 'home ', component:HomeComponent},
{path: 'rezultati', component:ResultsComponent},
{path: 'akcije', component:ActionsComponent},
{path: 'dodajVest', component:AddVestiComponent},
{path: 'izbrisiVest', component:DeleteVestiComponent},

{path:'**', component: HomeComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';
import { TeamListComponent } from './team-list/team-list.component';
import { PlayersComponent } from './players/players.component';
import { ResultsComponent } from './results/results.component';
import { ActionsComponent } from './actions/actions.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AddVestiComponent } from './add-vesti/add-vesti.component';
import { DeleteVestiComponent } from './delete-vesti/delete-vesti.component';
import { OneTeamComponent } from './one-team/one-team.component';
import { TokenInterceptor } from './services/token-interceptor.service';
import { AuthGuard } from './guard/auth-guard.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    TeamListComponent,
    PlayersComponent,
    ResultsComponent,
    ActionsComponent,
    HomeComponent,
    AddVestiComponent,
    DeleteVestiComponent,
    OneTeamComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppRoutingModule,
    HttpClientModule,    FormsModule

  ],
  providers: [AuthGuard, {provide:HTTP_INTERCEPTORS, useClass:TokenInterceptor, multi:true} ],
  bootstrap: [AppComponent]
})
export class AppModule { }

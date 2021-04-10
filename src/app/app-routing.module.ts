import { NgModule } from '@angular/core';
import { AngularFireAuthGuard, redirectLoggedInTo, redirectUnauthorizedTo } from '@angular/fire/auth-guard';
import { Routes, RouterModule } from '@angular/router';
import { CreateComponent } from './pages/create/create.component';
import { CurriculumComponent } from './pages/curriculum/curriculum.component';
import { DetailsComponent } from './pages/details/details.component';
import { ListPublicComponent } from './pages/list-public/list-public.component';
import { ListComponent } from './pages/list/list.component';
import { LoginComponent } from './pages/login/login.component';
import { LogoutComponent } from './pages/logout/logout.component';
import { UpdateComponent } from './pages/update/update.component';

const redirectLoggedInToList = () => redirectLoggedInTo(['list'])
const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['login'])

const routes: Routes = [
  {path: '', redirectTo:'public', pathMatch:'full'},
  {path:'list', component: ListComponent, canActivate: [AngularFireAuthGuard], data: { authGuardPipe: redirectUnauthorizedToLogin }},
  {path:'public', component: ListPublicComponent},
  {path:'details', children: [
    {path: ':id', component: DetailsComponent}
  ]},
  {path:'update', children: [
    {path: ':id', component: UpdateComponent}
  ]},
  {path:'create', component: CreateComponent},
  {path:'curriculum', component: CurriculumComponent},
  {path:'login', component: LoginComponent, canActivate: [AngularFireAuthGuard], data: { authGuardPipe: redirectLoggedInToList }},
  {path:'logout', component: LogoutComponent, canActivate: [AngularFireAuthGuard], data: { authGuardPipe: redirectUnauthorizedToLogin }},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateComponent } from './pages/create/create.component';
import { DetailsComponent } from './pages/details/details.component';
import { ListComponent } from './pages/list/list.component';
import { UpdateComponent } from './pages/update/update.component';

const routes: Routes = [
  {path: '', redirectTo:'list', pathMatch:'full'},
  {path:'list', component: ListComponent},
  {path:'details', children: [
    {path: ':id', component: DetailsComponent}
  ]},
  {path:'update', children: [
    {path: ':id', component: UpdateComponent}
  ]},
  {path:'create', component: CreateComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

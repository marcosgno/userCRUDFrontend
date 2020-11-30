import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormComponent } from './modules/user/form/form.component';
import { ListComponent } from './modules/user/list/list.component';


const routes: Routes = [
  {
    component: ListComponent,
    path: ''
  },
  {
    component: FormComponent,
    path: 'user/:id'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

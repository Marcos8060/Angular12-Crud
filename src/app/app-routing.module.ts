import { ViewUserComponent } from './users/view-user/view-user.component';
import { AddUserComponent } from './users/add-user/add-user.component';
import { NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListUsersComponent } from './users/list-users/list-users.component';
import { EditUserComponent } from './users/edit-user/edit-user.component';
import { DeleteUserComponent } from './users/delete-user/delete-user.component';

const routes: Routes = [
  {path: 'create', component: AddUserComponent},
  {path: 'view/:id', component: ViewUserComponent},
  {path: 'list', component: ListUsersComponent},
  {path: 'edit/:id', component: EditUserComponent},
  {path: 'add',component: AddUserComponent},
  {path: 'delete/:id', component: DeleteUserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

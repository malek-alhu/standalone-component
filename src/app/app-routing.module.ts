import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { userReducer } from './store/user.reducer';
import { UserComponent } from './user/user.component';

export const routes: Routes = [
  {
    path: 'user',
    component: UserComponent,
    loadChildren: () => import('./user/user.routs'),
  },
];

// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule],
// })
export class AppRoutingModule {}

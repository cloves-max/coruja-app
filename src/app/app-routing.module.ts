import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { MainComponent } from './core/layouts/main/main.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: AuthComponent },
  {
    path: 'app',
    children: [
      { path: '',component:MainComponent, pathMatch: 'full' },
      { path: 'home', loadChildren: () => import('./features/home/home.module').then((m) => m.HomeModule) },
    ],
    // canActivate:
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

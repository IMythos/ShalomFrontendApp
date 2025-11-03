import { Routes } from '@angular/router';
import { ClientPage } from './pages/client/client-page/client-page';
import { roleGuard } from './core/guards/role-guard';
import { AdminPage } from './pages/dashboard/admin-page/admin-page';
import { EmployeePage } from './pages/dashboard/employee-page/employee-page';
import { LoginClientPage } from './pages/client/login-client-page/login-client-page';
import { UnauthorizedPage } from './pages/unauthorized-page/unauthorized-page';
import { RegisterClientPage } from './pages/client/register-client-page/register-client-page';

export const routes: Routes = [
  {
    path: 'client/login',
    component: LoginClientPage
  },
  {
    path: 'client/register',
    component: RegisterClientPage
  },
  {
    path: 'unauthorized',
    component: UnauthorizedPage
  },
  {
    path: 'dashboard/admin',
    canActivate: [roleGuard],
    component: AdminPage,
    data: {
      roles: ['ADMIN']
    }
  },
  {
    path: 'dashboard/employee',
    canActivate: [roleGuard],
    component: EmployeePage,
    data: {
      roles: ['EMPLOYEE']
    }
  },
  {
    path: 'client',
    component: ClientPage,
  },
  {
    path: '',
    redirectTo: 'client',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: ''
  }
];

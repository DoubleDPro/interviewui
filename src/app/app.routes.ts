import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'auth', loadChildren: () => import('./features/auth/auth.module').then(m => m.AuthModule) },
  { path: 'tasks', loadChildren: () => import('./features/tasks/tasks.module').then(m => m.TasksModule) },
  { path: 'scenarios', loadChildren: () => import('./features/scenarios/scenarios.module').then(m => m.ScenariosModule) },
  { path: 'interview', loadChildren: () => import('./features/interview/interview.module').then(m => m.InterviewModule) },
  { path: 'reports', loadChildren: () => import('./features/reports/reports.module').then(m => m.ReportsModule) },
  { path: 'admin', loadChildren: () => import('./features/admin/admin.module').then(m => m.AdminModule) }
];

import { Routes } from '@angular/router';
import { BasicContainer } from './containers/basic/basic.container';

export const routes: Routes = [
  // default redirect
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  // lazy loaded feature pages (explicit .ts extension to satisfy module resolution)
  {
    path: 'home',
    component: BasicContainer,
    loadChildren: () => import('./pages/home/home.routes').then((r) => r.homeRoutes),
  },
  {
    path: 'courses',
    component: BasicContainer,
    loadChildren: () => import('./pages/courses/courses.routes').then((r) => r.coursesRoutes),
  },
  {
    path: 'contact',
    component: BasicContainer,
    loadChildren: () => import('./pages/contact/contact.routes').then((r) => r.contactRoutes),
  },
];

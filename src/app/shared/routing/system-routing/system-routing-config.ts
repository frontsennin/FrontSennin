import { Routes } from '@angular/router';

const systemRoutes: Routes = [
    {
      path: '',
      redirectTo: 'init',
      pathMatch: 'full'
    },
    {
      path: 'init',
      loadChildren: () => import('../../../pages/init-page/init-page.module').then(m => m.InitPageModule),
    }
];

export {
    systemRoutes
}
import { Routes } from '@angular/router';

export const routes: Routes = [	
	{
		path: 'orders',
		loadComponent: () => import('./components/orders/orders').then(m => m.Orders),
	}
];

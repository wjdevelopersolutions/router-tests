import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { GraficaComponent } from './grafica/grafica.component';
import { ProgressComponent } from './progress/progress.component';
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuard } from '../auth-guard.service';
import { AccountSettingsComponent } from './account-settings/account-settings.component';


const routes: Routes = [
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    { 
        path: 'dashboard', 
        component: PagesComponent,
        children: [
            { path: '', component: DashboardComponent },
            { path: 'grafica', component: GraficaComponent },
            { path: 'progress', component: ProgressComponent },
            {
                path: 'account-settings',
                component: AccountSettingsComponent,
                
            }
        ]
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PagesRoutingModule {} 

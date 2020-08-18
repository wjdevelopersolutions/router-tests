import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { AccountSettingsComponent } from './account-settings/account-settings.component';

@NgModule({
    declarations: [AccountSettingsComponent],
    imports: [ 
        CommonModule,
        PagesRoutingModule
    ],
    exports: [],
    providers: [],
})
export class PagesModule {}
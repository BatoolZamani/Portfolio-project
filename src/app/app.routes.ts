import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AboutMeComponentComponent } from './components/about-me-component/about-me-component.component';
import { PrivacyPolicyComponent } from './components/privacy-policy/privacy-policy.component';
import { MainComponent } from './components/main/main.component';
import { ImprintComponent } from './components/imprint/imprint.component';

export const routes: Routes = [
    {path:'',component:MainComponent},
    {
        path:'privacy-policy',
        component:PrivacyPolicyComponent
    },
    {
        path:'imprint',
        component:ImprintComponent
    }
];

import { Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { NewsComponent } from './components/news/news.component';
import { ProfileComponent } from './components/profile/profile.component';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './guards/auth.guard';
import { NewsResolver } from './resolvers/news.resolver';

export const appRoutes: Routes = [
    { path: 'login', component: LoginComponent},
    { path: '', component: MainComponent, canActivate: [AuthGuard] },
    { path: 'news', component: NewsComponent, canActivate: [AuthGuard], resolve: { news: NewsResolver }},
    { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard]},
    { path: '**', redirectTo: '', pathMatch: 'full'},
];
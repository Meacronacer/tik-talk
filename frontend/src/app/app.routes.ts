import { SignupPageComponent } from './pages/signup-page/signup-page.component';
import { ProfilePageComponent } from './pages/profile-page/profile-page.component';
import { SearchPageComponent } from './pages/search-page/search-page.component';
import { Routes } from '@angular/router';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { ChatPageComponent } from './pages/chat-page/chat-page.component';
import { LayoutComponent } from './shared/components/shared/layout/layout.component';

export const routes: Routes = [
  { path: '', component: LayoutComponent, children: [
    { path: '', component: ProfilePageComponent},
    { path: 'chat', component: ChatPageComponent },
    { path: 'search', component: SearchPageComponent },
  ]},
  { path: 'login', component: LoginPageComponent },
  { path: 'signup', component: SignupPageComponent },
];

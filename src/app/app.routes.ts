import { Routes } from '@angular/router';
import { SignUpComponent } from './sign-up/sign-up.component';
import { UserProfileComponent } from './user-profile/user-profile.component';

const routes: Routes = [
  {path: 'signup', component: SignUpComponent},
  {path: 'user', component: UserProfileComponent},
  {path: '', component: UserProfileComponent}
];

export { routes };
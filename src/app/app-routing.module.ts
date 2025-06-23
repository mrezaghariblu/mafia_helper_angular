import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
// import { HomePageComponent } from './pages/home-page/home-page.component';
// import { RolesPageComponent } from './pages/roles-page/roles-page.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  //   { path: 'roles', component: RolesPageComponent },
  // مسیرهای دیگر مثل players، voting، results و ...
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

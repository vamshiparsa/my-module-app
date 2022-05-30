import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HomeComponent } from './home/home.component';
import { ProductsRoutingModule } from './products/products-routing.module';
import { ProductsModule } from './products/products.module';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'home',redirectTo:'', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path:'contact',component: ContactUsComponent},
  // {path:'products',component: ProductsModule}
  {path:'products',component:ProductsRoutingModule}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

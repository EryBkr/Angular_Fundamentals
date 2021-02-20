import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RoleComponent } from './role/role.component';


//hangi url in hangi componente gideceğiniz belirliyoruz
const routes: Routes = [
  {
    path: "home",
    loadChildren: () => import("./home/home.module").then(m => m.HomeModule)
    //Home modulü routing modüle tanımladık.Home ile ilgili yönlendirmelerden
    //HomeModule sorumlu olacaktır
  },
  {
    path: "role",
    component: RoleComponent
  },
  {
    path: "user",
    loadChildren: () => import("./user/user.module").then(m => m.UserModule)
  },
  //Lazy Loading ile bu componentlerin modül bilgisini tanımladık
  {
    path: "mydataurl",
    loadChildren: () => import("./data-binding/data-binding.module").then(m => m.DataBindingModule)
  },
  {
    path: "storage", //domain.com/storage e gidilirse bu yapının modulünü tanımladık
    loadChildren: () => import("./storage/storage.module").then(m => m.StorageModule)
  },
  {
    path: "directives", //domain.com/directives e gidilirse bu yapının modulünü tanımladık (Lazy Loading)
    loadChildren: () => import("./directives/directives.module").then(m => m.DirectivesModule)
  },
  {
    path: "pipes", //domain.com/pipes e gidilirse bu yapının modulünü tanımladık (Lazy Loading)
    loadChildren: () => import("./pipes/pipes.module").then(m => m.PipesModule)
  },
  {
    path: "parents", //domain.com/parents e gidilirse bu yapının modulünü tanımladık (Lazy Loading)
    loadChildren: () => import("./parents/parents.module").then(m => m.ParentsModule)
  },
  {
    path: "**", //Tanımlanmamış bir url e gidilirse home ' a yönlendirdik.En altta olması gerekiyor
    component: HomeComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

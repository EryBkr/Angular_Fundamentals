import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from 'src/lib/guards/auth.guard';
import { DeactiveGuardGuard } from 'src/lib/guards/deactive-guard.guard';
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
    loadChildren: () => import("./storage/storage.module").then(m => m.StorageModule),
    canActivate:[AuthGuard] //lib in altına eklemiş olduğum guard ı burada belirttim. canActive o modüle girdiğimiz gibi çalışacak olan yapıyı belirler
  },
  {
    path: "directives", //domain.com/directives e gidilirse bu yapının modulünü tanımladık (Lazy Loading)
    loadChildren: () => import("./directives/directives.module").then(m => m.DirectivesModule),
    // canDeactivate:[DeactiveGuardGuard] Route dan çıktığımız zaman tetiklenecek bir yapıdır
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
    path: "forms", //domain.com/forms a gidilirse bu yapının modulünü tanımladık (Lazy Loading)
    loadChildren: () => import("./forms/forms.module").then(m => m.AngularFormsModule)
  },
  {
    path: "**", //Tanımlanmamış bir url e gidilirse home ' a yönlendirdik.En altta olması gerekiyor
    component: HomeComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  //useHash:true ile adres çubuğundan yapılan değişikliklerde bile sayfa post-back olmaz,
  //Angular ın kendi routing stratejisi aktif olmuş olur
  exports: [RouterModule]
})
export class AppRoutingModule { }

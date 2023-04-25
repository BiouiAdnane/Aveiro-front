import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AdminDashboardComponent} from "./admin-dashboard/admin-dashboard.component";
import {UtilisateurComponent} from "./utilisateur/utilisateur.component";
import {FamilleComponent} from "./famille/famille.component";
import {NewUtilisateurComponent} from "./new-utilisateur/new-utilisateur.component";
import {DepotComponent} from "./depot/depot.component";
import {UpdateUtilisateurComponent} from "./update-utilisateur/update-utilisateur.component";
import {LoginComponent} from "./login/login.component";
import {UpdateDepotComponent} from "./update-depot/update-depot.component";
import {NewDepotComponent} from "./new-depot/new-depot.component";
import {MarqueComponent} from "./familles/marque/marque.component";
import {NatureComponent} from "./familles/nature/nature.component";
import {IngredientComponent} from "./familles/ingredient/ingredient.component";
import {QualiteComponent} from "./familles/qualite/qualite.component";
import {UpdateMarqueComponent} from "./familles/update-marque/update-marque.component";
import {UpdateNatureComponent} from "./familles/update-nature/update-nature.component";
import {UpdateIngredientComponent} from "./familles/update-ingredient/update-ingredient.component";
import {UpdateQualiteComponent} from "./familles/update-qualite/update-qualite.component";
import {ArticleComponent} from "./article/article.component";
import {NewArticleComponent} from "./new-article/new-article.component";
import {UpdateArticleComponent} from "./update-article/update-article.component";

const routes: Routes = [
  {path:"", component: LoginComponent },
  {path:"login", component: LoginComponent },
  {path:"dashboard", component: AdminDashboardComponent},

  {path:"users", component: UtilisateurComponent},
  {path:"new-user", component: NewUtilisateurComponent},
  {path:"updateUser/:matriculation", component: UpdateUtilisateurComponent},

  {path:"depot", component: DepotComponent},
  {path:"new-depot", component: NewDepotComponent},
  {path:"updateDepot/:code_Depot", component: UpdateDepotComponent},

  {path:"article", component: ArticleComponent},
  {path:"new-article", component: NewArticleComponent},
  {path:"updateArticle/:code_Article", component: UpdateArticleComponent},

  {path:"marque", component: MarqueComponent},
  {path:"update-marque/:id_Famille", component: UpdateMarqueComponent},

  {path:"nature", component: NatureComponent},
  {path:"update-nature/:id_Famille", component: UpdateNatureComponent},

  {path:"ingredient", component: IngredientComponent},
  {path:"update-ingredient/:id_Famille", component: UpdateIngredientComponent},

  {path:"qualite", component: QualiteComponent},
  {path:"update-qualite/:id_Famille", component: UpdateQualiteComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

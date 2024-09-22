import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { InscriptionConvoyeurComponent } from './inscription-convoyeur/inscription-convoyeur.component';
import { InscriptionEntrepriseComponent } from './inscription-entreprise/inscription-entreprise.component';
import { AssuranceConvoyageComponent } from './assurance-convoyage/assurance-convoyage.component';
import { AProposComponent } from './a-propos/a-propos.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { InscriptConvoyComponent } from './connexion/inscript-convoy/inscript-convoy.component';
import { CondInscriptionComponent } from './connexion/inscript-convoy/cond-inscription/cond-inscription.component';
import { InformationsChauffeurComponent } from './connexion/inscript-convoy/form-fieldsets/informations-chauffeur/informations-chauffeur.component';
import { AdressePostaleComponent } from './connexion/inscript-convoy/form-fieldsets/adresse-postale/adresse-postale.component';

const routes: Routes = [
  {path:"home",component: HomeComponent},
  {path:'', redirectTo: '/home', pathMatch:'full'},
  {path:'inscription-convoyeur', component:InscriptionConvoyeurComponent},
  {path:'inscription-entreprise', component:InscriptionEntrepriseComponent},
  {path:'assurance-convoyage',component:AssuranceConvoyageComponent},
  {path:'a-propos', component:AProposComponent},
  {path:'connexion', component:ConnexionComponent},
  {path: 'inscript-convoy',component:InscriptConvoyComponent, children:[
    {path: 'informations-chauffeur',component:InformationsChauffeurComponent},
    {path: '', redirectTo: '/inscript-convoy/informations-chauffeur',pathMatch:'full'},
    {path: 'adresse-postale',component:AdressePostaleComponent},
  ]
  },
  {path: 'inscript-convoy/cond-inscription', component:CondInscriptionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

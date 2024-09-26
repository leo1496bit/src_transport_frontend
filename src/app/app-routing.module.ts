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
import { InformationComponent } from './connexion/inscript-convoy/form-fieldsets/information/information.component';
import { CirculationComponent } from './connexion/inscript-convoy/form-fieldsets/circulation/circulation.component';
import { InformationPermisComponent } from './connexion/inscript-convoy/form-fieldsets/information-permis/information-permis.component';
import { DocumentIdentiteComponent } from './connexion/inscript-convoy/form-fieldsets/document-identite/document-identite.component';
import { DocumentProfessionnelComponent } from './connexion/inscript-convoy/form-fieldsets/document-professionnel/document-professionnel.component';
import { InformationBancaireComponent } from './connexion/inscript-convoy/form-fieldsets/information-bancaire/information-bancaire.component';
import { InscriptClientComponent } from './connexion/inscript-client/inscript-client.component';
import { InformationsChauffeurClientComponent } from './connexion/inscript-client/form-fieldsets/informations-chauffeur-client/informations-chauffeur-client.component';
import { AdresseSiegeSocialComponent } from './connexion/inscript-client/form-fieldsets/adresse-siege-social/adresse-siege-social.component';

const routes: Routes = [
  {path:"home",component: HomeComponent},
  {path:'', redirectTo: '/home', pathMatch:'full'},
  {path:'inscription-convoyeur', component:InscriptionConvoyeurComponent},
  {path:'inscription-entreprise', component:InscriptionEntrepriseComponent},
  {path:'assurance-convoyage',component:AssuranceConvoyageComponent},
  {path:'a-propos', component:AProposComponent},
  {path:'connexion', component:ConnexionComponent},
  {path: 'inscript-convoy',component:InscriptConvoyComponent , children:[
    {path: 'informations-chauffeur',component:InformationsChauffeurComponent},
    {path: '', redirectTo: '/inscript-convoy/informations-chauffeur',pathMatch:'full'},
    {path: 'adresse-postale',component:AdressePostaleComponent},
    {path: 'information',component:InformationComponent},
    {path: 'circulation', component:CirculationComponent},
    {path: 'information-permis', component:InformationPermisComponent},
    {path: 'document-identite', component:DocumentIdentiteComponent},
    {path: 'document-professionnel', component:DocumentProfessionnelComponent},
    {path: 'information-bancaire', component:InformationBancaireComponent},
  ]
  },
  {path: 'inscript-client',component:InscriptClientComponent, children: [
    {path: 'informations-chauffeur',component:InformationsChauffeurClientComponent},
    {path: '', redirectTo: '/inscript-client/informations-chauffeur',pathMatch:'full'},
    {path: 'adresse-siege-social', component:AdresseSiegeSocialComponent}
  ]},
  {path: 'inscript-convoy/cond-inscription', component:CondInscriptionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

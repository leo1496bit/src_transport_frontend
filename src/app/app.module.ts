import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AssuranceConvoyageComponent } from './assurance-convoyage/assurance-convoyage.component';
import { AProposComponent } from './a-propos/a-propos.component';
import { InscriptionEntrepriseComponent } from './inscription-entreprise/inscription-entreprise.component';
import { InscriptionConvoyeurComponent } from './inscription-convoyeur/inscription-convoyeur.component';
import { BannerComponent } from './home/banner/banner.component';
import { LogoAnimComponent } from './home/logo-anim/logo-anim.component';
import { ServiceListComponent } from './home/service-list/service-list.component';
import { ServiceTypeComponent } from './home/service-type/service-type.component';
import { StepDeliveryComponent } from './home/step-delivery/step-delivery.component';
import { ContactComponent } from './commons/contact/contact.component';
import { StatsComponent } from './home/stats/stats.component';
import { ChatbotComponent } from './commons/chatbot/chatbot.component';
import { ChatMessageComponent } from './commons/chat-message/chat-message.component';
import { OpinionComponent } from './commons/opinion/opinion.component';
import { OpinionItemComponent } from './commons/opinion/opinion-item/opinion-item.component';
import { BannerAssurComponent } from './assurance-convoyage/banner-assur/banner-assur.component';
import { BannerProposComponent } from './a-propos/banner-propos/banner-propos.component';
import { TeamInfComponent } from './a-propos/team-inf/team-inf.component';
import { LocaMessageComponent } from './a-propos/loca-message/loca-message.component';
import { BannerEntComponent } from './inscription-entreprise/banner-ent/banner-ent.component';
import { FlashInfComponent } from './inscription-entreprise/flash-inf/flash-inf.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { InscriptConvoyComponent } from './connexion/inscript-convoy/inscript-convoy.component';
import { CondInscriptionComponent } from './connexion/inscript-convoy/cond-inscription/cond-inscription.component';
import { FormProgressComponent } from './connexion/inscript-convoy/form-progress/form-progress.component';
import { FormFieldCarComponent } from './connexion/inscript-convoy/form-field-car/form-field-car.component';
import { InformationsChauffeurComponent } from './connexion/inscript-convoy/form-fieldsets/informations-chauffeur/informations-chauffeur.component';
import { FormTransportComponent } from './connexion/inscript-convoy/form-transport/form-transport.component';
import { AdressePostaleComponent } from './connexion/inscript-convoy/form-fieldsets/adresse-postale/adresse-postale.component';
import { InformationComponent } from './connexion/inscript-convoy/form-fieldsets/information/information.component';
import { CirculationComponent } from './connexion/inscript-convoy/form-fieldsets/circulation/circulation.component';
import { InformationPermisComponent } from './connexion/inscript-convoy/form-fieldsets/information-permis/information-permis.component';
import { DocumentIdentiteComponent } from './connexion/inscript-convoy/form-fieldsets/document-identite/document-identite.component';
import { DocumentProfessionnelComponent } from './connexion/inscript-convoy/form-fieldsets/document-professionnel/document-professionnel.component';
import { InformationBancaireComponent } from './connexion/inscript-convoy/form-fieldsets/information-bancaire/information-bancaire.component';
import { InscriptClientComponent } from './connexion/inscript-client/inscript-client.component';
import { FormFieldCarClientComponent } from './connexion/inscript-client/form-field-car-client/form-field-car-client.component';
import { FormProgressClientComponent } from './connexion/inscript-client/form-progress-client/form-progress-client.component';
import { InformationsChauffeurClientComponent } from './connexion/inscript-client/form-fieldsets/informations-chauffeur-client/informations-chauffeur-client.component';
import { AdresseSiegeSocialComponent } from './connexion/inscript-client/form-fieldsets/adresse-siege-social/adresse-siege-social.component';
import { AskCommandFormComponent } from './ask-command-form/ask-command-form.component';
import { FormFieldCarAskComponent } from './ask-command-form/form-field-car-ask/form-field-car-ask.component';
import { FormProgressAskComponent } from './ask-command-form/form-progress-ask/form-progress-ask.component';
import { AdresseDepartComponent } from './ask-command-form/form-fieldsets/adresse-depart/adresse-depart.component';
import { AdresseLivraisonComponent } from './ask-command-form/form-fieldsets/adresse-livraison/adresse-livraison.component';
import { InformationsVehiculeComponent } from './ask-command-form/form-fieldsets/informations-vehicule/informations-vehicule.component';
import { PlageHoraireVehiculeComponent } from './ask-command-form/form-fieldsets/plage-horaire-vehicule/plage-horaire-vehicule.component';
import { InformationsClientComponent } from './ask-command-form/form-fieldsets/informations-client/informations-client.component';
import { PrestatiionsSupplementairesComponent } from './ask-command-form/form-fieldsets/prestatiions-supplementaires/prestatiions-supplementaires.component';
import { PaiementComponent } from './ask-command-form/form-fieldsets/paiement/paiement.component';
import { DiagTypeCarComponent } from './home/banner/diag-type-car/diag-type-car.component';
import { TarificationConvoyageComponent } from './tarification-convoyage/tarification-convoyage.component';
import { BannerTarificationComponent } from './tarification-convoyage/banner-tarification/banner-tarification.component';
import { ReservBoxComponent } from './tarification-convoyage/reserv-box/reserv-box.component';
import { ReservBoxCreateComponent } from './tarification-convoyage/reserv-box-create/reserv-box-create.component';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AssuranceConvoyageComponent,
    AProposComponent,
    InscriptionEntrepriseComponent,
    InscriptionConvoyeurComponent,
    BannerComponent,
    LogoAnimComponent,
    ServiceListComponent,
    ServiceTypeComponent,
    StepDeliveryComponent,
    ChatbotComponent,
    ContactComponent,
    StatsComponent,
    ChatMessageComponent,
    OpinionComponent,
    OpinionItemComponent,
    BannerAssurComponent,
    BannerProposComponent,
    TeamInfComponent,
    LocaMessageComponent,
    BannerEntComponent,
    FlashInfComponent,
    ConnexionComponent,
    InscriptConvoyComponent,
    CondInscriptionComponent,
    FormProgressComponent,
    FormFieldCarComponent,
    InformationsChauffeurComponent,
    FormTransportComponent,
    AdressePostaleComponent,
    InformationComponent,
    CirculationComponent,
    InformationPermisComponent,
    DocumentIdentiteComponent,
    DocumentProfessionnelComponent,
    InformationBancaireComponent,
    InscriptClientComponent,
    FormFieldCarClientComponent,
    FormProgressClientComponent,
    InformationsChauffeurClientComponent,
    AskCommandFormComponent,
    FormFieldCarAskComponent,
    FormProgressAskComponent,
    AdresseDepartComponent,
    AdresseLivraisonComponent,
    InformationsVehiculeComponent,
    PlageHoraireVehiculeComponent,
    InformationsClientComponent,
    PrestatiionsSupplementairesComponent,
    PaiementComponent,
    DiagTypeCarComponent,
    TarificationConvoyageComponent,
    BannerTarificationComponent,
    ReservBoxComponent,
    ReservBoxCreateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

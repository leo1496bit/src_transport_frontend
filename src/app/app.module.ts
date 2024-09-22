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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

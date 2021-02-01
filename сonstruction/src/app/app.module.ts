import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DragScrollModule } from 'ngx-drag-scroll';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BenefitsComponent } from './benefits/benefits.component';
import { PricesComponent } from './prices/prices.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { FeedbackFormsComponent } from './feedback/feedback-forms/feedback-forms.component';
import { SchemeComponent } from './scheme/scheme.component';
import { InclusiveComponent } from './inclusive/inclusive.component';
import { ProblemsComponent } from './problems/problems.component';
import { MaterialsComponent } from './materials/materials.component';
import { ExscursComponent } from './exscurs/exscurs.component';
import { UpsellComponent } from './upsell/upsell.component';
import { ContactsComponent } from './contacts/contacts.component';
import { FooterComponent } from './footer/footer.component';
import { TopBarComponent } from './header/top-bar/top-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BenefitsComponent,
    PricesComponent,
    FeedbackComponent,
    FeedbackFormsComponent,
    SchemeComponent,
    InclusiveComponent,
    ProblemsComponent,
    MaterialsComponent,
    ExscursComponent,
    UpsellComponent,
    ContactsComponent,
    FooterComponent,
    TopBarComponent,
  ],
  imports: [
    BrowserModule, DragScrollModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GridModule } from '@progress/kendo-angular-grid';
import { DateInputsModule } from '@progress/kendo-angular-dateinputs';
import { IconsModule } from '@progress/kendo-angular-icons';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { LabelModule } from '@progress/kendo-angular-label';
import { EditorModule } from "@progress/kendo-angular-editor";
import { EmailTemplateConfigComponent } from './email-template/email-template-config/email-template-config.component';
import { CreateEmailTemplateConfigComponent } from './email-template/create-email-template-config/create-email-template-config.component';
import { EmailFrequencyConfigComponent } from './email-frequency/email-frequency-config/email-frequency-config.component';
import { EditEmailFrequencyConfigComponent } from './email-frequency/edit-email-frequency-config/edit-email-frequency-config.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EmailTemplateConfigComponent,
    CreateEmailTemplateConfigComponent,
    EmailFrequencyConfigComponent,
    EditEmailFrequencyConfigComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      {
        path: '',
        component: HomeComponent
      }
    ]),
    GridModule,
    BrowserAnimationsModule,
    DateInputsModule,
    IconsModule,
    DropDownsModule,
    ButtonsModule,
    InputsModule,
    LabelModule,
    EditorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

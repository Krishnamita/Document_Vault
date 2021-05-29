import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DocumentsComponent } from './documents/documents.component';
import { ProfileComponent } from './profile/profile.component';
import { SettingsComponent } from './settings/settings.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { FaqComponent } from './faq/faq.component';
import { ListDocumentComponent } from './list-document/list-document.component';
import { AddDocumentComponent } from './add-document/add-document.component';
import { SearchfilterPipe } from './searchfilter.pipe';
import { DetailsComponent } from './details/details.component';
import { EditprofileComponent } from './editprofile/editprofile.component';
import { DashnavbarComponent } from './dashnavbar/dashnavbar.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgxSpinnerModule } from 'ngx-spinner';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    AboutUsComponent,
    DashboardComponent,
    DocumentsComponent,
    ProfileComponent,
    SettingsComponent,
    NavbarComponent,
    SidebarComponent,
    SignUpComponent,
    SignInComponent,
    FeedbackComponent,
    FaqComponent,
    ListDocumentComponent,
    AddDocumentComponent,
    SearchfilterPipe,
    DetailsComponent,
    EditprofileComponent,
    DashnavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule, ReactiveFormsModule, NgxPaginationModule,
    NgxSpinnerModule

  ],
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
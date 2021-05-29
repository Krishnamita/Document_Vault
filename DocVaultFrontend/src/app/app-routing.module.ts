import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactComponent } from './contact/contact.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DocumentsComponent } from './documents/documents.component';
import { HomeComponent } from './home/home.component';
import { FaqComponent } from './faq/faq.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { AddDocumentComponent } from './add-document/add-document.component';
import { ListDocumentComponent } from './list-document/list-document.component';
import { ProfileComponent } from './profile/profile.component';
import { SettingsComponent } from './settings/settings.component';
import { DetailsComponent } from './details/details.component';
import { EditprofileComponent } from './editprofile/editprofile.component';
import { DashnavbarComponent } from './dashnavbar/dashnavbar.component';

const routes: Routes = [
  { path : 'home', component : HomeComponent},
  { path: '', component : HomeComponent },
  { path : 'contact', component : ContactComponent},
  { path : 'about-us', component : AboutUsComponent},
  { path : 'dashboard', component : DashboardComponent},
  { path : 'documents', component : DocumentsComponent},
  { path: 'faq', component: FaqComponent },
  { path: 'feedback', component: FeedbackComponent },
  { path: 'sign-in', component: SignInComponent },
  { path: 'sign-up', component: SignUpComponent },
  { path: 'add-document', component: AddDocumentComponent},
  { path: 'list-document', component: ListDocumentComponent},
  { path: 'profile', component: ProfileComponent},
  { path: 'settings', component: SettingsComponent },
  { path: 'details', component: DetailsComponent },
  { path: 'editprofile', component: EditprofileComponent },
  { path: 'dashnavbar', component: DashnavbarComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

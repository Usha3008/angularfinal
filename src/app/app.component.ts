import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ViewDocumentsComponent } from './pages/view-documents.component';
import { ViewProfileComponent } from './pages/view-profile.component';
import { EditProfileComponent } from './pages/edit-profile.component';
import { ViewBeneficiaryComponent } from './pages/view-beneficiary.component';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,ViewProfileComponent,EditProfileComponent,ViewDocumentsComponent,ViewBeneficiaryComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-cust';
}

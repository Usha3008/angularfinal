import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login.component';
import { DashboardComponent } from './pages/dashboard.component';
import { ViewProfileComponent } from './pages/view-profile.component';
import { NgModule } from '@angular/core';
import { EditProfileComponent } from './pages/edit-profile.component';
import { ViewDocumentsComponent } from './pages/view-documents.component';
import { AuthGuard } from './guards/auth.guard';
import { ChangePasswordComponent } from './pages/change-password.component';
import { EmployeeDashboardComponent } from './pages/employee-dashboard.component';
import { ViewBeneficiaryComponent } from './pages/view-beneficiary.component';
import { AddBeneficiaryComponent } from './pages/add-beneficiary.component';


export const routes: Routes = [
    {
    path: '',redirectTo:'login' ,pathMatch:'full'//default to login    
},
{
    path:'login',
    component:LoginComponent
},
{
    path:'dashboard',
    component:DashboardComponent,canActivate: [AuthGuard]
},
{
    path: 'view-profile',
     component:ViewProfileComponent,canActivate: [AuthGuard]
},
{
    path: 'edit-profile/:id',
     component:EditProfileComponent,canActivate: [AuthGuard]
},

{
    path: 'view-documents/:id',
     component:ViewDocumentsComponent,canActivate: [AuthGuard]
},
{
    path: 'change-password',
     component:ChangePasswordComponent
},
{
    path:'employee-dashboard',
    component:EmployeeDashboardComponent,

},

{ path: 'view-beneficiaries/:customerId', 
component: ViewBeneficiaryComponent,canActivate: [AuthGuard] },

{ path: 'add-beneficiary', 
component: AddBeneficiaryComponent,canActivate: [AuthGuard] },


];

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})

export class AppRoutingModule {}
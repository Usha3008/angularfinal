import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-dashboard',
  templateUrl: './employee-dashboard.component.html',
  styleUrls: ['./employee-dashboard.component.css']
})
export class EmployeeDashboardComponent implements OnInit {
  employeeId: number | null = null;

  constructor(private router: Router) {}

  ngOnInit() {
    const id = window.sessionStorage.getItem('employeeId');
    this.employeeId = id ? parseInt(id, 10) : null;
    if (!this.employeeId) {
      // If employeeId is not found, redirect to login page
      this.router.navigate(['/login']);
    }
  }

  onLogout() {
    // Clear session storage and redirect to login page
    window.sessionStorage.clear();
    this.router.navigate(['/login']);
  }

  onViewDetails() {
    // Navigate to the employee details page
   // this.router.navigate(['/employee-details']);
  }
}
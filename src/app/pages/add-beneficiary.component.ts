import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { CustomersApiService } from './customer-api-service';
import { Beneficiary } from './view-beneficiary.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-beneficiary',
  templateUrl: './add-beneficiary.component.html',
  styleUrls: ['./add-beneficiary.component.css'],
  standalone: true,
  imports: [FormsModule, HttpClientModule, RouterModule, CommonModule]
})
export class AddBeneficiaryComponent implements OnInit {
  beneficiary: Beneficiary = new Beneficiary(0, '','', '', true, 0, 0);
  customerId: number | null = null;
  message: string = '';

  constructor(
    private beneficiariesService: CustomersApiService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const customerIdParam = this.route.snapshot.paramMap.get('customerId');
    if (customerIdParam) {
      this.customerId = +customerIdParam;
      this.beneficiary.customerId = this.customerId;
    } else {
      this.customerId = +window.sessionStorage.getItem('customerId')!;
      if (this.customerId) {
        this.beneficiary.customerId = this.customerId;
      } else {
        this.router.navigateByUrl('/login');
      }
    }
  }

  onSubmit(): void {
    // Hard-code isActive to true
    this.beneficiary.isActive = true;

    if (this.customerId !== null) {
      this.beneficiariesService.addBeneficiary(this.beneficiary).subscribe({
        next: () => {
          this.message = 'Beneficiary added successfully.';
          setTimeout(() => this.router.navigate(['/view-beneficiaries', this.customerId]), 2000);
        },
        error: (error) => {
          console.error('Error adding beneficiary:', error);
          this.message = 'Failed to add beneficiary. Please try again.';
        }
      });
    } else {
      this.message = "No customer ID available. Please log in again.";
      this.router.navigateByUrl('/dashboard');
    }
  }

  onBack(): void {
    this.router.navigate(['/view-beneficiaries', this.customerId]);
  }
}
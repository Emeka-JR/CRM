import { Component } from '@angular/core';
import { DealService } from '../../Services/deal.service';
import { Deal } from '../../Model/deal';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-edit-deal',
  templateUrl: './add-edit-deal.component.html',
  styleUrls: ['./add-edit-deal.component.css']
})
export class AddEditDealComponent {
  deal: Deal = {
    name: '',
    value: 0,
    stage: 'Lead',
    customer: '',
    closeDate: '',
    status: 'Open'
  };

  constructor(private dealService: DealService, private router: Router) {}

  onSubmit(form: NgForm) {
    if (form.invalid) {
      Object.keys(form.controls).forEach(field => {
        const control = form.control.get(field);
        control?.markAsTouched({ onlySelf: true });
      });
      return;
    }
    // Handle form submission here
    // this.addContact(form.value);
  }

  saveDeal() {
    if (this.deal.id) {
      this.dealService.updateDeal(this.deal.id, this.deal).subscribe(() => {
        this.router.navigate(['/pipeline-overview']);
      });
    } else {
      this.dealService.addDeal(this.deal).subscribe(() => {
        this.router.navigate(['/pipeline-overview']);
      });
    }
  }
}

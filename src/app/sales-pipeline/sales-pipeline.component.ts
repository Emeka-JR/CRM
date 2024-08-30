// src/app/components/sales-pipeline/sales-pipeline.component.ts
import { Component, OnInit } from '@angular/core';
import { DealService } from '../Services/deal.service';
import { Deal } from '../Model/deal';

@Component({
  selector: 'app-sales-pipeline',
  templateUrl: './sales-pipeline.component.html',
  styleUrls: ['./sales-pipeline.component.css']
})
export class SalesPipelineComponent implements OnInit {
  deals: { [key: string]: Deal[] } = {};

  constructor(private dealService: DealService) {}

  ngOnInit(): void {
    this.dealService.getDeals().subscribe(deals => {
      this.deals = this.organizeDealsByStage(deals);
    });
  }

  organizeDealsByStage(deals: Deal[]): { [key: string]: Deal[] } {
    return deals.reduce((acc, deal) => {
      if (!acc[deal.status]) {
        acc[deal.status] = [];
      }
      acc[deal.status].push(deal);
      return acc;
    }, {} as { [key: string]: Deal[] });
  }
}

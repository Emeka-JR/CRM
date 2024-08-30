import { Component, OnInit } from '@angular/core';
import { DealService } from '../../Services/deal.service';
import { Deal } from '../../Model/deal';

@Component({
  selector: 'app-pipeline-overview',
  templateUrl: './pipeline-overview.component.html',
  styleUrls: ['./pipeline-overview.component.css']
})
export class PipelineOverviewComponent implements OnInit {
  deals: { [key: string]: Deal[] } = {}; // Define deals as a dictionary with string keys and Deal arrays as values

  constructor(private dealService: DealService) {}

  ngOnInit(): void {
    this.dealService.getDeals().subscribe(deals => {
      this.deals = this.groupDealsByStage(deals);
    });
  }

  groupDealsByStage(deals: Deal[]): { [key: string]: Deal[] } {
    return deals.reduce((groups, deal) => {
      const stage = deal.stage;
      if (!groups[stage]) {
        groups[stage] = [];
      }
      groups[stage].push(deal);
      return groups;
    }, {} as { [key: string]: Deal[] });
  }

  // Ensure you have this method to access the keys of the deals object
  getStageKeys(): string[] {
    return Object.keys(this.deals);
  }
}

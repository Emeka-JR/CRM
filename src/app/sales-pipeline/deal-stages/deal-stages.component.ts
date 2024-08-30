import { Component, OnInit } from '@angular/core';
import { DealService } from '../../Services/deal.service';
import { Deal } from '../../Model/deal';

@Component({
  selector: 'app-deal-stages',
  templateUrl: './deal-stages.component.html',
  styleUrls: ['./deal-stages.component.css']
})
export class DealStagesComponent implements OnInit {
  stages: { [key: string]: Deal[] } = {}; // Define stages as a dictionary with string keys and Deal arrays as values

  constructor(private dealService: DealService) {}

  ngOnInit(): void {
    this.dealService.getDeals().subscribe(deals => {
      this.stages = this.groupDealsByStage(deals);
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

  // Ensure you have this method to access the keys of the stages object
  getStageKeys(): string[] {
    return Object.keys(this.stages);
  }
}

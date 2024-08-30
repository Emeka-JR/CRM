import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DealService } from '../../Services/deal.service';
import { Deal } from '../../Model/deal';

@Component({
  selector: 'app-deal-details',
  templateUrl: './deal-details.component.html',
  styleUrls: ['./deal-details.component.css']
})
export class DealDetailsComponent implements OnInit {
  deal: Deal | undefined;

  constructor(
    private route: ActivatedRoute,
    private dealService: DealService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')!;
    this.dealService.getDealById(id).subscribe(deal => {
      this.deal = deal;
    });
  }
}

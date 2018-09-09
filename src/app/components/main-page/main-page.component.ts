import { Component, OnInit } from '@angular/core';
import { MainPageService } from '../../services/main-page-data.service';
import { SubscriptionLike as ISubscription } from 'rxjs';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  constructor(public mainPageService: MainPageService) { }

  public navigationButtons: any;
  public mainText: any;

  public navigationButtonsSubscription$: ISubscription;

  ngOnInit() {
    this.navigationButtonsSubscription$ = this.mainPageService.getNavigationButtons().subscribe(x => {
      this.navigationButtons = x;
    });
     this.mainPageService.getMainText().subscribe(x => {
      this.mainText = x;
    });
  }

}

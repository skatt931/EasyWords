import { Component, OnInit } from '@angular/core';
import { MainPageService } from '../../services/main-page-data.service';
import { SubscriptionLike as ISubscription } from 'rxjs';
import { NavigationButton } from '../../models/NavigationButtons';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  constructor(public mainPageService: MainPageService) { }

  public navigationButtons: any;
  public navigationButtonsSubscription$: ISubscription;

  ngOnInit() {
    this.navigationButtonsSubscription$ = this.mainPageService.getNavigationButtons().subscribe(x => {
      this.navigationButtons = x;
      console.log(this.navigationButtons);
    });

  }

}

import { Component, OnInit } from '@angular/core';
import { DataSendService } from '../../services/data-send.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  constructor(public test: DataSendService) { }

  ngOnInit() {
  }

  addTestData() {
    this.test.putData().subscribe(x => console.log(x));
  }

}

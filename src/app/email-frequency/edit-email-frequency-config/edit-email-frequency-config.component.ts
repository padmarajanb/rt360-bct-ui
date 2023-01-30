import { Component, OnInit } from '@angular/core';

import { editemailfrequencyconfigData } from 'src/app/datas';
import { Rt360Service } from 'src/app/rt360.service';
@Component({
  selector: 'app-edit-email-frequency-config',
  templateUrl: './edit-email-frequency-config.component.html',
  styleUrls: ['./edit-email-frequency-config.component.scss']
})
export class EditEmailFrequencyConfigComponent implements OnInit {
  show = false;

  constructor(
    private rtservice: Rt360Service) { }

  ngOnInit(): void {
  }

  public listItemsTemplate: Array<string> = ["5", "Others"];
  public selectedTemplate = "SMA Template";
  public listItemsMonthlyFreq: Array<string> = ["5", "Others"];
  public selectedMonthlyFreq = "Monthly";
  public listItemsMonth1: Array<string> = ["5", "Others"];
  public selectedMonth1 = "5";
  public listItemsMonth2: Array<string> = ["15", "Others"];
  public selectedMonth2 = "15";

  public opened = false;

  public close(): void {
    this.opened = false;
    this.rtservice.pageInfo = 'emailFrequencyConfig';
  }

  public open(): void {
    this.opened = true;
  }
  
  public gridView: any[] = editemailfrequencyconfigData;

  
  confirmPopup() {
  }

}

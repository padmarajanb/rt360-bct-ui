import { Component, OnInit } from '@angular/core';

import { editemailfrequencyconfigData } from 'src/app/datas';
import { Rt360Service } from 'src/app/rt360.service';
@Component({
  selector: 'app-edit-email-frequency-config',
  templateUrl: './edit-email-frequency-config.component.html',
  styleUrls: ['./edit-email-frequency-config.component.scss']
})
export class EditEmailFrequencyConfigComponent implements OnInit {

  /**
   * variable
   */
  listItemsTemplate: Array<string> = ["SMA Template", "Others"];
  /**
   * variable
   */
  selectedTemplate = "SMA Template";
  /**
   * variable
   */
  listItemsMonthlyFreq: Array<string> = ["Monthly", "Weekly", "Daily", "Fortnightly", "Twice in A Week"];
  /**
   * variable
   */
  selectedMonthlyFreq = "Monthly";
  /**
   * variable
   */
  listItemsMonth1: Array<string> = ["5", "10", "15"];
  /**
   * variable
   */
  selectedMonth1 = "5";
  /**
   * variable
   */
  listItemsMonth2: Array<string> = ["15", "20", "25"];
  /**
   * variable
   */
  selectedMonth2 = "15";
  /**
   * variable
   */
  show = false;
  /**
   * variable
   */

  gridView: any[] = editemailfrequencyconfigData;
  /**
   * variable
   */

  opened = false;

  constructor(
    private rtservice: Rt360Service) { }

  ngOnInit(): void {
  }

  close(): void {
    this.opened = false;
    this.rtservice.pageInfo = 'emailFrequencyConfig';
  }

  open(): void {
    this.opened = true;
  }

}

import { Component, OnInit } from '@angular/core';
import { emailfrequencyconfigData } from 'src/app/datas';
import { Rt360Service } from 'src/app/rt360.service';

@Component({
  selector: 'app-email-frequency-config',
  templateUrl: './email-frequency-config.component.html',
  styleUrls: ['./email-frequency-config.component.scss']
})
export class EmailFrequencyConfigComponent implements OnInit {
  /**
   * variable
   */
  public gridView: any[] = emailfrequencyconfigData;
  /**
   * variable
   */
  public pageSize = 5;
  /**
   * variable
   */
  public buttonCount = 1;
  /**
   * variable
   */
  public sizes = [10, 20, 50];

  constructor(private rtService: Rt360Service) { }

  ngOnInit(): void {
  }


  setPageInfo() {
    this.rtService.pageInfo = 'editemailFrequencyConfig';
  }

}

import { Component, OnInit } from '@angular/core';
import { alertConfigData } from "../datas";

@Component({
  selector: 'app-alert-configuration',
  templateUrl: './alert-configuration.component.html',
  styleUrls: ['./alert-configuration.component.scss']
})
export class AlertConfigurationComponent implements OnInit {
  /**
   * variable
   */
  public gridView: any[] = alertConfigData;
  /**
   * variable
   */
  public pageSize = 7;
  /**
   * variable
   */
  public buttonCount = 1;
  /**
   * variable
   */
  public sizes = [10, 20, 50];

  constructor() { }

  ngOnInit(): void {
  }

}

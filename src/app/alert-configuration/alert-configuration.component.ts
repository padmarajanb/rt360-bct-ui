import { Component, OnInit } from '@angular/core';
import { alertConfigData } from "../datas";

@Component({
  selector: 'app-alert-configuration',
  templateUrl: './alert-configuration.component.html',
  styleUrls: ['./alert-configuration.component.scss']
})
export class AlertConfigurationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  checked = true;
  public gridView: any[] = alertConfigData;
  public pageSize = 7;
  public buttonCount = 1;
  public sizes = [10, 20, 50];

}

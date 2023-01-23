import { Component, OnInit } from '@angular/core';

import { SVGIcon, trashIcon } from "@progress/kendo-svg-icons";
import { emailtemplateconfigData } from "../../datas";

@Component({
  selector: 'app-email-template-config',
  templateUrl: './email-template-config.component.html',
  styleUrls: ['./email-template-config.component.scss']
})
export class EmailTemplateConfigComponent implements OnInit {
  trashIcon: any = trashIcon;

  constructor() { }

  ngOnInit(): void {
  }

  
  public gridView: any[] = emailtemplateconfigData;
  public pageSize = 6;
  public buttonCount = 1;
  public sizes = [10, 20, 50];

}

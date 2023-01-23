import { Component, OnInit } from '@angular/core';

import { IconSize } from "@progress/kendo-angular-icons";
import { SVGIcon, trashIcon } from "@progress/kendo-svg-icons";
import { emailtemplateconfigData } from '../datas';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  trashIcon: any = trashIcon;

  constructor() { }

  ngOnInit(): void {
  }

  
  public gridView: any[] = emailtemplateconfigData;
  public pageSize = 6;
  public buttonCount = 1;
  public sizes = [10, 20, 50];

}

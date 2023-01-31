import { Component, OnInit } from '@angular/core';
import { emailtemplateconfigData } from '../datas';
import { Rt360Service } from '../rt360.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  /**
   * variable
   */
  public gridView: any[] = emailtemplateconfigData;
  /**
   * variable
   */
  public pageSize = 6;
  /**
   * variable
   */
  public buttonCount = 1;
  /**
   * variable
   */
  public sizes = [10, 20, 50];

  constructor(public rtservice: Rt360Service) { }

  ngOnInit(): void {
  }

  updateNavLink(linkInfo: string) {
    this.rtservice.pageInfo = linkInfo;
  }
}

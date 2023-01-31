import { Component, OnInit } from '@angular/core';
import { Rt360Service } from 'src/app/rt360.service';
import { emailtemplateconfigData } from "../../datas";

@Component({
  selector: 'app-email-template-config',
  templateUrl: './email-template-config.component.html',
  styleUrls: ['./email-template-config.component.scss']
})
export class EmailTemplateConfigComponent implements OnInit {
  /**
   * variable
   */
  gridView: any[] = emailtemplateconfigData;
  /**
   * variable
   */
  pageSize = 6;
  /**
   * variable
   */
  buttonCount = 1;
  /**
   * variable
   */
  sizes = [10, 20, 50];

  constructor(private rtService: Rt360Service) { }

  ngOnInit(): void {
  }

  setPageInfo(){
    this.rtService.pageInfo = 'createemailTemplateConfig';
  }

}

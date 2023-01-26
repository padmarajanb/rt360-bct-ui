import { Component, OnInit } from '@angular/core';
import { emailfrequencyconfigData } from 'src/app/datas';
import { Rt360Service } from 'src/app/rt360.service';

@Component({
  selector: 'app-email-frequency-config',
  templateUrl: './email-frequency-config.component.html',
  styleUrls: ['./email-frequency-config.component.scss']
})
export class EmailFrequencyConfigComponent implements OnInit {

  constructor(private rtService: Rt360Service) { }

  ngOnInit(): void {
  }


  setPageInfo(){
    this.rtService.pageInfo = 'editemailFrequencyConfig';
  }
  
  public gridView: any[] = emailfrequencyconfigData;
  public pageSize = 5;
  public buttonCount = 1;
  public sizes = [10, 20, 50];
}

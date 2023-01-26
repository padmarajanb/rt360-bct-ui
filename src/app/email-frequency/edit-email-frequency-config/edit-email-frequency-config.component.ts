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

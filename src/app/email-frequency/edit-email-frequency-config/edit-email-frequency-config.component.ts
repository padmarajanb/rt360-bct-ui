import { Component, OnInit } from '@angular/core';

import { editemailfrequencyconfigData } from 'src/app/datas';
@Component({
  selector: 'app-edit-email-frequency-config',
  templateUrl: './edit-email-frequency-config.component.html',
  styleUrls: ['./edit-email-frequency-config.component.scss']
})
export class EditEmailFrequencyConfigComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {
  }

  
  public gridView: any[] = editemailfrequencyconfigData;

}

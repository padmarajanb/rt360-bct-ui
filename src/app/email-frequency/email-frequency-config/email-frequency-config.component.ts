import { Component, OnInit } from '@angular/core';
import { emailfrequencyconfigData } from 'src/app/datas';

@Component({
  selector: 'app-email-frequency-config',
  templateUrl: './email-frequency-config.component.html',
  styleUrls: ['./email-frequency-config.component.scss']
})
export class EmailFrequencyConfigComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  
  public gridView: any[] = emailfrequencyconfigData;
  public pageSize = 5;
  public buttonCount = 1;
  public sizes = [10, 20, 50];
}

import { Component, OnInit } from '@angular/core';
import { assignPrivilegeConfig } from '../datas';

@Component({
  selector: 'app-create-group',
  templateUrl: './create-group.component.html',
  styleUrls: ['./create-group.component.scss']
})
export class CreateGroupComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  viewInfo = '';
  public gridView: any[] = assignPrivilegeConfig;

  setViewInfo(info: any){
    this.viewInfo = info;
  }
}

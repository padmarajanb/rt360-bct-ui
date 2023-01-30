import { Component, OnInit } from '@angular/core';
import { assignPrivilegeConfig } from '../datas';

@Component({
  selector: 'app-create-group',
  templateUrl: './create-group.component.html',
  styleUrls: ['./create-group.component.scss']
})
export class CreateGroupComponent implements OnInit {

  constructor() { }

  public listItemsModule: Array<string> = ["All Module", "Others"];
  public selectedModule = "All Module";
  public listItemsRole: Array<string> = ["Admin", "Others"];
  public selectedRole = "Admin";
  public groupName = "Branch Other Checker";
  public groupDesc = "Branch Other Checker";

  ngOnInit(): void {
  }
  
  public opened = false;

  public close(): void {
    this.opened = false;
    this.setViewInfo('');
  }

  public open(): void {
    this.opened = true;
  }

  viewInfo = '';
  public gridView: any[] = assignPrivilegeConfig;

  setViewInfo(info: any){
    this.viewInfo = info;
  }
}

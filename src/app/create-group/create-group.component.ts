import { Component, OnInit } from '@angular/core';
import { assignPrivilegeConfig } from '../datas';

@Component({
  selector: 'app-create-group',
  templateUrl: './create-group.component.html',
  styleUrls: ['./create-group.component.scss']
})
export class CreateGroupComponent implements OnInit {
  /**
   * variable
   */
  public listItemsModule: Array<string> = ["All Module", "Others"];
  /**
   * variable
   */
  public selectedModule = "All Module";
  /**
   * variable
   */
  public listItemsRole: Array<string> = ["Admin", "Others"];
  /**
   * variable
   */
  public selectedRole = "Admin";
  /**
   * variable
   */
  public groupName = "Branch-Others Module-Checker";
  /**
   * variable
   */
  public groupDesc = "Branch-Others Module-Checker";
  /**
   * variable
   */
  viewInfo = '';
  /**
   * variable
   */
  public gridView: any[] = assignPrivilegeConfig;
  /**
   * variable
   */
  opened = false;

  constructor() { }

  ngOnInit(): void {
  }

  close(): void {
    this.opened = false;
    this.setViewInfo('');
  }

  open(): void {
    this.opened = true;
  }

  setViewInfo(info: any) {
    this.viewInfo = info;
  }
}

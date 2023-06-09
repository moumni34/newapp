import { Component, OnInit } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { DataService } from 'src/app/shared/service/data/data.service';
import { SidebarService } from 'src/app/shared/service/sidebar/sidebar.service';
import { routes } from 'src/app/shared/service/routes/routes';
import { CommonService } from 'src/app/shared/service/common/common.service';
import { Inject } from '@angular/core';


@Component({
  selector: 'app-student-header',
  templateUrl: './student-header.component.html',
  styleUrls: ['./student-header.component.scss'],
})
export class StudentHeaderComponent implements OnInit {
  base: string = '';
  page: string = '';
  last: string = '';
  public routes = routes;

  sidebar: Array<any> = [];
  constructor(
    private common: CommonService,
    private data: DataService,
    private sidebarService: SidebarService
  ) {
    // this.Router.events.subscribe((data: any) => {
    //   if (data instanceof NavigationStart) {
    //     this.hideSidebar();
    //     this.base = data.url.split('/')[1];
    //     this.page = data.url.split('/')[2];
    //     this.last = data.url.split('/')[3];
    //   }
    // });
    this.common.base.subscribe((res: any) => {
      this.base = res;
    });
    this.common.page.subscribe((res: any) => {
      this.page = res;
    });
    this.common.last.subscribe((res: any) => {
      this.last = res;
    });
    this.sidebar = this.data.sideBar;
  }

  ngOnInit(): void {}
  public toggleSidebar(): void {
    this.sidebarService.openSidebar();
  }
  public hideSidebar(): void {
    this.sidebarService.closeSidebar();
  }
}

import { Component, OnInit } from '@angular/core';
import { ToggleService } from '../toggle.service';

@Component({
  selector: 'app-sidebar-left',
  templateUrl: './sidebar-left.component.html',
  styleUrls: ['./sidebar-left.component.scss']
})
export class SidebarLeftComponent implements OnInit {

  toggleValue:boolean = false;
  drpdwn:boolean = true;

  constructor(private toggle:ToggleService){
    this.toggle.getStyle().subscribe(style=>{
      console.log("in sidebar",style['toggle']);
      this.toggleValue=style['toggle'];
    });
}

  ngOnInit(): void {
  }

  toggleDrpdwn(){
    this.drpdwn = this.drpdwn === true ? false : true;
  }
}

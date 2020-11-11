import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { ToggleService } from '../toggle.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor( private route: ActivatedRoute, private router: Router,private toggle:ToggleService ) { }

  ngOnInit(): void {
  }

  toggleValue:boolean = false;
  visible:boolean = false;
  content: string;
  searchText: string;
  quesMenu:boolean = false;
  profileMenu: boolean = false;
  
  @Output() public sendToApp = new EventEmitter<Object>();
  addSearchText() {
      this.route.queryParams.subscribe(params => {
      this.content = params['content'];
      this.router.navigate(['mails'], { queryParams: {content:this.content, searchText:this.searchText}});
    })
  }
  
  menuClick(){
    this.toggleValue = this.toggleValue === true ? false : true;
    this.toggle.toggleStyle(this.toggleValue);
    console.log("inside menuCllick");
  }

  onClick(){
    this.visible = this.visible === true ? false : true;
  }

  // ReadMore:boolean=true
  // visible:boolean=false
  // onclick(){
  //   this.ReadMore=!this.ReadMore
  //   this.visible=!this.visible
  // }
  

}

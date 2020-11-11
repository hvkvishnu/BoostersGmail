import { Component, OnInit, Input} from '@angular/core';
import { GetDetailsService } from '../get-details.service';
import { ActivatedRoute } from '@angular/router';
import { ToggleService } from '../toggle.service';


@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent implements OnInit {
  
  sideBarChoice: String;
  searchText: String;
  contents;
  fromurl;
  toggleValue:boolean = false;
  msg: any;
  constructor(private service:GetDetailsService, private route: ActivatedRoute,private toggle: ToggleService) {
    this.toggle.getStyle().subscribe(style=>{
      console.log("in sidebar",style['toggle']);
      this.toggleValue=style['toggle'];
    });
   }
  
  ngOnInit(): void {
    
    this.sideBarChoice = "inbox";
    
    
    this.route.queryParams.subscribe(params => {
      
      this.fromurl = params['content'];
      this.searchText = params['searchText']
      if(this.fromurl!= undefined && this.fromurl!= null) { this.sideBarChoice = this.fromurl; }
      this.getConts();
    });
  }
  
  
  getConts(){
    
    this.service.getContent(this.sideBarChoice).subscribe(
      response => {
        this.contents = response;
      },
      error => {
        console.log(error);}
        );
      }
      
      checkLength(text:string){
        return text.slice(0,70)+"..";
      }
      subjectCheck(text:string){
        return text.slice(0,21)+"";
      }
    }
    
    
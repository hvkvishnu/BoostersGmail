import { Component } from '@angular/core';
import { ToggleService } from './toggle.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'firstAngular';

  styleObj = {};

  constructor(private toggle:ToggleService){
      this.toggle.getStyle().subscribe(style=>{
        console.log("in app",style);
        this.styleObj=style;
      });
  }

  // sendToApp(obj){
  //   this.styleObj = obj;
  //   console.log(this.styleObj);
  // }





  //display: String="block";
  //showText: boolean=true;

  // toggle(){
  //   this.showText = !this.showText;
  //   if(this.display=='inline') {this.display= 'block';}
  //   else {this.display= 'inline';}
  // }
//   get myStyles(): any {
//     return {
//       'display' : this.display,
//     };
// }

}

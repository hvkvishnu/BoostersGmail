import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
 import {MailInterface } from '../mail-interface';
import { GetDetailsService } from '../get-details.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnInit {

  constructor(private route: ActivatedRoute, private service:GetDetailsService) { }
  
  msg: any;
  showDropDown: boolean=false;

  ngOnInit(): void {
    //this.msg = JSON.parse(this.route.snapshot.paramMap.get('msg'));

    this.route.queryParams.subscribe(params => {

       this.service.getContent(params['content']).subscribe(
        response => {
          this.msg = response[+params['mid']];
        },
        error => {
           console.log(error);
        }
    );



    });
 
  }

  
}


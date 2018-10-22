import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  constructor(private local:CommonService) { }

  ngOnInit() {
    //this.local.set('name','yin');
    if(this.local.get('list')){
    this.data=this.local.get('list').split('');
    }
    else{
      this.data=[1,2,3,4,5,6];
    }
  }
  data;
  data1=['a','b','c'];
  del(i){
   console.log(i);
   this.data1.splice(i,1);
   this.local.set('list','this.data');
  }

}

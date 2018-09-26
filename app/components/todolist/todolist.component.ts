import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  title:string='angular';
  arr:string[]=[];
  arr1:string[]=[];
  txt:string;
  //回车事件 点击回车输入的事项进入正在进行
  getValue(e){
    if(e.keyCode==13){
      this.arr.push(this.txt);
      this.txt='';
    }
  }
  //删除正在进行的一项
  del(idx){
    this.arr.splice(idx,1);
  }
  //使正在进行的一项到已完成
  change(idx){
    this.arr1.push(this.arr[idx]);
    this.arr.splice(idx,1);
  }
  //删除已完成的一项
  delete(idx){
    this.arr1.splice(idx,1);
  }
  //使已完成到正在进行
  change1(idx){
    this.arr.push(this.arr1[idx]);  
    this.arr1.splice(idx,1);
  }
}

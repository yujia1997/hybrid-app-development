import { Component, EventEmitter,OnInit, Input, Output, SimpleChanges } from '@angular/core';


@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input() arr;
  @Output() delIndex=new EventEmitter();
  del(i){
    this.delIndex.emit(i);
  }
  message:string;
  ngOnInit() {
  //进行数据初始化
  this.message='hello';
  }
  //生命周期钩子
  //index=0;
  //log(msg){
  //  console.log(`这是${this.index++}次调用,调用的钩子函数是${msg}`);
  //}
  //constructor(){
  //  this.log('constructor')
  //}
  //ngOnChanges(changes: SimpleChanges){
  //  this.log('ngOnChanges');
  //}
  //ngDoCheck() {
  //  this.log('ngDoCheck');
  //}
  //ngAfterContentChecked(){
  //  this.log('ngAfterContentChecked');
  //}
  //ngAfterContentInit(){
  //  this.log('ngAfterContentInit');
  //}
  //ngAfterViewInit(){
  //  this.log('ngAfterViewInit');
  //}
  //ngAfterViewChecked(){
  // this.log('ngAfterViewChecked');
  //}
}
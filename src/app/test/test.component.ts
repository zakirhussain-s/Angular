import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-test',
  // templateUrl: './test.component.html',
  template:`
  <h2>{{"Hello "+ name}}</h2>
  <button (click)="fireEvent()"> Send Event </button>
  `,
  styles: [`
  `]
})
export class TestComponent implements OnInit {

  public siteUrl = window.location.href;


  @Input("parentData") public name: any;

  @Output() public childEvent = new EventEmitter();



  constructor() { }

  ngOnInit(): void {
  }

  fireEvent(){
    this.childEvent.emit("Hey it's me Zakir");
  }
}

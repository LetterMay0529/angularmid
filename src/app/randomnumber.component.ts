import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'random',
  templateUrl: './randomnumber.component.html',
  styleUrls: ['./app.component.css']
})

export class RandomNumber implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  result:any;

  rand_number1 = Math.floor(Math.random() * 46) + 1;
  rand_number2 = Math.floor(Math.random() * 46) + 1;
  rand_number3 = Math.floor(Math.random() * 46) + 1;
  rand_number4 = Math.floor(Math.random() * 46) + 1;
  rand_number5 = Math.floor(Math.random() * 46) + 1;
  rand_number6 = Math.floor(Math.random() * 46) + 1;


  clickedrand_number1(){
    this.result = this.rand_number1;
  }

  clickedrand_number2(){
    this.result = this.rand_number2;
  }

  clickedrand_number3(){
    this.result = this.rand_number3;
  }

  clickedrand_number4(){
    this.result = this.rand_number4;
  }

  clickedrand_number5(){
    this.result = this.rand_number5;
  }

  clickedrand_number6(){
    this.result = this.rand_number6;
  }

}

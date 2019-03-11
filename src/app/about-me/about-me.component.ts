import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent implements OnInit {

  constructor() { }

  helloText = ['h', 'e', 'l', 'l', 'o', ', ', 'w', 'o', 'r', 'l', 'd', '!']
  index = 0
  hello = ''

  sayHello() : any {
    let text = document.getElementById('hi-text-2')
    if (this.index > this.helloText.length-1) {
      let wave = document.getElementById('wave')
      wave.style.opacity = '1' ;
      return
    };
    this.hello += this.helloText[this.index]
    this.index = this.index +1
    setTimeout(()=>{this.sayHello()}, 100)
  }

  ngOnInit() {
    setTimeout(() => {
      this.sayHello()
    }, 13);
  }
}

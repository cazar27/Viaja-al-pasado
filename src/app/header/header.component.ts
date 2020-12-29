import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  title = 'Casas temáticas en Frigiliana';

  constructor() { }

  ngOnInit() {
  }

  changeClass() {

    setTimeout(this.fun(), 500 );
  }

  fun() {
    const w = document.getElementsByClassName('modal-backdrop');
    console.log(w);
    w[0].setAttribute('style', 'z-index:0');
  }

}

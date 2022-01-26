import { Component, OnInit } from '@angular/core';

declare let window: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'MyApp';
  isMetamask : boolean = false;

  async ngOnInit(){
    if (window.ethereum) {
      this.isMetamask = true;
    } else {
      this.isMetamask = false;
    }
    }
}


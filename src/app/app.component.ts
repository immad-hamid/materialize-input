import { Component } from '@angular/core';
import { Iip } from './iip';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})

export class AppComponent  {
  name: string = 'Angular 6';
  // vds: Iip;
  vds: any = {
    ip: 'Hello World'
  };

  // constructor() {
  //   this.vds.ip = 'Vids IP';
  //   console.log(this.vds);
  // }
}

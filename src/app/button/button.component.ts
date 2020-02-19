import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';

@Component({
  selector: 'custom-button',
  template: `
    <p>
      button works!
    </p>
    <h2>
    {{name}}
    </h2>
  `,
  styles: [],
  encapsulation: ViewEncapsulation.Native
})
export class ButtonComponent implements OnInit {

  @Input () 
  public name: String = "default";

  constructor() { }

  ngOnInit() {
  }

}

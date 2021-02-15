import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-animate',
  templateUrl: './animate.component.html',
  styleUrls: ['./animate.component.scss'],
  template:`
  <button (click)="visible=!visible">Toggle</button>
    <div *ngIf="toggle" [@bounce] class="rect"></div>
  `,
  animations: [
    trigger('bounce', [transition(':enter', useAnimation(bounce))]),
    trigger('bounce', [transition(':leave', useAnimation(bounceOutUp,{
      params:{
        timing:3,
        delay:0.3
      }
    }))])
  ],

})
export class AnimateComponent implements OnInit {
  visible=true
  constructor() { }

  ngOnInit(): void {
  }

}

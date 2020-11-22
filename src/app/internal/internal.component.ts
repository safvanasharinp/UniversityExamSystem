import { Component, OnInit } from '@angular/core';
import { internalmodel } from './internal.model';

@Component({
  selector: 'app-internal',
  templateUrl: './internal.component.html',
  styleUrls: ['./internal.component.css']
})
export class InternalComponent implements OnInit {
  n : number=20;
  constructor() { }
 
  ngOnInit(): void {
  }

}

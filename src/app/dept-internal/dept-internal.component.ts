import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dept-internal',
  templateUrl: './dept-internal.component.html',
  styleUrls: ['./dept-internal.component.css']
})
export class DeptInternalComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

}

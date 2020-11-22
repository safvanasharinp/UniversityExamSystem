import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-camplogin',
  templateUrl: './camplogin.component.html',
  styleUrls: ['./camplogin.component.css']
})
export class CamploginComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  onsubmit(){
    alert('success');
    this.router.navigate(['/camp']);
  }

}

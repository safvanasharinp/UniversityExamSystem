import { Component, OnInit } from '@angular/core';

import { Router } from "@angular/router";
import { StudentserviceService } from '../studentservice.service';
//import {FormBuilder,FormGroup, FormControl, FormArray } from  '@angular/forms'; 
//import { FormArray } from '@angular/forms';
@Component({
  selector: 'app-external',
  templateUrl: './external.component.html',
  styleUrls: ['./external.component.css']
})
export class ExternalComponent implements OnInit {
  

  constructor(private StudentService: StudentserviceService,private router:Router) { }
  students:any[];
  StudentItem:any[];
 
  


  ngOnInit(): void {
   
  this.StudentService.getProducts().subscribe((data)=>{
    //console.log(data);
    this.students=JSON.parse(JSON.stringify(data));
    console.log(this.students);
  })

  
 
}


  AddExternal(){
   
     this.StudentService.addexternal(this.students);
     
     alert("success");
    this.router.navigate(['/camp/external']);
   }
  
  
  }

import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { StudentModel } from '.././student/student.model';
import { StudentserviceService } from '../studentservice.service';
@Component({
  selector: 'app-addstud',
  templateUrl: './addstud.component.html',
  styleUrls: ['./addstud.component.css']
})
export class AddstudComponent implements OnInit {

  

  constructor(private StudentService: StudentserviceService,private router:Router) { }
  students:any[];

  stdItem=new StudentModel(null,null,null,null,null,null,null,null);

  ngOnInit(): void {
  }

AddStudent(){
  this.StudentService.addstudent(this.stdItem);
     
     alert("success");
    //this.router.navigate(['/']);
}

}

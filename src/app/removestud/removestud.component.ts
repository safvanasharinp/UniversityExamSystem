import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { StudentserviceService } from '../studentservice.service';
@Component({
  selector: 'app-removestud',
  templateUrl: './removestud.component.html',
  styleUrls: ['./removestud.component.css']
})
export class RemovestudComponent implements OnInit {
year:number;
  constructor(private StudentService:StudentserviceService,private router:Router,private activatedrouter:ActivatedRoute) { }

  ngOnInit(): void {

    this.activatedrouter.params.subscribe((params)=>{
      console.log(params)
     })

  //   var year=this.StudentService.gettingyoa(this.year);
  // console.log(year+"this is year");
    //   this.students=JSON.parse(JSON.stringify(data));
      
    // })

  }

}

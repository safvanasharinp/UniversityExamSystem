import { Component, OnInit } from '@angular/core';
import{Router,ActivatedRoute} from '@angular/router';
import { StudentserviceService } from '../studentservice.service';
@Component({
  selector: 'app-removestud1',
  templateUrl: './removestud1.component.html',
  styleUrls: ['./removestud1.component.css']
})
export class Removestud1Component implements OnInit {
yoa:any;
dept:any;
selected:any;
value:number;
  constructor(private router:Router,private studentService:StudentserviceService,private activatedRouter:ActivatedRoute) { }

  groups = [{
    "year": 2020,
    
},
{
    "year": 2019,
    
},
{
    "year": 2018,
    
}];
  ngOnInit(): void {

    
  }
// public getvalues(){
//   console.log(this.dept);
//   console.log(this.yoa);
// }
  getyoa(data){
    //var year=document.getElementById("yearselect")
    //var selectedText = year.options[year.selectedIndex].innerHTML;
     //   var selectedValue = year;
    //this.yoa=event.target.value;
    console.log(data);
    // this.value=this.selected;
    // this.studentService.settingyoa(this.value);
    ///this.router.navigate(['/removestud']);
    
  }
  // getdept(event:any){
  //   this.dept=event.target.value;
  //   console.log(this.dept)
  // }

}

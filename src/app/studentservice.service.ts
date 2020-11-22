import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class StudentserviceService { 
  selected:any; 
  result: any;
  constructor( private http:HttpClient){}
  
settingyoa(data){
  this.selected=data;
  //console.log(this.selected)

}
gettingyoa(result){
  
  this.result= this.selected;
  
}

  getProducts(){
      return this.http.get("http://localhost:3000/students");
  }
  getyearstudents(){
    return this.http.get("http://localhost:3000/getyearstudents");
}
  addexternal(item:any)
    {
        return this.http.post("http://localhost:3000/addexternal",{"external":item})
        .subscribe(data =>{console.log(data)})
    }
 addstudent(item:any){
  return this.http.post("http://localhost:3000/addstudent",{"student":item})
  .subscribe(data =>{console.log(data)})
 }
}


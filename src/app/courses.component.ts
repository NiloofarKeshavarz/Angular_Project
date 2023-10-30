import { Component } from "@angular/core";

@Component({ // a metadata decorator to show that it is a COMPONENT
    selector : 'courses',
    template : `<h2> {{ getcourse()}} </h2>
        <li  *ngFor = "let course of courses">{{course}}</li> 
        
    `    //{{}} returns changes dynamically  
     // using DIRECTIVES in Angular to modify the DOM
})
export class CoursesComponent{  //naming conevetion: pascal + Component word
        //after creating each component you need to regiater it in a module
        title ='get course method';
        courses =["Math" , "Science" , "Art"];

        getcourse(){
            return this.title;
          
        }
}
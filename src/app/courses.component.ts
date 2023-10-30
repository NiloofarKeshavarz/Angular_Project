import { Component } from "@angular/core";

@Component({ // a metadata decorator to show that it is a COMPONENT
    selector : 'courses',
    template : '<h2> Courses </h2>'
})
export class CoursesComponent{  //naming conevetion: pascal + Component word
        //after creating each component you need to regiater it in a module
}
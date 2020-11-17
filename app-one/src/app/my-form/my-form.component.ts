import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-form',
  templateUrl: './my-form.component.html',
  styleUrls: ['./my-form.component.scss']
})
export class MyFormComponent implements OnInit {

  name: string = "John Doe";

  person: any = {
    name: "User",
    age: 20
  }


  constructor() { }

  ngOnInit(): void {
  }

}

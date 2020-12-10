import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.scss']
})
export class DataBindingComponent implements OnInit {

  url: string = 'https://www.youtube.com/';
  urlImage: string = 'https://vignette.wikia.nocookie.net/star-wars-canon-extended/images/4/43/Darth_Revan3.jpg/revision/latest?cb=20161220100911'
  angularCourse: boolean = true;
  inputValue: string = '';
  savedValue: string = '';
  isMouseOver: boolean = false;
<<<<<<< HEAD
=======

  courseName: string = 'Angular';

  initialValue: number = 15;
>>>>>>> 08a94bfecc2831182bac6d7416fbb88704b99b8b


  getValue() {
    return 4;
  }

  getLikeCourse() {
    return true;
  }

  clickedButton() {
    alert('Oh! It seems like you clicked the button. Sorry to tell you this... but nothing is gonna happen. But thank you!');
  }

  onKeyUp(event: KeyboardEvent) {
    this.inputValue = (<HTMLInputElement>event.target).value

  }

  saveValue(value) {
    this.savedValue = value;
  }

<<<<<<< HEAD
  mouseOverOut() {
    this.isMouseOver = !this.isMouseOver;
  }

=======
  onMouseOverOut () {
    this.isMouseOver = !this.isMouseOver;
  }

  onValueChanged (event) {
    console.log(event.newValue);
  }

>>>>>>> 08a94bfecc2831182bac6d7416fbb88704b99b8b
  constructor() {
  }

  ngOnInit(): void {
  }

}

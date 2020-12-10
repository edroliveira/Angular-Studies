import { Component, OnInit, Input, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-output-property',
  templateUrl: './output-property.component.html',
  styleUrls: ['./output-property.component.scss']
})
export class OutputPropertyComponent implements OnInit {

  @Input()
  value: number = 0;

  @Output()
  valueChanged = new EventEmitter();

  @ViewChild('inputField')
  inputFieldValue: ElementRef;

  constructor() { }

  incrementValue() {
    // equal to: this.value = this.value + 1;
    this.inputFieldValue.nativeElement.value++
    this.valueChanged.emit({newValue: this.value});
  }
  
  decrementValue() {
    // equal to: this.value = this.value - 1;
    this.inputFieldValue.nativeElement.value--
    this.valueChanged.emit({newValue: this.value});
  }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.css']
})
export class DatePickerComponent implements OnInit {
  minDate = new Date();
  maxDate = new Date(2020, 4, 5);

  constructor() { }

  ngOnInit(): void {
  }

  dateFilter = date => {
    const day = date.get.Day();
    return day !== 0 && day !== 6;
  }
}

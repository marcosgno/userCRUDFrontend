import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-errors-messages',
  templateUrl: './errors-messages.component.html',
  styleUrls: ['./errors-messages.component.css']
})
export class ErrorsMessagesComponent implements OnInit {

  @Input()
  errors: string[] = [];

  @Input()
  show = false;

  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-success-messages',
  templateUrl: './success-messages.component.html',
  styleUrls: ['./success-messages.component.css']
})
export class SuccessMessagesComponent implements OnInit {

  @Input()
  messages: string[] = [];

  @Input()
  show = false;

  constructor() { }

  ngOnInit(): void {
  }

}

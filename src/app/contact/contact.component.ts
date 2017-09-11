import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  public firstName: string;
  public lastName: string;
  public subject: string;
  public message: string;
  public email?: string;
  public phoneNumber?: string;
  submitted = false;



  onsubmit() {
    this.submitted = true;
    console.log('Form has been submitted');
  }

  constructor() { }

  ngOnInit() {
  }

  // get diagnostic() { return JSON.stringify(this); } // <-- for testing purposes

}

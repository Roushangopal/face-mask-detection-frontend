import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-face-recognition',
  templateUrl: './face-recognition.component.html',
  styleUrls: ['./face-recognition.component.css']
})
export class FaceRecognitionComponent implements OnInit {

  constructor() { }
  public usn = ["1vk17cs047", "1vk17cs061", "1vk17cs032"];
  public name = ['Roushan Raja', 'Sudhanva Pangari', 'Mizan Farooqui'];
  public email = ['roushanraja0@gmail.com', 'sujaypangari1998@gmail.com', 'mizanfarooqui@gmail.com'];
  public phone = ['9060289830', '7348975710', '464486866898'];
  ngOnInit(): void {
  }
}

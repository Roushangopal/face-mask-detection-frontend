import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WithoutMaskService } from '../without-mask.service';
import { peopleWithoutMask } from '../peopleWithoutMask';

@Component({
  selector: 'app-face-recognition',
  templateUrl: './face-recognition.component.html',
  styleUrls: ['./face-recognition.component.css']
})
export class FaceRecognitionComponent implements OnInit {

  constructor(private withoutMask: WithoutMaskService, private route: ActivatedRoute) { }


  public usn: string[] = [];
  public name: string[] = [];
  public email: string[] = [];
  public phone: string[] = [];
  public time: string[] = [];

  public people: peopleWithoutMask[] = []


  ngOnInit(): void {
    this.people = this.route.snapshot.data.faceRecognition;
    // console.log(this.people)
    this.people.forEach(element => {
      this.usn.push(element.id)
      this.name.push(element.name)
      this.email.push(element.email)
      this.phone.push(element.mob)
      this.time.push(element.time)
    });
  }

  sendMail(){
    this.withoutMask.generateEmail(this.email)
  }
}

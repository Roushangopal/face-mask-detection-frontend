import { Component, OnInit } from '@angular/core';
import { WithoutMaskService } from '../without-mask.service';

@Component({
  selector: 'mask-detector',
  templateUrl: './mask-detector.component.html',
  styleUrls: ['./mask-detector.component.css']
})
export class MaskDetectorComponent implements OnInit {

  constructor(private maskDetection: WithoutMaskService) { }

  ngOnInit(): void {
  }
  startMaskDetection(){
    this.maskDetection.startMaskDetector();
  }
}

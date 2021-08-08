import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MaskDetectorComponent } from './mask-detector/mask-detector.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { FaceRecognitionComponent } from './face-recognition/face-recognition.component';
import { WithoutMaskResolver } from './without-mask.resolver';

const routes: Routes = [
{path: '', component: MainpageComponent},
{path:'maskDetection', component: MaskDetectorComponent},
{path: 'faceRecognition', component: FaceRecognitionComponent, resolve:{faceRecognition: WithoutMaskResolver}},
{path: '**', component: NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes), CommonModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [MainpageComponent, 
                                  MaskDetectorComponent, 
                                  FaceRecognitionComponent,  
                                  NotfoundComponent]

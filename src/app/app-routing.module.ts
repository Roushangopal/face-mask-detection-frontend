import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MaskDetectorComponent } from './mask-detector/mask-detector.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { FaceRecognitionComponent } from './face-recognition/face-recognition.component';
import { TrainingComponent } from './training/training.component';

const routes: Routes = [
{path: '', component: MainpageComponent},
{path:'maskDetection', component: MaskDetectorComponent},
{path: 'faceRecognition', component: FaceRecognitionComponent},
{path: 'training', component: TrainingComponent},
{path: '**', component: NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [MainpageComponent,
                                  MaskDetectorComponent,
                                  FaceRecognitionComponent,
                                  TrainingComponent,
                                  NotfoundComponent]

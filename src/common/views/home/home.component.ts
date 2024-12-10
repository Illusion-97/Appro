import { Component } from '@angular/core';
import {DetailsComponent} from '../../../produtcs/components/details/details.component';
import {StepperComponent} from '../../components/stepper/stepper.component';
import {StepComponent} from '../../components/stepper/step/step.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    DetailsComponent,
    StepperComponent,
    StepComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}

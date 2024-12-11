import {Component, inject} from '@angular/core';
import {DetailsComponent} from '../../../produtcs/components/details/details.component';
import {map} from 'rxjs';
import {AsyncPipe} from '@angular/common';
import {ActivatedRoute} from '@angular/router';
import {NextStepDirective, StepComponent, StepperComponent} from 'tw-stepper';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    DetailsComponent,
    StepperComponent,
    StepComponent,
    AsyncPipe,
    NextStepDirective
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  products = inject(ActivatedRoute).data.pipe(map(({products}) => products))
}

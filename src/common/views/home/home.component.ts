import {Component, inject} from '@angular/core';
import {DetailsComponent, Product} from '../../../produtcs/components/details/details.component';
import {StepperComponent} from '../../components/stepper/stepper.component';
import {StepComponent} from '../../components/stepper/step/step.component';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs';
import {AsyncPipe} from '@angular/common';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    DetailsComponent,
    StepperComponent,
    StepComponent,
    AsyncPipe
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  products = inject(ActivatedRoute).data.pipe(map(({products}) => products))
}

import {Component, Host, inject, Inject, Input, OnInit} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {StepperComponent} from '../stepper.component';

@Component({
  selector: 'app-step',
  standalone: true,
  imports: [],
  templateUrl: './step.component.html',
  styleUrl: './step.component.css'
})
export class StepComponent {
  index: number = 1
  private readonly currentIndex: BehaviorSubject<number> = inject(StepperComponent).currentIndex

  get left() {
    return (this.index - this.currentIndex.value) * 100
  }
}
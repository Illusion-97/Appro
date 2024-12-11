import {AfterContentInit, Component, ContentChildren, OnInit, QueryList} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {StepComponent} from './step/step.component';

@Component({
  selector: 'app-stepper',
  standalone: true,
  imports: [],
  templateUrl: './stepper.component.html',
  styleUrl: './stepper.component.css'
})
export class StepperComponent implements AfterContentInit {

  currentIndex: BehaviorSubject<number> = new BehaviorSubject<number>(0)

  @ContentChildren(StepComponent)
  steps!: QueryList<StepComponent>

  ngAfterContentInit(): void {
    this.steps.forEach((step, index) => {
      step.index = index
      // Utile uniquement en DEV
      step.changeRef.detectChanges()
    })
  }

}

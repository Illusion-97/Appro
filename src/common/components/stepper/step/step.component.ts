import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-step',
  standalone: true,
  imports: [],
  templateUrl: './step.component.html',
  styleUrl: './step.component.css'
})
export class StepComponent {
  @Input() index: number = 1
  get left() {
    return this.index * 100
  }
}

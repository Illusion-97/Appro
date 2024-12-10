import { Component } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import {AbstractFormComponent} from '../../../tools/abstract-form-component';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-editor',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './editor.component.html',
  styleUrl: './editor.component.css'
})
export class EditorComponent extends AbstractFormComponent{

  form: FormGroup = new FormGroup({
    id: new FormControl(0, {nonNullable: true}),
    src: new FormControl("", {validators: Validators.required}),
    name: new FormControl("", {validators: Validators.required}),
    rating: new FormControl(0, {nonNullable: true}),
    price: new FormControl(0, {validators: Validators.required})
  })

  constructor(private route: ActivatedRoute, private http: HttpClient, private router: Router) {
    super();
    route.data.pipe(takeUntilDestroyed()).subscribe(({product}) => {
      if (product) this.form.patchValue(product)
      else this.form.reset()
    })
  }

  onSubmit$(): void {
  }


}

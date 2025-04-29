import { Component, inject, signal } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input'

@Component({
  selector: 'app-sign-up',
  imports: [FormsModule, ReactiveFormsModule,
    MatFormFieldModule, MatButtonModule, MatInputModule, MatButtonModule, MatIconModule],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.scss'
})
export class SignUpComponent {
  fb = inject(FormBuilder);
  signUpForm!: FormGroup;

  
  hide = signal(true);
  clickEvent(event: MouseEvent) {
    this.hide.set(!this.hide());
    event.stopPropagation();
  }

  constructor() {
    this.signUpForm = this.fb.group({
      username: [''],
      password: ['']
    })
  }
}

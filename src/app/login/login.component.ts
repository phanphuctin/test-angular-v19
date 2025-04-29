import { Component, inject, signal } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input'
import { AuthService } from './auth.service';
import { merge } from 'rxjs';

@Component({
  selector: 'app-login',
  imports: [ FormsModule, ReactiveFormsModule,
    MatFormFieldModule, MatButtonModule, MatInputModule, MatButtonModule, MatIconModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  fb = inject(FormBuilder);
  loginForm!: FormGroup;
  authService: AuthService = inject(AuthService);


  errorMessage = signal('');

  
  hide = signal(true);
  clickEvent(event: MouseEvent) {
    this.hide.set(!this.hide());
    event.stopPropagation();
  }

  constructor() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['']
    })
    merge(this.loginForm.get('email').statusChanges, this.loginForm.get('email').valueChanges)
    .subscribe(() => this.updateErrorMessage());
  }

  updateErrorMessage() {
    if (this.loginForm.get('email').hasError('required')) {
      this.errorMessage.set('You must enter a value');
    } else if (this.loginForm.get('email').hasError('email')) {
      this.errorMessage.set('Not a valid email');
    } else {
      this.errorMessage.set('');
    }
  }

  submit() {
    const rawForm = this.loginForm.getRawValue();
    this.authService.login(rawForm.email, rawForm.password).subscribe({
      next: () => {
        // this.router.navigateByUrl('/protected-content');
        console.log('login ok');
        
      },
      error: (error) => {
        // this.error = true;
        console.error('Email/Password Sign-In error:', error);
      },
    });
  }
}

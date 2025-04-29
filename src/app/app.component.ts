import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputTextModule } from 'primeng/inputtext';
import { LoginComponent } from "./login/login.component";
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ButtonModule, FormsModule, InputTextModule, FloatLabelModule, LoginComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  value: string | undefined;
  title = 'test-ver19';
}

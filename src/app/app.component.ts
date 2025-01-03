import { Component } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import * as CryptoJS from 'crypto-js';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'haczyn-web';

  pass: FormControl = new FormControl('');
  passEntered: boolean = false;

  ngOnInit() {
    this.pass.valueChanges.subscribe((value) => {
      this.passEntered =
        CryptoJS.MD5(value).toString() === '52b0bb82b9da8022c01b47442686cede';
    });
  }
}

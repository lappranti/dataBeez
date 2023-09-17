import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  checkRemember: boolean = false;
  userData = {
    name: '',
    password: '',
    remember: false
  };
  myForm!: NgForm;

  constructor(private router: Router) {}

  ngOnInit() {
    this.myForm = new NgForm([], []);
  }

  handleGotoRegister() {
    this.router.navigate(['register']);
  }

  handleToggleCheckbox() {
    this.checkRemember = !this.checkRemember;
    this.userData.remember = this.checkRemember;
  }

  togglePasswordView() {
    const passwordInput = document.getElementById(
      'password'
    ) as HTMLInputElement;
    const togglePassword = document.getElementById('toggle-password');
    const icon = document.querySelector('#toggle-password .fa-solid');

    if (togglePassword) {
      togglePassword.addEventListener('click', function(e) {
        e.stopImmediatePropagation();
        if (passwordInput) {
          if (passwordInput.type == 'password') {
            passwordInput.type = 'text';
            icon?.classList.add('fa-eye'); // Icône d'œil
            icon?.classList.remove('fa-eye-slash');
          } else {
            passwordInput.type = 'password';
            icon?.classList.add('fa-eye-slash'); // Icône d'œil barré
            icon?.classList.remove('fa-eye');
          }
        }
      });
    }
  }

  onSubmit() {
    if (this.myForm.valid) {
      if (this.userData.name.length < 6) {
        console.log('Le nom doit avoir au moins 6 caractères.');
      } else {
        console.log('Formulaire soumis avec succès', this.userData);
        this.router.navigate(['/courses']);
      }
    } else {
      console.log('Le formulaire contient des erreurs.');
    }
  }
}

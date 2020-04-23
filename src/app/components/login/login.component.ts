import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { StorageService } from 'src/app/services/storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  entityForm: FormGroup;
  loginUsername = 'Admin';
  loginPassword = '12345';
  showError = false;
  // auth = false;
  
  constructor(
    private fb: FormBuilder,
    private storageService: StorageService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.initForm();
    // this.checkStorage();
  }

  initForm() {
    this.entityForm = this.fb.group({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    });
  }

  // checkStorage() {
  //   let storage = this.storageService.getLocalStorage();
  //   if(storage !== undefined && storage !== null) {
  //     this.auth = true;
  //   }
  // }

  login() {
    let username = this.entityForm.get('username').value;
    let password = this.entityForm.get('password').value;

    if(username === this.loginUsername && password === this.loginPassword){

      this.storageService.setLocalStorage();

      this.showError = false;

      this.router.navigate(['/profile']);
    }
    else {
      this.showError = true;
    }
  }

}

import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormGroup, FormControl, Validators, } from '@angular/forms';
import { AuthenticationService } from '../../services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: "cap-log-in-firebase",
  template: `
  <div class="container register-form">
    <div class="form">
      <div class="header">
          <p>Sign in</p>
      </div>
      <div class="form-content">
        <form [formGroup]="loginUserForm" (ngSubmit)="loginUser()">
          <div class="row">
            <div class="col-md-6">
                <div class="form-group" >
                    <input  type="text"
                            class="form-control"
                            placeholder="Email address *"
                            [ngClass]="{
                              'invalidField':(!loginUserForm.get('email').valid
                              && loginUserForm.get('email').touched)
                              || (validatedForm && !loginUserForm.get('email').valid)}"
                            formControlName="email"/>
                </div>
                <div class="form-group">
                    <input  type="password"
                            class="form-control"
                            placeholder="Password *"
                            [ngClass]="{
                              'invalidField':(!loginUserForm.get('password').valid
                              && loginUserForm.get('password').touched)
                              || (validatedForm && !loginUserForm.get('password').valid)}"
                            formControlName="password"/>
                    <small *ngIf="!loginUserForm.get('password').valid && loginUserForm.get('password').touched" class="form-text text-center text-muted">
                      Your password must be 8-20 characters long, contain letters and numbers and the first letter has to be uppercase.
                    </small>

                  <div *ngIf="userNotValid"  class="form-control-feeback text-danger text-center">
                    invalid email or password
                  </div>
                  <div *ngIf="socialMedia"  class="form-control-feeback text-danger text-center">
                    At the moment authentication with Social networks is under development, try by Email
                  </div>
              </div>
            </div>
              <div class="col-md-6">
                <div class="form-group">
                  <button type="submit"class="btnSubmit">Login</button>
                </div>
                <div class="form-group">
                  <button (click)="signInSocialMedia(true)" type="button" class="btnFacebook ">Facebook</button>
                </div>
                <div class="form-group">
                <button (click)="signInSocialMedia(false)" type="button" class="btnGoogle ">Google</button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>

  `,
  styles: [`
  .header
  {
    text-align: center;
    height: 80px;
    background: black;
    color: #fff;
    font-weight: bold;
    line-height: 80px;
  }
  .form-content
  {
    padding: 5%;
    border: 1px solid #ced4da;
    margin-bottom: 2%;
  }
  .form-control{
    border-radius:1.5rem;
  }
  .btnSubmit
  {
    border:none;
    border-radius:1.5rem;
    padding: 1%;
    width: 100%;
    cursor: pointer;
    background: black;
    color: #fff;
  }
  .btnFacebook
  {
    border:none;
    border-radius:1.5rem;
    padding: 1%;
    width: 100%;
    cursor: pointer;
    background: #0000FF;
    color: #fff;
  }
  .btnGoogle
  {
    border:none;
    border-radius:1.5rem;
    padding: 1%;
    width: 100%;
    cursor: pointer;
    background: #FF0000;
    color: #fff;
  }
  button {
    outline: none;
  }
  .invalidField{
    border-color:#dc3545;
  }
  `],
  encapsulation: ViewEncapsulation.Emulated
})
export class AuthLoginComponent implements OnInit{

  loginUserForm: FormGroup;
  userNotValid: boolean;
  socialMedia: boolean;
  validatedForm: boolean;

  constructor(
    private authenticationService: AuthenticationService,
    private router: Router,
  ) {
    this.userNotValid = false;
    this.socialMedia = false;
    this.validatedForm = false;
  }

  ngOnInit() {
    this.loginUserForm = new FormGroup({
      'email': new FormControl('', [Validators.required]),
      'password': new FormControl('', [Validators.required])
    });
  }

  loginUser() {
    if (this.loginUserForm.valid) {
      this.authenticationService.loginUser(this.loginUserForm.value)
        .then((response: any) => {
        response.user.getIdTokenResult().then((res: any) => {
          this.authenticationService.saveCurrentUSer({
            user: response.user.email.split('@', 1)[0],
            email: response.user.email,
            refresh_token: response.user.refreshToken,
            token: res.token
          });
          this.router.navigate(['/']);
        });
        }).catch(error => this.userNotValid = true);
    } else {
      this.validatedForm = true;
    }
  }

  signInSocialMedia(socialMedia: boolean) {
    if (socialMedia) {
      this.authenticationService.authWithFacebook().then((response: any) => {
        response.user.getIdTokenResult().then((res: any) => {
          this.authenticationService.saveCurrentUSer({
            user: response.user.email.split('@', 1)[0],
            email: response.user.email,
            refresh_token: response.user.refreshToken,
            token: res.token
          });
        }).then(() => {
          this.router.navigate(['/']);
        });
      }).catch(error => this.userNotValid = true);
    } else {
      this.authenticationService.authWithGoogle().then((response: any) =>  {
        response.user.getIdTokenResult().then((res: any) => {
          this.authenticationService.saveCurrentUSer({
            user: response.user.email.split('@', 1)[0],
            email: response.user.email,
            refresh_token: response.user.refreshToken,
            token: res.token
          });
        }).then(() => {
          this.router.navigate(['/']);
        });
      }).catch(error => this.userNotValid = true);
    }
  }

}

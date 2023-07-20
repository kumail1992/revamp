import { StorageService } from './../../services/storage.service';
import { finalize, of, switchMap } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { CountryISO } from 'ngx-intl-tel-input';
import { ReCaptchaV3Service } from 'ng-recaptcha';
import { Router } from '@angular/router';
import {
  removeWhiteSpace,
  validateAllFormFields,
} from '../../utilities/helper-functions.component';
import { NotificationService } from '../../services/notification.service';
import { MatDialogRef } from '@angular/material/dialog';
import {
  LoginNumberRequest,
  LoginNumberResponse,
  LoginRequest,
  LoginResponse,
} from '../../models/models';
import { BackendService } from '../../services/backend.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  CountryISO = CountryISO;
  whatsappList: string[] = [
    'https://wa.link/klrclubsignup',
    'https://wa.link/klrclubsignup1',
    'https://wa.link/klrclubsignup2',
    'https://wa.link/singupclub',
  ];
  whatsappLink!: string;
  demoPhonenumber: string = '+919876543213';
  demoPassword: string = 'Test@123';
  demoCode: string = '+91';
  logginUser: boolean = false;
  logginDemoUser: boolean = false;
  currentLang = this.storageService.getLanguage();

  constructor(
    private _formBuilder: FormBuilder,
    private recaptchaV3Service: ReCaptchaV3Service,
    private router: Router,
    private notify: NotificationService,
    private storageService: StorageService,
    public dialogRef: MatDialogRef<LoginComponent>,
    private backendService: BackendService
  ) {
  }

  ngOnInit(): void {
    this.initializeLoginForm();
    this.selectRandomWhatsappNumber();
  }

  initializeLoginForm() {
    this.loginForm = this._formBuilder.group({
      teleNo: [undefined, [Validators.required]],
      password: [undefined, Validators.required],
      terms: [false, Validators.required],
    });
  }

  get f(): { [key: string]: AbstractControl } {
    return this.loginForm.controls;
  }

  selectRandomWhatsappNumber() {
    const randomIndex = Math.floor(Math.random() * this.whatsappList.length);
    this.whatsappLink = this.whatsappList[randomIndex];
  }

  goTowhatsappLink() {
    window.open(this.whatsappLink, '_blank');
  }

  getPayload(userType: string) {
    if (userType === 'user') {
      return {
        contactNumber: removeWhiteSpace(
          this.f['teleNo'].value.internationalNumber
        ),
        countryCode: this.f['teleNo'].value.countryCode,
        fbtoken: this.storageService.getFirebaseToken() ?? '',
      };
    } else {
      return {
        contactNumber: this.demoPhonenumber,
        countryCode: this.demoCode,
        fbtoken: this.storageService.getFirebaseToken() ?? '',
      };
    }
  }

  loginApiCall(payload: any, userType: string) {
    return this.recaptchaV3Service.execute('importantAction').pipe(
      switchMap((token) => {
        var reqBody = new LoginNumberRequest(
          payload.contactNumber,
          token,
          payload.countryCode,
          payload.fbtoken
        );
        return this.backendService.loginNumber(reqBody);
      }),
      switchMap((response: LoginNumberResponse) => {
        if (response && response.statusCode === 1) {
          var reqBody = new LoginRequest(
            userType === 'user'
              ? this.getPayload('user').contactNumber
              : this.demoPhonenumber,
            userType === 'user' ? this.f['password'].value : this.demoPassword
          );
          return this.backendService.login(reqBody);
        } else {
          return of(response);
        }
      })
    );
  }

  onSubmit(type: string) {
    if (type === 'user') {
      if (this.loginForm.valid) {
        this.logginUser = true;
        let payload = this.getPayload('user');
        this.loginApiCall(payload, type)
          .pipe(finalize(() => (this.logginUser = false)))
          .subscribe({
            next: (res: any) => {
              this.responseHandling(res, 'user');
            },
          });
      } else {
        validateAllFormFields(this.loginForm);
      }
    } else {
      this.logginDemoUser = true;
      let payload: any = this.getPayload('demo');
      this.loginApiCall(payload, type)
        .pipe(finalize(() => (this.logginDemoUser = false)))
        .subscribe({
          next: (res: any) => {
            this.responseHandling(res, 'demo')
          },
        });
    }
  }

  responseHandling(res: LoginResponse, userType: string) {
    if (res.accountStatusID && res.accountStatusID > 0) {
      this.storageService.setAuthData(JSON.stringify(res));
      this.storageService.setUserProfile(res);
      this.storageService.setDemoStatus(userType === 'user' ? 'false' : 'true');
      if (res.token) {
        this.storageService.saveToken(res.token);
        this.storageService.saveUserName(res.userTitle ?? '');
      }
      if (res.admin && res.admin == true) {
        if (this.currentLang === 'en') {
          this.notify.showError("Number doesn't belong to client", 'Rejected');
        } else if (this.currentLang === 'hindi') {
          this.notify.showError('नंबर क्लाइंट से संबंधित नहीं है', 'अस्वीकृत');
        }
        return;
      } else {
        this.storageService.setRole('client');
        this.dialogRef.close();
        this.router.navigate(['dashboard']);
      }
    } else {
      if (this.currentLang === 'hindi') {
        this.notify.showError(res?.status || 'अवैध प्रत्यय पत्र', 'अमान्य');
      } else {
        this.notify.showError(res?.status || 'Invalid Credentials', 'Invalid');
      }
    }
  }
}

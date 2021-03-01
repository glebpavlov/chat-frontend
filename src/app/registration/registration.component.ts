import { Component, Injector, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PageBase } from '../common/classes/page-base';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent extends PageBase implements OnInit {

  /**
   * заголовок этой страницы
   */
  title = 'Регистрация';

  /**
   * форма регистрации
   */
  form: FormGroup;

  /**
   * признак отображения пароля
   */
  isShowPassword = false;

  get isDontWantAbout(): boolean {
    return this.form.get('dontWantAbout').value;
  }

  constructor(private fb: FormBuilder, injector: Injector) {
    super(injector);
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      login: [null, [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(25),
      ]],
      password: [null, [Validators.required, Validators.minLength(4)]],
      dontWantAbout: [false]
    });
  }

}

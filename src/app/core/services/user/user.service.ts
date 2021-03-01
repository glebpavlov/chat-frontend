import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ReCaptchaV3Service } from 'ng-recaptcha';
import { switchMap } from 'rxjs/operators';
import { environment } from '../../../../environments/environment';
import { IUserBase, IUserRegistration } from 'chat-common';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl = `${environment.apiUrl}/user/`;

  constructor(
    private http: HttpClient,
    private recaptchaV3Service: ReCaptchaV3Service
  ) {
  }

  /**
   * метод регистрации пользователя
   * есть проверка на ботов с помощью recaptcha V3
   * @param userData данные пользователя
   */
  public registration(userData: IUserRegistration): Observable<IUserBase> {
    // запускаем выполнение recaptcha V3
    return this.recaptchaV3Service.execute('registration')
      // после выполнения заменяем запросом на регистрацию
      .pipe(switchMap((recaptchaToken) => {
        // нужно отправить данные пользователя и токен для валидации recaptcha V3
        const request = {userData, recaptchaToken};
        return this.http.post<IUserBase>(`${this.baseUrl}/registration`, request);
      }));
  }
}

import { Injector } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { environment } from '../../../environments/environment';

export abstract class PageBase {

  /**
   * дополнительный заголовок страницы
   */
  abstract title: string;

  private titleService: Title;

  constructor(injector: Injector) {
    this.titleService = injector.get(Title);
    setTimeout(() => {
      this.titleService.setTitle(environment.title ? `${environment.title} - ${this.title}` : environment.title);
    });
  }
}

import { Injectable, PLATFORM_ID, inject, afterNextRender } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private isDarkModeSubject = new BehaviorSubject<boolean>(false);
  readonly isDarkMode$ = this.isDarkModeSubject.asObservable();
  private isBrowser = isPlatformBrowser(inject(PLATFORM_ID));

  constructor() {
    if (this.isBrowser) {
      afterNextRender(() => {
        const isDark = localStorage.getItem('darkMode') === 'true';
        if (isDark) {
          this.isDarkModeSubject.next(true);
          document.body.classList.add('dark-mode');
        }
      });
    }
  }

  toggleDarkMode(): void {
    const isDark = !this.isDarkModeSubject.value;
    this.isDarkModeSubject.next(isDark);
    document.body.classList.toggle('dark-mode', isDark);

    if (this.isBrowser) {
      localStorage.setItem('darkMode', String(isDark));
    }
  }
}

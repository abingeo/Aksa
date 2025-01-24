import { Component } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  constructor(private router: Router) {}
  title = 'photo_demo';
  navigateToPhotoPopup(): void {
    this.router.navigate(['/photo-popup']); // Navigate to the PhotoPopupComponent route
  }
}

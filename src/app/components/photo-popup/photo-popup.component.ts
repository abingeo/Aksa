import { Component, OnInit } from '@angular/core';
// import { BaseModalComponent } from '../../../shared/components/base-modal/base-modal.component';

@Component({
  selector: 'app-photo-popup',
  templateUrl: './photo-popup.component.html',
  styleUrls: ['./photo-popup.component.sass'], // Fixed styleUrls
})
export class PhotoPopupComponent  {
  imgUrl: string | null = null;
  params: any;
  exit: any;

  constructor() {
    
  }

  ngOnInit(): void {
    // Safely handle params.ImageUrl
    const data = this.params?.ImageUrl;
    if (data) {
      this.imgUrl = data;
      console.log('imgUrl:', this.imgUrl);
    } else {
      console.warn('ImageUrl not found in params!');
    }

    // Lock scrolling on the body
    document.body.style.overflow = 'hidden';
    document.body.style.position = 'fixed';
  }

  onClick(): void {
    // Emit exit event and unlock scrolling
    this.exit.emit();
    document.body.style.overflow = 'unset';
    document.body.style.position = 'unset';
  }
}
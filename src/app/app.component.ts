import { Component, HostListener, OnInit } from '@angular/core';
import { StorageService } from './main/shared/services/storage.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private storageService: StorageService) {}
  ngOnInit(): void {
    // this.storageService.setGameList(index);
    this.onReSize();
  }
  @HostListener('window:resize', ['$event'])
  onReSize() {
    this.detectDeviceType();
  }

  detectDeviceType() {
    if (window.innerWidth <= 767) {
      this.storageService.setDeviceType('mobile');
    } else {
      this.storageService.setDeviceType('desktop');
    }
  }
}

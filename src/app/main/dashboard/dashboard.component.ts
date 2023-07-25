import { Component, inject } from '@angular/core';
import { BackendService } from '../shared/services/backend.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  backend = inject(BackendService)
  ngOnInit(): void {
    this.backend.getBannerSettings().subscribe(console.log)
  }
}

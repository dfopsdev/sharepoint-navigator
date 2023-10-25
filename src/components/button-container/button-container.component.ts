import { Component } from '@angular/core';
import { DataService } from '../../services/data-service.service';

@Component({
  selector: 'app-button-container',
  templateUrl: './button-container.component.html',
  styleUrls: ['./button-container.component.css'],
})
export class ButtonContainerComponent {
  contents: any[] = [];

  constructor(private dataService: DataService) {}

  fetchContents() {
    this.dataService.fetchContents().subscribe((response) => {
      if (Array.isArray(response)) {
        // Check if the response is an array
        console.log('Fetched contents:', response);
        this.contents = response;
      } else {
        console.error('Invalid response. Expected an array.');
      }
    });
  }
  
}

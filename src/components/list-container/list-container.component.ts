import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data-service.service';

@Component({
  selector: 'app-list-container',
  templateUrl: './list-container.component.html',
  styleUrls: ['./list-container.component.css'],
})
export class ListContainerComponent implements OnInit {
  items: any[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.getItems().subscribe((response) => {
      if (Array.isArray(response)) {
        // Check if the response is an array
        console.log('Fetched contents:', response);
        this.items = response;
      } else {
        console.error('Invalid response. Expected an array.');
      }
    });
  }

  toggleFavorite(itemId: string) {
    // Find the index of the item with the given itemId in the 'items' array
    const itemIndex = this.items.findIndex((item) => item.itemId === itemId);
  
    if (itemIndex !== -1) {
      // Toggle the 'isFavorite' property of the item
      this.items[itemIndex].isFavorite = !this.items[itemIndex].isFavorite;
  
      // You can also send a request to update the favorite status on the server if needed
      // For example, using your DataService to update the favorite status on the server
  
      // You can update the UI to reflect the changed favorite status
    }
  }
}

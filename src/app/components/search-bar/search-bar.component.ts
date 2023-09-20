import { Component, EventEmitter, Output } from '@angular/core';
import { SearchService } from 'src/app/search.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent {
  searchText: string = '';
  @Output() searchClicked = new EventEmitter<string>();

  constructor(private searchService: SearchService) { }

  performSearch() {
    if (this.searchText.trim() !== "") {
      this.searchService.setSearchQuery(this.searchText);
      window.location.href = `https://www.google.com/search?q=${encodeURIComponent(this.searchText)}`;
    }
  }
}


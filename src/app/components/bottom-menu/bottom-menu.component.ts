import { Component, ViewChild } from '@angular/core';
import { SearchBarComponent } from '../search-bar/search-bar.component';
import { SearchService } from 'src/app/search.service';

@Component({
  selector: 'app-bottom-menu',
  templateUrl: './bottom-menu.component.html',
  styleUrls: ['./bottom-menu.component.css']
})
export class BottomMenuComponent {
  @ViewChild(SearchBarComponent) searchBarComponent!: SearchBarComponent;

  constructor(private searchService: SearchService) { }

  onSearchButtonClick() {
    const searchText = this.searchBarComponent.searchText;
    this.searchService.setSearchQuery(searchText);

    if (searchText.trim() !== "") {
      window.location.href = `https://www.google.com/search?q=${encodeURIComponent(searchText)}`;
    }
  }
}

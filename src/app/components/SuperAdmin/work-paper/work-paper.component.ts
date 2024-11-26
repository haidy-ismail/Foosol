import { Component } from '@angular/core';

@Component({
  selector: 'app-work-paper',
  templateUrl: './work-paper.component.html',
  styleUrls: ['./work-paper.component.css']
})
export class WorkPaperComponent {

  isMenuVisible: boolean = false; // Initially hidden

  toggleMenu() {
    this.isMenuVisible = !this.isMenuVisible; // Toggle the menu visibility
  }


  cards = Array(9).fill({});

  // Array to track hidden cards
  hiddenCards = Array(9).fill(false);

  // Hide or delete a card by index
  hideCard(cardIndex: number) {
    this.hiddenCards[cardIndex] = true;
  }
  selectAll: boolean = false;
  option1: boolean = false;
  option2: boolean = false;
  option3: boolean = false;

  toggleSelectAll() {
    this.option1 = this.selectAll;
    this.option2 = this.selectAll;
    this.option3 = this.selectAll;
  }

  updateSelectAll() {
    this.selectAll = this.option1 && this.option2 && this.option3;
  }

  isMenuOpen = false;
  toggleMenu2() {
    this.isMenuOpen = !this.isMenuOpen;
  }

}

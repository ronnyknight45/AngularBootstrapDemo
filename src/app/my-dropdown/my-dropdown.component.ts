import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-dropdown',
  templateUrl: './my-dropdown.component.html',
  styleUrls: ['./my-dropdown.component.css']
})
export class MyDropdownComponent implements OnInit {

  dropdownItemsArray: string[] = ["Apple", "Mango", "Peach", "Gourd"];
  selectedItem: string;

  constructor() { }

  ngOnInit() {
  }

  getSelectedItemFromDropdown(item: string) {
    this.selectedItem = item;
  }

}

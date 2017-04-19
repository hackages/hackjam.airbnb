import { Component, OnInit } from '@angular/core';
import  mock from './mocks/estates.mock';
import  Estate  from './types';

@Component({
  selector: 'hb-app',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent {
  toggleNavMenu = false;

  estates = mock;

  roomTypesSelected = {
    'entire_home': false,
    'private_room': false,
    'shared_room': false
  };

  MIN_PRICE = 0;
  MAX_PRICE = 999999999;
  minPriceEntered = this.MIN_PRICE;
  maxPriceEntered = this.MAX_PRICE;

  showNavMenuOnMobile() {
    this.toggleNavMenu = !this.toggleNavMenu;
  }

  onSelectRoomType(type: string, checked: boolean) {}

  getRoomTypesKey() {
    return Object.keys(this.roomTypesSelected);
  }

  filterEstatesByRoomType(estates: Estate[] = mock, roomTypes) {
    return null;
  }

  filterEstatesByPrice(estates: Estate[]) {
    return null;
  }

  filterEstate() {
    this.estates = this.filterEstatesByPrice(
      this.filterEstatesByRoomType(mock, this.roomTypesSelected)
    );
  }

  resetFilters() {}
}

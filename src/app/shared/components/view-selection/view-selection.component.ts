import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ViewTypes } from '../../data';

@Component({
  selector: 'app-view-selection',
  templateUrl: './view-selection.component.html',
  styleUrls: ['./view-selection.component.scss'],
})
export class ViewSelectionComponent implements OnInit {
  @Output() viewChanged: EventEmitter<number> = new EventEmitter();

  viewTypes = ViewTypes;
  selectedIndex = ViewTypes['Year'];

  changeView(index: number) {
    this.selectedIndex = index;
    this.viewChanged.emit(this.selectedIndex);
  }

  constructor() {}

  ngOnInit(): void {}
}

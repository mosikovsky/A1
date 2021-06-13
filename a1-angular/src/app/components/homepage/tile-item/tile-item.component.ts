import { Component, Input, OnInit } from '@angular/core';
import { ITile } from '../../../_interfaces/itile';

@Component({
  selector: 'app-tile-item',
  templateUrl: './tile-item.component.html',
  styleUrls: ['./tile-item.component.scss']
})
export class TileItemComponent implements OnInit {

  @Input() tile: ITile = {};

  constructor() { }

  ngOnInit(): void {
  }

}

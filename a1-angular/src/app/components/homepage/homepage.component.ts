import { Component, OnInit } from '@angular/core';
import { TileService } from '../../_services/tile.service';
import { ITile } from '../../_interfaces/itile';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  tiles: ITile[] | undefined;

  constructor(
    private tileService: TileService
  ) { }

  ngOnInit(): void {
    this.getTiles();
  }

  getTiles(): void {
    this.tileService.getTiles()
      .subscribe(tiles => this.tiles = tiles);
  }

}

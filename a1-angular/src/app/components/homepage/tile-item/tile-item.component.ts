import { Component, Input, OnInit } from '@angular/core';
import { ITile } from '../../../_interfaces/itile';
import { LocalSettingsService } from '../../../_services/local-settings.service';

@Component({
  selector: 'app-tile-item',
  templateUrl: './tile-item.component.html',
  styleUrls: ['./tile-item.component.scss']
})
export class TileItemComponent implements OnInit {

  @Input() tile: ITile = {};
  lang: string;

  constructor(
    private localSettings: LocalSettingsService
  ) { }

  ngOnInit(): void {
    this.lang = this.localSettings.getLanguage();
  }

}

import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ITile } from '../_interfaces/itile';
import { TILES } from '../_mocks/mock-tile';

@Injectable({
  providedIn: 'root'
})
export class TileService {

  constructor() {

  }

  getTiles(): Observable<ITile[]> {
    return of( TILES );
  }
}

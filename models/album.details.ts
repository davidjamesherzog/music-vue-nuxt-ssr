import { Type } from './type';

export class AlbumDetails {
  public resultCount: number;
  public results: Type[];

  constructor() {
    this.resultCount = 0;
    this.results = [];
  }
}

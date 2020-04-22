import { Type } from './type';

export class AlbumList {
  public resultCount: number;
  public results: Type[];

  constructor() {
    this.resultCount = 0;
    this.results = [];
  }
}

import { Type } from './type';

export class Album {
  public details: Type;
  public songs: Type[];

  constructor() {
    this.details = new Type();
    this.songs = [];
  }
}

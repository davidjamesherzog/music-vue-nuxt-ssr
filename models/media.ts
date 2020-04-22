export class Media {
  public canplay: boolean;
  public loadedmetadata: boolean;
  public loadstart: boolean;
  public playing: boolean;
  public duration: string;
  public durationSec: number;
  public time: string;
  public timeSec: number;
  public percentage: number;
  public mediaType: string;

  constructor() {
    this.canplay = false;
    this.loadedmetadata = false;
    this.loadstart = false;
    this.playing = false;
    this.duration = '';
    this.durationSec = 0;
    this.time = '';
    this.timeSec = 0;
    this.percentage = 0;
    this.mediaType = '';
  }
}

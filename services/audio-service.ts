import {Observable, Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';
import moment from 'moment';

export default class AudioService {

  private stop$: Subject<any>;
  private audioObj: HTMLAudioElement;

  constructor() {
    this.stop$ = new Subject();
    this.audioObj = new Audio();
  }

  public playStream(url: string): Observable<any> {
    return this.streamObservable(url).pipe(takeUntil(this.stop$));
  }

  public play(): void {
    this.audioObj.play();
  }

  public pause(): void {
    this.audioObj.pause();
  }

  public stop(): void {
    this.stop$.next();
  }

  public seekTo(seconds: number): void {
    this.audioObj.currentTime = seconds;
  }

  public formatTime(time: string, format: string): string {
    return moment.utc(time).format(format);
  }

  private streamObservable(url: string): Observable<any> {
    const playerEvents: string[] = [
      'ended', 'error', 'play', 'playing', 'pause', 'timeupdate', 'canplay', 'loadedmetadata', 'loadstart'
    ];

    const addEvents = (obj: HTMLAudioElement, events: string[], handler: EventListener) => {
      events.forEach((event: string) => {
        obj.addEventListener(event, handler);
      });
    };

    const removeEvents = (obj: HTMLAudioElement, events: string[], handler: EventListener) => {
      events.forEach((event: string) => {
        obj.removeEventListener(event, handler);
      });
    };

    return Observable.create((observer: any) => {
      // Play audio
      this.audioObj.src = url;
      this.audioObj.load();
      this.audioObj.play();

      // Media Events
      const handler: EventListener = (event: Event) => observer.next(event);
      addEvents(this.audioObj, playerEvents, handler);

      return () => {
        // Stop Playing
        this.audioObj.pause();
        this.audioObj.currentTime = 0;

        // Remove EventListeners
        removeEvents(this.audioObj, playerEvents, handler);
      };
    });
  }

}

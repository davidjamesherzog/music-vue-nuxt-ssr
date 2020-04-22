// import { VuexModule, Module, Mutation } from 'vuex-class-modules';
import { createModule, mutation, action } from 'vuex-class-component';
import { Media } from '../models/media';
import { formatTime } from '../services/utilities';

const VuexModule = createModule({
  namespaced: 'audio',
  strict: false,
  target: 'nuxt'
});

// @Module({ generateMutationSetters: true })
export default class Audio extends VuexModule {
  // state
  public media: Media = new Media();

  // mutations
  @mutation
  public canPlay(value: boolean): void {
    this.media.canplay = value;
  }

  @mutation
  public loadedMetadata(value: number): void {
    this.media.loadedmetadata = true;

    this.media.duration = formatTime(value * 1000, 'HH:mm:ss');
    this.media.durationSec = value;
    this.media.mediaType = 'mp3';
  }

  @mutation
  public playing(value: boolean): void {
    this.media.playing = value;
  }

  @mutation
  public timeUpdate(value: number): void {
    this.media.timeSec = value;
    this.media.time = formatTime(value * 1000, 'HH:mm:ss');
    this.media.percentage = Math.round(
      (this.media.timeSec / this.media.durationSec) * 100
    );
  }

  @mutation
  public loadStart(value: boolean): void {
    this.media.loadstart = value;
  }

  @mutation
  public reset(): void {
    this.media = new Media();
  }
}

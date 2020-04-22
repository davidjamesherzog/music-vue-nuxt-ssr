import Vue from 'vue';
import Vuex from 'vuex';
import { extractVuexModule, createProxy } from 'vuex-class-component';
import Audio from './audio';
import Music from './music';

Vue.use(Vuex);

// const store = new Vuex.Store({});

// eslint-disable-next-line no-new
// new Audio({ store, name: 'audio' });
// eslint-disable-next-line no-new
// new Music({ store, name: 'music' });

const store = new Vuex.Store({
  modules: {
    ...extractVuexModule(Music),
    ...extractVuexModule(Audio)
  }
});

const createStore = () => {
  return store;
};

const vxm = {
  music: createProxy(store, Music),
  audio: createProxy(store, Audio)
};

export default createStore;

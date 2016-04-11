import {OpaqueToken} from 'angular2/core';

export interface Config {
  title: string,
  apiHeroes: string
}

export const CONFIG:Config = {
  title: 'It is an Angular Experiment!',
  apiHeroes: 'http://dboesch.cloudapp.net/rsp/heroes'
};

export let APP_CONFIG = new OpaqueToken('app.config');


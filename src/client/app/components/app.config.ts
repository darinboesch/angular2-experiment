import {OpaqueToken} from 'angular2/core';

export interface Config {
  title: string;
  apiHeroes: string;
  apiSets: string;
  apiProcessor: string;
}

export const CONFIG:Config = {
  title: 'It is an Angular Experiment!',
  apiHeroes: 'http://dboesch.cloudapp.net/rsp/heroes',
  apiSets: 'http://dboesch.cloudapp.net/rsp/sets',
  apiProcessor: 'http://dboesch.cloudapp.net/rsp/processor'
};

export let APP_CONFIG = new OpaqueToken('app.config');


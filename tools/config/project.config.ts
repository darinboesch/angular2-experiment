import {join} from 'path';
import {SeedConfig} from './seed.config';
import {InjectableDependency} from './seed.config.interfaces';

export class ProjectConfig extends SeedConfig {
  PROJECT_TASKS_DIR = join(process.cwd(), this.TOOLS_DIR, 'tasks', 'project');

  FONTS_DEST = `${this.APP_DEST}/assets/fonts`;
  FONTS_SRC = [
    'node_modules/bootstrap/dist/fonts/**'
  ];

  constructor() {
    super();
    this.APP_TITLE = 'Angular 2 Experiment';
    let additional_deps: InjectableDependency[] = [
      { src: 'bootstrap/dist/css/bootstrap.min.css', inject: true },
      { src: 'font-awesome/css/font-awesome.min.css', inject: true }
      // {src: 'jquery/dist/jquery.min.js', inject: 'libs'},
      // {src: 'lodash/lodash.min.js', inject: 'libs'},
    ];

    const seedDependencies = this.NPM_DEPENDENCIES;

    this.NPM_DEPENDENCIES = seedDependencies.concat(additional_deps);
  }
}

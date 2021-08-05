
  import {Router, RouterConfiguration} from 'aurelia-router';
  import {PLATFORM} from 'aurelia-pal';
  
export class App {

  router: Router;
  
  configureRouter(config: RouterConfiguration, router: Router){
    config.title = 'Autos Colombia';
    config.options.pushState = true; //opt
    config.options.root = '/'; //opt https://aurelia.io/docs/tutorials/creating-a-contact-manager#building-the-application-shell
    config.map([
      { route: '',              moduleId: PLATFORM.moduleName('shared/no-selection'),   title: 'Select' },
      { route: 'autos/:id',  moduleId: PLATFORM.moduleName('components/auto-detail'), name: 'autos' },
      { route: 'create',  moduleId: PLATFORM.moduleName('components/auto-create'), name: 'create' }
    ]);

    this.router = router;
  }


}

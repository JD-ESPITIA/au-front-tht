import {inject} from 'aurelia-framework';
import {EventAggregator} from 'aurelia-event-aggregator';
import { Auto } from "interfaces/auto.model";
import { autoApi } from "providers/autoApi.provider";
import { AutoCreated } from 'events/autoEvents';



@inject(EventAggregator, autoApi)
export class AutoCreate{

  newAuto:Auto;
  autoApi: any;

  constructor(private ea : EventAggregator, autoApi){
    this.autoApi = autoApi;
  }

  createAuto(){
    console.log(this.newAuto);
    this.autoApi.addAuto(this.newAuto).then((resp) => {
      console.log(resp);
      this.ea.publish(new AutoCreated(this.newAuto));
      alert(resp.response);
    }).catch((err) => {
      console.error(err);
      this.ea.publish(new AutoCreated(this.newAuto)); //fix
    })
  }

  
}

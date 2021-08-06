import {inject} from 'aurelia-framework';
import {EventAggregator} from 'aurelia-event-aggregator';
import { AutoDeleted, AutoSelected } from 'events/autoEvents';
import { Auto } from 'interfaces/auto.model';
import { autoApi } from 'providers/autoApi.provider';



@inject(EventAggregator, autoApi)
export class AutoDetail {

  selectedAuto:Auto;
  autoApi: any;

  constructor(private ea : EventAggregator, autoApi){
    this.autoApi = autoApi;
    ea.subscribe(AutoSelected, auto => {
      console.log(auto);
      this.selectedAuto = auto.auto;
    });
  }

  saveChanges(){
    console.log(this.selectedAuto);
    this.autoApi.updateAuto(this.selectedAuto).then((resp) => {
      console.log(resp);
    }).catch((err) => {
        console.error(err);
    })
  }

  delete(){
    console.log(this.selectedAuto);
    this.autoApi.deleteAuto(this.selectedAuto).then((resp) => {
      console.log(resp);
      this.ea.publish(new AutoDeleted(this.selectedAuto));
    }).catch((err) => {
        console.error(err);
        this.ea.publish(new AutoDeleted(this.selectedAuto));
    });


  }





}

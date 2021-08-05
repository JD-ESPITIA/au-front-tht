import {EventAggregator} from 'aurelia-event-aggregator';
import {inject} from 'aurelia-framework';
import {AutoCreated, AutoSelected} from 'events/autoEvents';
import {Auto} from 'interfaces/auto.model';
import {autoApi} from "providers/autoApi.provider";

@inject(autoApi, EventAggregator)export class AutoList {
    autoApi : any;
    autos : Auto[] = [];
    selectedId = 0;

    constructor(autoApi, private ea : EventAggregator) {

        this.autoApi = autoApi;
        this.getAllAutos();


        ea.subscribe(AutoCreated, auto => {
            console.log(auto);
            this.getAllAutos();
        });

    }

    getAllAutos() {
        this.autoApi.getAutos().then((autos : Auto[]) => {
            console.log('ok');
            console.log(autos);
            this.autos = autos;
        }).catch((err) => {
            console.error(err);
        })
    }

    selectAuto(auto) {
        this.selectedId = auto.id;
        this.ea.publish(new AutoSelected(auto));
    }

}


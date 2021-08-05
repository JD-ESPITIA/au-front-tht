import {
    bindable, inject, computedFrom
}
from 'aurelia-framework';
import {
    EventAggregator
}
from 'aurelia-event-aggregator';


@inject(EventAggregator) export class Header {
    appTitle: string;

    constructor(eventAggregator) {
        this.appTitle = 'Autos Colombia';

    }

}


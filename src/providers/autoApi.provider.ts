import {HttpClient, json} from 'aurelia-fetch-client';
import {inject} from 'aurelia-framework';
import { Auto } from 'interfaces/auto.model';

@inject(HttpClient)
export class autoApi {
    http : any;

    constructor(http) {
        this.http = http;

        const baseUrl = 'http://localhost:46178/api/';

        http.configure(config => {
            config.withBaseUrl(baseUrl);
        })
    }

    addAuto(auto:Auto) {
        return this.http.fetch('Auto', {
            method: 'post',
            body: json(auto)
        }).then(response => response.json()).then(createdAuto => {
            console.log(createdAuto);
            return createdAuto;
        }).catch(error => {
            console.error(error);
            console.log('Error adding auto.');
        });
    }


    getAutos() {
        return this.http.fetch('Auto').then(response => response.json()).then(autos => {
            console.log(autos);
            return autos;
        }).catch(error => {
            console.log('Error retrieving autos.');
            return [];
        });
    }

    getAuto(auto:Auto){
      return this.http.fetch(`Auto/${
        auto.id
    }`).then(response => response.json()).then(autos => {
        console.log(autos);
        return autos;
    }).catch(error => {
        console.log('Error retrieving auto.');
        return [];
    });
    }

    updateAuto(auto:Auto) {
        return this.http.fetch(`Auto/${
            auto.id
        }`, {
            method: 'put',
            body: json(auto)
        }).then(response => response.json()).then(savedAuto => {
            return savedAuto;
        }).catch(error => {
            console.error(error);
            console.log('Error saving auto.');
        });


    }


    deleteAuto(auto:Auto) {
        return this.http.fetch(`Auto/${
            auto.id
        }`, {method: 'delete'}).then(response => response.json()).then(autoDeleted => {
            return autoDeleted;
        }).catch(error => {
          console.error(error)
            console.log('Error deleting auto.');
        });
    }


}


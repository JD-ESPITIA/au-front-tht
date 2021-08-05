import {HttpClient, json} from 'aurelia-fetch-client';
import {inject} from 'aurelia-framework';

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

    addAuto(auto) {
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
        return this.http.fetch('Auto').then(response => response.json()).then(books => {
            console.log(books);
            return books;
        }).catch(error => {
            console.log('Error retrieving autos.');
            return [];
        });
    }


    updateAuto(auto) {
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


    deleteAuto(auto) {
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


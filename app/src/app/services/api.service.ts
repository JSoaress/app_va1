import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ApiService {

    constructor(private httpClient: HttpClient) { }

    getGameInfos(){
        return this.httpClient.get('http://localhost:3333/api/game/info');
    }

    postGameInfo(gameInfo: any){
        return this.httpClient.post('http://localhost:3333/api/game/info/insert', gameInfo);
    }

}
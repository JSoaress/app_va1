import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ApiService } from '../services/api.service';
 
@Component({
  selector: 'app-games',
  templateUrl: './games.page.html',
  styleUrls: ['./games.page.scss'],
})
export class GamesPage implements OnInit {

  gamesInfos = []

  constructor(private apiService: ApiService, private router: Router) {
    
  }

  ngOnInit() {
    this.loadGameInfos()
  }

  loadGameInfos() {
    this.apiService.getGameInfos().subscribe((result: any) => {  
      this.gamesInfos = result
    })
  }

  newNotice() {
    this.router.navigate(['register-info'])
  }

}

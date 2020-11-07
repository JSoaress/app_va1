import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-register-info',
  templateUrl: './register-info.page.html',
  styleUrls: ['./register-info.page.scss'],
})
export class RegisterInfoPage implements OnInit {

  public gameInfo = {
    'title': '',
    'description': '',
    'urlImage': ''
  }

  constructor(private apiService: ApiService, public alertController: AlertController, private router: Router) { }

  ngOnInit() {

  }

  async submitForm(){    
    if(this.gameInfo.title === '' && this.gameInfo.description === '' && this.gameInfo.urlImage === ''){
      const alert = await this.alertController.create({
        header: 'Aviso',
        message: 'Preencha todos os campos!',
        buttons: ['OK']
      });
      await alert.present();
    }
    else{
      this.apiService.postGameInfo(this.gameInfo).subscribe()
      this.router.navigate(['games'])
    }
  }


}

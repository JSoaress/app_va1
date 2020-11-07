import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  public msg = {
    'name': '',
    'email': '',
    'text': ''
  }

  constructor(public alertController: AlertController) { }

  ngOnInit() {

  }

  async showMsg() {
    if(this.msg.name === '' && this.msg.email === '' && this.msg.text === ''){
      const alert = await this.alertController.create({
        header: 'Aviso',
        message: 'Preencha todos os campos!',
        buttons: ['OK']
      });
      await alert.present();
    }
    else{
      const alert = await this.alertController.create({
        header: 'Bem-vindo!',
        message: `Olá,<br>Nome: ${this.msg.name}<br>E-mail: ${this.msg.email}<br>Mensagem: ${this.msg.text}`,
        buttons: ['OK']
      });
      await alert.present();
    }
  }

}

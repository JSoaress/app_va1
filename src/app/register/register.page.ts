import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  constructor(private toastCtrl: ToastController, private route: Router) { }

  async presentToast() {
    let toast = await this.toastCtrl.create({
      message: 'Cadastro realizado com sucesso!',
      duration: 2000,
      position: 'middle'
    });

    this.route.navigate(['/'])

    toast.present();
  }

  ngOnInit() {
  }

}

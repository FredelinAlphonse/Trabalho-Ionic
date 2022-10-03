import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal1',
  templateUrl: './modal1.page.html',
  styleUrls: ['./modal1.page.scss'],
})
export class Modal1Page implements OnInit {


  public name;

  constructor(private modalController: ModalController) { }


  ngOnInit() {
  }
  public cancel() {
    this.modalController.dismiss(null,'cancel');
  }

  public confirm() {
    console.log(this.name);
    this.modalController.dismiss({name: this.name}, 'confirm');
  }
}

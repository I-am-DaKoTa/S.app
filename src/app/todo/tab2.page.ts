import { Component } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';
import { CtodoPage } from '../ctodo/ctodo.page';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
todoList = []


  today: number = Date.now();

  constructor(public modalCtlr: ModalController) {}

  async addNewItem() {
    const modal = await this.modalCtlr.create({
      component: CtodoPage,
    })
    modal.onDidDismiss().then(newTask =>{
    console.log(newTask.data);
      this.todoList.push(newTask.data)

    })
    return await modal.present()
  }
  delete(index) {
    this.todoList.splice(index,1)
  }
}

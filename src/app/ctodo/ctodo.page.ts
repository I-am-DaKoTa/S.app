import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-ctodo',
  templateUrl: './ctodo.page.html',
  styleUrls: ['./ctodo.page.scss'],
})
export class CtodoPage implements OnInit {
categories =[]
  categorySelectedCategory

  newTaskObj = {}
  itemName
  itemDueDate
  itemPriority
  itemCategory


  constructor(public modalCtlr: ModalController) {

  }

  ngOnInit() {
    this.categories.push('школа')
    this.categories.push('личное')
    this.categories.push('дополнительно')
  }

  add(){
    if (this.itemName==null){
      console.log('lol')
    } else{
this.newTaskObj = ({itemName:this.itemName, itemDueDate:this.itemDueDate, itemPriority:this.itemPriority,itemCategory:this.categorySelectedCategory})
    // console.log(this.newTaskObj);
    this.dismis()
    }


  }

  selectCategory(index){
    this.categorySelectedCategory = this.categories[index]
    console.log(this.categorySelectedCategory);
  }

  async dismis(){
    await this.modalCtlr.dismiss(this.newTaskObj)
  }

}

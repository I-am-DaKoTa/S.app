import { Component, OnInit } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/auth";
import {firebase} from '@firebase/app';
import 'firebase/firestore'
import { AlertController } from "@ionic/angular";
import { Router } from "@angular/router";
import '@firebase/firestore';
@Component({
  selector: 'app-reg',
  templateUrl: './reg.page.html',
  styleUrls: ['./reg.page.scss'],
})
export class RegPage implements OnInit {
  constructor(
    public afAuth: AngularFireAuth,
    public alert: AlertController,
    public router: Router) { }

  ngOnInit() {
  }
}

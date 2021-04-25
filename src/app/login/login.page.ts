import { Component, OnInit } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/auth";
import { AlertController } from "@ionic/angular";
import { Router } from "@angular/router";
import { UserService } from "../user.service";
import * as firebase from "firebase";

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  constructor(public afAuth: AngularFireAuth,
    public alert: AlertController,
    public router: Router,
    public user: UserService) { }

  ngOnInit() {
  }
}

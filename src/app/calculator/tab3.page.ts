import { Component, OnInit } from "@angular/core";
import { ToastController, AlertController } from "@ionic/angular";

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {
  excellent1 = 0;
  excellent2 = 0;
  excellent3 = 0;
  good1 = 0;
  good2 = 0;
  good3 = 0;
  satisfactorily1 = 0;
  satisfactorily2 = 0;
  satisfactorily3 = 0;
  unsatisfactorily1 = 0;
  unsatisfactorily2 = 0;
  unsatisfactorily3 = 0;
  k: number;
  sum: number;
  bsum: number;
  markStr: string;
  markStr2: string;
  mark: number;
  mark2: number;
  mark3: number;
  to5mark: number;
  to4mark5: number;
  excellent11: number;
  excellent22: number;
  null = 0;

  constructor(
    private toastCtrl: ToastController,
    public alertController: AlertController
  ) {}
  async presentInfo() {
    const alert = await this.alertController.create({
      header: "Как это работает?",
      message:
        'Наш "Калькулятор оценок" сможет помочь Вам узнать средний балл и недостающие оценки до желаемой. Вместо нулей укажите количество оценок и нажмите "Подсчитать". Ниже Вы сможете увидеть всю информацию.',

      buttons: ["ОК"],
    });

    await alert.present();
  }

  ngOnInit() {}
  getMark() {
    if (
      this.excellent1 ||
      this.excellent2 ||
      this.excellent3 ||
      this.good1 ||
      this.good2 ||
      this.good3 ||
      this.satisfactorily1 ||
      this.satisfactorily2 ||
      this.satisfactorily3 ||
      this.unsatisfactorily1 ||
      this.unsatisfactorily2 ||
      this.unsatisfactorily3 != 0
    ) {
      this.sum =
        Number(
          50 * this.excellent1 + this.excellent2 * 100 + this.excellent3 * 150
        ) +
        Number(40 * this.good1 + this.good2 * 80 + this.good3 * 120) +
        Number(
          30 * this.satisfactorily1 +
            this.satisfactorily2 * 60 +
            this.satisfactorily3 * 90
        ) +
        Number(
          20 * this.unsatisfactorily1 +
            this.unsatisfactorily2 * 40 +
            this.unsatisfactorily3 * 60
        );
      this.bsum =
        Number(
          10 * this.excellent1 + this.excellent2 * 20 + this.excellent3 * 30
        ) +
        Number(10 * this.good1 + this.good2 * 20 + this.good3 * 30) +
        Number(
          10 * this.satisfactorily1 +
            this.satisfactorily2 * 20 +
            this.satisfactorily3 * 30
        ) +
        Number(
          10 * this.unsatisfactorily1 +
            this.unsatisfactorily2 * 20 +
            this.unsatisfactorily3 * 30
        );
      console.log(this.sum);
      console.log(this.bsum);
      this.mark = Number(this.sum / this.bsum);
      this.mark = Number(this.mark.toFixed(2));
      this.to5mark = Number(this.mark);
      this.to4mark5 = Number(this.mark);
      console.log(this.mark);
      console.log(this.to5mark);
      if (this.to5mark < 4.5) {
        this.excellent11 = 0;
        while (this.to5mark < 4.5) {
          this.sum = Number(this.sum + 50 * this.excellent11);
          this.bsum = Number(this.bsum + 10 * this.excellent11);
          this.to5mark = Number(this.sum / this.bsum);
          this.excellent11 = Number(this.excellent11 + 1);
        }
        console.log(this.to5mark);
        this.markStr = "";
      } else {
        this.markStr = "У тебя выходит 5";
        this.excellent11 = null;
      }
      if (this.to4mark5 < 3.5) {
        this.excellent22 = 0;
        while (this.to4mark5 < 3.5) {
          this.sum = Number(this.sum + 50 * this.excellent22);
          this.bsum = Number(this.bsum + 10 * this.excellent22);
          this.to4mark5 = Number(this.sum / this.bsum);
          this.excellent22 = Number(this.excellent22 + 1);
        }
        this.markStr2 = "";
        console.log(this.excellent22);
      } else {
        if (this.to4mark5 < 4.5) {
          this.markStr2 = "У тебя выходит 4";
          this.excellent22 = null;
        } else {
          this.markStr2 = "У тебя выходит 5";
          this.excellent22 = null;
        }
      }
    }
  }
}

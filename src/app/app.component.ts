import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  oll =[]
  
  groupA: any[] = [];
  groupA1: any[] = [];
  groupA2: any[] = [];
  groupA3: any[] = [];
  groupA4: any[] = [];
  groupA5: any[] = [];
  groupA6: any[] = [];
  groupA7: any[] = [];
  groupA8: any[] = [];
  groupA9: any[] = [];
  groupA10: any[] = [];
  quarterA12: any[] = [];
  quarterA13: any[] = [];

  groupB: any[] = [];
  groupB1: any[] = [];
  groupB2: any[] = [];
  groupB3: any[] = [];
  groupB4: any[] = [];
  groupB5: any[] = [];
  groupB6: any[] = [];
  groupB7: any[] = [];
  groupB8: any[] = [];
  groupB9: any[] = [];
  groupB10: any[] = [];
  quarterB12: any[] = [];
  quarterB13: any[] = [];
  semiFinalA: any[] = [];
  semiFinalB: any[] = [];
  champion:any[]=[]

  constructor(private http:HttpClient){}
  ngOnInit(): void {
    console.log('asdf') 
    this.http.get('/assets/times/time.json').
    subscribe({
      next:(res:any)=>{
        this.oll = res.data;
      }
    })
  }

  play() {

    if (this.oll.length === 16 && this.groupA3.length !== 4) {
      this.groupB = this.randomGroup(this.oll, this.groupA);
      this.groupA1 = this.randomGroup(this.oll, this.groupA3);
      this.groupA2 = this.randomGroup(this.oll, this.groupA4);
      this.groupA5 = this.randomGroup(this.groupA1, this.groupA6);
      this.groupB1 = this.randomGroup(this.groupB, this.groupB2);
      this.groupB3 = this.randomGroup(this.groupB, this.groupB4);
      this.groupB5 = this.randomGroup(this.groupB1, this.groupB6);
    } else if (this.groupA3.length === 4) {
      this.groupA7 = this.randomGroup(this.groupA2);
      this.groupA2.push(this.groupA7[0])
      this.groupA8 = this.randomGroup(this.groupA4);
      this.groupA4.push(this.groupA8[0]);
      this.groupA9 = this.randomGroup(this.groupA5);
      this.groupA5.push(this.groupA9[0]);
      this.groupA10 = this.randomGroup(this.groupA6);
      this.groupA6.push(this.groupA10[0]);
      this.groupB9 = this.randomGroup(this.groupB3);
      this.groupB3.push(this.groupB9[0]);
      this.groupB10 = this.randomGroup(this.groupB4);
      this.groupB4.push(this.groupB10[0]);
      this.groupB7 = this.randomGroup(this.groupB5);
      this.groupB5.push(this.groupB7[0]);
      this.groupB8 = this.randomGroup(this.groupB6);
      this.groupB6.push(this.groupB8[0]);

      this.quarterA12.push(this.groupA7[0], this.groupA8[0]);
      this.quarterA12 = this.randomGroup(this.quarterA12);
      this.quarterA13.push(this.groupA10[0], this.groupA9[0]);
      this.quarterA13 = this.randomGroup(this.quarterA13);

      this.quarterB12.push(this.groupB7[0], this.groupB8[0]);
      this.quarterB12 = this.randomGroup(this.quarterB12);

      this.quarterB13.push(this.groupB9[0], this.groupB10[0]);
      this.quarterB13 = this.randomGroup(this.quarterB13);

      this.semiFinalA.push(this.quarterA13[0], this.quarterA12[0]);
      this.semiFinalA = this.randomGroup(this.semiFinalA);

      this.semiFinalB.push(this.quarterB13[0], this.quarterB12[0]);
      this.semiFinalB = this.randomGroup(this.semiFinalB);

      this.champion.push(this.semiFinalB[0], this.semiFinalA[0]);
      this.champion = this.randomGroup(this.champion);

    }



  }

  randomGroup(oll: any[], groupB: any[] = []): any {
    let groupA = [];
    let clone = oll;
    let size = oll.length
    for (let i = 0; i < size; i++) {
      let random = Math.floor(Math.random() * oll.length);
      if (groupA.length < size / 2) {
        if (groupA[i] !== clone[random]) {
          groupA.push(clone[random]);
          clone.splice(random, 1);
        }
      }
    }

    for (let k = 0; k < oll.length; k++) {
      if (oll[k]?.team_id !== groupA[k]?.team_id) {
        groupB.push(oll[k])
      }

    }

    return groupA;
  }

}

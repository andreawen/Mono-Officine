import { Component, OnInit } from '@angular/core';
import { Noleggio } from './noleggio.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-qr-code',
  templateUrl: './qr-code.component.html',
  styleUrls: ['./qr-code.component.css']
})
export class QrCodeComponent implements OnInit {
  inizio: boolean = true;
  fine: boolean = false;
  data: Object;
  o: Observable<Object>;
  nole: Observable<Noleggio[]>;
  noleGio: Array<Noleggio> = new Array();

  a:any;

  constructor(public http: HttpClient) {

  }
  ngOnInit() {
  }

  inizioNoleggio(): void {
     this.inizio = false;
     this.fine = true;
     var fecha = new Date();
     console.log("Inizio noleggio: ", fecha.toLocaleString());
     var x= fecha.toLocaleString().split(",");
     var date=x[0];
     var time=x[1];
     //console.log("Data " + x[0])
     //console.log("Ora " + x[1])
     let dati: Noleggio = new Noleggio();
     dati.dataInizio = date;
     dati.oraInizio = time;
     console.log(dati);
     this.noleGio.push(dati);
     console.log(this.noleGio);
  }


  fineNoleggio(): void {
     this.fine = false;
     this.inizio = true;
     var fecha = new Date();
     console.log("Fine noleggio: ", fecha.toLocaleString());
     var y= fecha.toLocaleString().split(",");
     var date2=y[0];
     var time2=y[1];
     let dati: Noleggio = new Noleggio();
     dati.dataFine = date2;
     dati.oraFine = time2;
     console.log(dati);
     this.noleGio.push(dati);
     console.log(this.noleGio);
     this.Noleggio(dati);
     }

   Noleggio(dati: Noleggio): void {

     this.a = dati;

     console.log(this.a['dataFine']);

     this.http.post('https://3000-d0e6a422-af39-482f-85ec-554b1e6334c0.ws-eu0.gitpod.io/noleggio', {dataIn:dati.dataInizio, oraIn:dati.oraInizio, dataFi:dati.dataFine, oraFi:dati.oraFine})
      .subscribe(data => {
        this.data = data;
        console.log(this.data);
      });
   }
}

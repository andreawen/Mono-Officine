import { Component, OnInit } from '@angular/core';
import { Login } from './login.model';
import { Registrazione } from './registrazione.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Mono-Rent';
  data: Object;
  o: Observable<Object>;
  obs: Observable<Login[]>;
  wen: Array<Login> = new Array();
  wen2: Array<Registrazione> = new Array();
  visible: boolean = true;
  invisible: boolean = false;
  mappa: boolean = false;
  img: boolean = false;
  qr: boolean = false;
  a: boolean = true;
  b: boolean = false;
  err: String = "";
  ok: String = "";
  constructor(public http: HttpClient) { }

  ngOnInit() {
  }

  onClick(username: string, password: string): boolean {

    let dati: Login = new Login();
    dati.username = username;
    dati.password = password;
    console.log(this.wen.length);
    console.log(dati);
    this.wen.push(dati);
    this.Accedi(dati);
    return false;
  }

  onClick2(username2: string, password2: string): boolean {

    let dati2: Registrazione = new Registrazione();
    dati2.username2 = username2;
    dati2.password2 = password2;
    console.log(this.wen2.length);
    console.log(dati2);
    this.wen2.push(dati2);
    this.Registrati(dati2);
    return false;
  }

  private toggleDiv(): void { this.visible = false; this.invisible = true; this.img = true;}
  private map(): void { this.mappa = true;this.qr = false; this.img = false; }
  private qrcode(): void { this.qr = true; this.mappa = false; this.img = false; }
  private onVedi(): void { this.a = false; this.b = true; }
  private onVedi2(): void { this.a = true; this.b = false; }
  private reload():void { window.location.reload();}

  Accedi(dati: Login): void {
    this.http.get<Object>('http://node10.codenvy.io:46997/login/' + dati.username + '/' + dati.password)
      .subscribe(data => {

        var a: any;
        a = data;
        console.log(a.result);

        this.data = data;
        if (a.result != "Errore") {
          this.toggleDiv();
        }else{
          this.err ="Username o password errati"
        }
        console.log(this.data);
      });
  }

  Registrati(dati2: Registrazione): void {
    this.http.post('http://node10.codenvy.io:46997/registrazione', { login: dati2.username2, pass: dati2.password2 })
      .subscribe(data => {
        this.data = data;
        console.log(this.data);
        this.ok = "Ora effettua l'accesso con il tuo Account";
      });
  }

}

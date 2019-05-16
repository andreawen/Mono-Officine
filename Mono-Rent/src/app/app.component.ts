import { Component,OnInit } from '@angular/core';
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
  constructor(public http: HttpClient) { }

  ngOnInit() {
  }

  onClick(username: string, password: string) : boolean
  {

    let dati: Login = new Login();
    dati.username = username;
    dati.password = password;
    console.log(this.wen.length);
    console.log(dati);
    this.wen.push(dati);
    this.Accedi(dati);
    return false;
    this.toggleDiv();
  }

  onClick2(username2: string, password2: string) : boolean
  {

    let dati2: Registrazione = new Registrazione();
    dati2.username2 = username2;
    dati2.password2 = password2;
    console.log(this.wen2.length);
    console.log(dati2);
    this.wen2.push(dati2);
    this.Registrati(dati2);
    return false;
    this.toggleDiv();
  }
  visible = true;
  toggleDiv(){this.visible=false;}

     Accedi(dati:Login): void {
   this.http.get('http://node16.codenvy.io:41026/login/'+dati.username+'/'+dati.password)
     .subscribe(data => {
       this.data = data;
       console.log(this.data);
     });
 }

     Registrati(dati2:Registrazione): void {
   this.http.get('http://node16.codenvy.io:41026/registrazione'+dati2.username2+'/'+dati2.password2)
     .subscribe(data => {
       this.data = data;
       console.log(this.data);
     });
 }

}

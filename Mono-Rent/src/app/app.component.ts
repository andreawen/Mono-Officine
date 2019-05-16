import { Component,OnInit } from '@angular/core';
import { Login } from './login.model';
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

  onClick2(username: string, password: string) : boolean
  {

    let dati: Login = new Login();
    dati.username = username;
    dati.password = password;
    console.log(this.wen.length);
    console.log(dati);
    this.wen.push(dati);
    this.Registrati(dati);
    return false;
    this.toggleDiv();
  }
  visible = true;
  toggleDiv(){this.visible=false;}

     Accedi(dati:Login): void {
   this.http.get('http://node17.codenvy.io:35335/login/'+dati.username+'/'+dati.password)
     .subscribe(data => {
       this.data = data;
       console.log(this.data);
     });
 }

     Registrati(dati:Login): void {
   this.http.post('http://node17.codenvy.io:35335/registrazione',{login:dati.username,pass:dati.password})
     .subscribe(data => {
       this.data = data;
       console.log(this.data);
     });
 }

}

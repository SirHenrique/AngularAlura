import { Component } from '@angular/core';
import { ServicosService } from './services/servicos.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-dream-app';
  

  constructor(private service: ServicosService){

  }
  transferir($event){
    this.service.adicionar($event);

  }
}

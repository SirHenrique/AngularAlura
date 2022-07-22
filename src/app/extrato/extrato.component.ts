import { ServicosService } from './../services/servicos.service';
import { Component, Input, OnInit } from '@angular/core';
import { Transferencia } from '../services/transferencia.module';

@Component({
  selector: 'app-extrato',
  templateUrl: './extrato.component.html',
  styleUrls: ['./extrato.component.scss']
})
export class ExtratoComponent implements OnInit {
  transferencias: any[];

  constructor(private service: ServicosService) {}

  ngOnInit(){
    this.service.todas().subscribe((transferencias: Transferencia[]) => {
      console.table(transferencias);
      this.transferencias = transferencias;
    });
  }

}

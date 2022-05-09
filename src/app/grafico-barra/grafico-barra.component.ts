import { Component, OnInit } from '@angular/core';
import { Phone } from '../interface/mobile.interface';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-grafico-barra',
  templateUrl: './grafico-barra.component.html',
  styleUrls: ['./grafico-barra.component.css']
})

export class GraficoBarraComponent implements OnInit {

  constructor(private dataService: ApiService) {}

  nombresMoviles: string[] = new Array();
  hitsMoviles: number[] = new Array();

  data: any;

  ngOnInit() {
    return this.dataService.topByInterest()
    .subscribe( (moviles) => {

      obtenerNombresMoviles(moviles, this.nombresMoviles, this.hitsMoviles);

      this.data = {
        labels: this.nombresMoviles,
        datasets: [
          {
            label: 'Phones Hits',
            backgroundColor: 'green',
            data: this.hitsMoviles
          }
        ]
      };
    })
  }
}

function obtenerNombresMoviles(moviles: Phone[], nombresMoviles: string[], hitsMoviles: number[]) {
  moviles.forEach(movil => {
    nombresMoviles.push(movil.phone_name);
    hitsMoviles.push(movil.hits);
  });
}
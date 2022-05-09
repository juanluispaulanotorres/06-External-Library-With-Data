import { Component, OnInit } from '@angular/core';
import { Phone } from '../interface/mobile.interface';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-grafico-lineal',
  templateUrl: './grafico-lineal.component.html',
  styleUrls: ['./grafico-lineal.component.css']
})

export class GraficoLinealComponent implements OnInit {

  constructor(private dataService: ApiService) {}

  nombresMoviles: string[] = new Array();
  favoritos: number[] = new Array();

  data: any;

  ngOnInit() {
    return this.dataService.topByFans()
    .subscribe( (moviles) => {

      obtenerNombresMoviles(moviles, this.nombresMoviles, this.favoritos);

      this.data = {
        labels: this.nombresMoviles,
        datasets: [
          {
            label: 'Top by Fans',
            data: this.favoritos,
            fill: false,
            borderColor: 'green'
          }
        ]
      };
    })
  }
}

function obtenerNombresMoviles(moviles: Phone[], nombresMoviles: string[], favoritosMoviles: number[]) {
  moviles.forEach(movil => {
    nombresMoviles.push(movil.phone_name);
    favoritosMoviles.push(movil.favorites);
  });
}

import { Component, OnInit } from '@angular/core';

import { ChartType } from 'chart.js';
import { MultiDataSet, Label } from 'ng2-charts';

@Component({
  selector: 'app-char',
  templateUrl: './char.component.html',
  styles: [
  ]
})
export class CharComponent implements OnInit {

  // Doughnut
  public doughnutChartLabels: Label[] = ['Contagiados', 'Sospechosos', 'Muertes'];
  public doughnutChartData: MultiDataSet = [
    [350, 450, 100]
  ];
  public doughnutChartType: ChartType = 'doughnut';

  constructor() { }

  ngOnInit(): void {

    
  }

}

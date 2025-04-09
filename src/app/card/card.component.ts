import { Component } from '@angular/core';

interface Iplano {
  infos: IInfos;
}

interface IInfos {
  tipo: string;
  valor: number;
}

@Component({
  selector: 'app-card',
  standalone: false,
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent {
  plano: Iplano = {
    infos: {
      tipo: 'Simples',
      valor: 200,
    },
  };
}

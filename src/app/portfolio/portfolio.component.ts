import { Component } from '@angular/core';

@Component({
  selector: 'portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'],
})
export class PortfolioComponent {
  constructor() {}

  public images = [
    {
      imgUrl: 'https://www.4devs.com.br/4devs_gerador_imagem.php?acao=gerar_imagem&txt_largura=320&txt_altura=240&extensao=png&fundo_r=0.8470588235294118&fundo_g=0.8470588235294118&fundo_b=0.8470588235294118&texto_r=0&texto_g=0&texto_b=0&texto=IMAGEM%20AQUI&tamanho_fonte=10',
    },
    {
      imgUrl: 'https://www.4devs.com.br/4devs_gerador_imagem.php?acao=gerar_imagem&txt_largura=320&txt_altura=240&extensao=png&fundo_r=0.8470588235294118&fundo_g=0.8470588235294118&fundo_b=0.8470588235294118&texto_r=0&texto_g=0&texto_b=0&texto=IMAGEM%20AQUI&tamanho_fonte=10',
    },
    {
      imgUrl: 'https://www.4devs.com.br/4devs_gerador_imagem.php?acao=gerar_imagem&txt_largura=320&txt_altura=240&extensao=png&fundo_r=0.8470588235294118&fundo_g=0.8470588235294118&fundo_b=0.8470588235294118&texto_r=0&texto_g=0&texto_b=0&texto=IMAGEM%20AQUI&tamanho_fonte=10',
    },

  ];
}

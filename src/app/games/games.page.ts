import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-games',
  templateUrl: './games.page.html',
  styleUrls: ['./games.page.scss'],
})
export class GamesPage implements OnInit {

  public games = [
    {
      'title': 'Novo jogo do momento entre criadores de conteúdo.',
      'subtitle': 'Amoung Us',
      'description': 'Game lançado no ano de 2018 ganha destaque entre os stremers em 2020.',
      'img': 'https://s2.glbimg.com/0vKYNZeNUUAG2ft6QIMNLmaIDds=/0x0:695x390/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2020/A/M/el2eJ8T3mFI3ljp01dkw/among-us-tudo-sobre-android-iphone-ios.jpg'
    },
    {
      'title': 'INTZ no mundial.',
      'subtitle': 'League of Legends',
      'description': 'Equipe brasileira abrirá o mundial de LoL contra a européia MAD Lions dia 25/09 as 5h da manhã.',
      'img': 'https://egamersworld.com/uploads/news/1600771855848-1.jpg'
    },
    {
      'title': 'God of War no PS5.',
      'subtitle': 'God of War',
      'description': 'Novo game da franquia God of War anunciado para o Playstation 5.',
      'img': 'https://jovemgamer.com.br/wp-content/uploads/2020/09/god-of-war-ragnarok.jpg'
    },
    {
      'title': 'PS5 no Brasil.',
      'subtitle': 'Playstation 5',
      'description': 'PS5 no Brasil custará R$ 4.999,00.',
      'img': 'https://s2.glbimg.com/bhl6hykNcUV3uVQXi5xOgPcctl0=/0x0:3600x2400/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2020/L/W/GO8WsPQ6C090NUUUD2GA/ps5.jpg'
    },
    {
      'title': 'Preço de lançamento do Xbox Series X revelado.',
      'subtitle': 'Xbox Series X',
      'description': 'O console da nova geração da Microsoft terá um preço de lançamento de 4.899,00.',
      'img': 'https://s2.glbimg.com/b2YW3rWsCUOzCcx4FVjiiV4maW4=/0x0:1920x1080/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2020/M/n/0VMYGXSruTpHzpxswNFA/xbox.jpg'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}

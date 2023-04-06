import { createStore } from 'vuex'

import axios from "axios";

export default createStore({
  state: {
    companySocialNetworks: [
      {
        id:1,
        name: "Instagram",
        link: "#",
      },
      {
        id:2,
        name: "Facebook",
        link: "#",
      },
      {
        id:3,
        name: "YouTube",
        link: "#",
      },
    ],
    companyMenuPage: [
      {
        id: 1,
        name: 'Сервисы',
        link: '#',
      },
      {
        id: 2,
        name: 'Прaвила',
        link: '#',
      },
      {
        id: 3,
        name: 'Контакты',
        link: '#',
      },
      {
        id: 4,
        name: 'Партнеры',
        link: '#',
      },
      {
        id: 5,
        name: 'О нас',
        link: '#',
      },
    ],
    companyMenuAdress: [
      {
        id: 1,
        name: "77-2, улица Абдулла Кадыри Ташкент, Узбекистан",
        link: "https://goo.gl/maps/dCC12x9mWWMz9wHK8",
      }
    ],
    companyPhones:[
      {
        id:1,
        name: "+998 90 932 10 50",
        link: "tel:998909321050"
      }
    ],
    logined: true
  },
  getters: {
    getFooterList(state):{title:string, items: any}[]{
      return [
        {
          title: "Socials",
          items: state.companySocialNetworks,
        },
        {
          title: "Menu",
          items: state.companyMenuPage
        },
        {
          title: "Address",
          items: state.companyMenuAdress
        },
        {
          title: "Say Hi!",
          items: state.companyPhones
        },
      ]
    },
    getAuth(state){
      return state.logined
    }
  },
  mutations: {
  },
  actions: {
    async parseFromSite({commit}, url:string):Promise<void>{
      try {
        console.log(url);

        const response = await fetch(url);
        const html = await response.text();
        console.log(response);

        const parser = new DOMParser();
        const doc = parser.parseFromString(html, 'text/html');
        console.log(doc);
      } catch (error) {
        console.error(error);
      }
    }
  },
  modules: {
  }
})

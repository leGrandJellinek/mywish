import { createStore } from 'vuex'

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
        name: 'Services',
        link: '#',
      },
      {
        id: 2,
        name: 'Projects',
        link: '#',
      },
      {
        id: 3,
        name: 'Contacts',
        link: '#',
      },
      {
        id: 4,
        name: 'Partners',
        link: '#',
      },
      {
        id: 5,
        name: 'About',
        link: '#',
      },
    ],
    companyMenuAdress: [
      {
        id: 1,
        name: "88-42, Osiye street Tashkent, Uzbekistan",
      }
    ],
    companyPhones:[
      {
        id:1,
        name: "+998 90 932 10 50",
        link: "tel:998909321050"
      }
    ]
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
    }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})

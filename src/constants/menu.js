const data = [
  {
    id: "gogo",
    icon: "iconsminds-newspaper",
    label: "Destaques",
    to: "/app/intranet/home",
    // subs: [
    //   {
    //     icon: "simple-icon-paper-plane",
    //     label: "menu.start",
    //     to: "/app/intranet/start"
    //   }     
    // ]
  },
  {
    id: "secondmenu",
    icon: "iconsminds-business-man",
    label: "Setores",
    to: "/app/second-menu",
    subs: [
      {
        icon: "simple-icon-paper-plane",
        label: "menu.second",
        to: "/app/second-menu/second"
      }
    ]
  },
  {
    id: "blankpage",
    icon: "iconsminds-suitcase",
    label: "Serviços",
    to: "/app/blank-page"
  },
  {
    id: "blankpage",
    icon: "iconsminds-calendar-4",
    label: "Aniversariantes",
    to: "/"
  }
];
export default data;

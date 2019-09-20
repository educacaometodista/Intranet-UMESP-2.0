const data = [
  {
    id: "gogo",
    icon: "iconsminds-air-balloon-1",
    label: "Destaques",
    to: "/app/intranet",
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
    icon: "iconsminds-three-arrow-fork",
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
    icon: "iconsminds-bucket",
    label: "Serviços",
    to: "/app/blank-page"
  },
  {
    id: "blankpage",
    icon: "iconsminds-bucket",
    label: "Ramais",
    to: "/"
  }
];
export default data;

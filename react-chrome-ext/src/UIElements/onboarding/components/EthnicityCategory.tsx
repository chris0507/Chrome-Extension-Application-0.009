interface ISubMenu {
  [key: string]: string[];
}

const mainMenus: ISubMenu = {
  White: [
    "English",
    "Welsh",
    "Scottish",
    "Northern Irish",
    "British",
    "Irish",
    "Gypsy or Irish Traveller",
  ],
  "Mixed / Multiple ethnic groups": [
    "White and Black Caribbean",
    "White and Black African",
    "White and Asian",
    "White, Black African and Asian",
    "White, Black Caribbean and Asian",
  ],
  "Asian / Asian British": [
    "Indian",
    "Pakistani",
    "Bangladeshi",
    "Chinese",
    "Indonesian",
    "Pakistani, Pakistani Scottish or Pakistani British ",
    "Indian, Indian Scottish or Indian British",
    "Bangladeshi, Bangladeshi Scottish or Bangladeshi British",
    "Chinese, Chinese Scottish or Chinese British",
  ],
  "Black / African / Caribbean / Black British": [
    "African",
    "Caribbean",
    "Caribbean, Caribbean Scottish or Caribbean British",
    "African, African Scottish or African British",
  ],
  "Other ethnic group": ["Arab"],
};

export default mainMenus;

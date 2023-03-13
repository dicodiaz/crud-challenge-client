type NavItemType = {
  linkTo: string;
  text: string;
};

type NavDropdownType = {
  id: string;
  title: string;
  navItems: NavItemType[];
};

const navDropdowns: NavDropdownType[] = [
  {
    id: 'customers-dropdown',
    title: 'Customers',
    navItems: [
      {
        linkTo: 'customers/list',
        text: 'List',
      },
      {
        linkTo: 'customers/create',
        text: 'Create',
      },
    ],
  },
  {
    id: 'drivers-dropdown',
    title: 'Drivers',
    navItems: [
      {
        linkTo: 'drivers/list',
        text: 'List',
      },
      {
        linkTo: 'drivers/create',
        text: 'Create',
      },
    ],
  },
];

export default navDropdowns;

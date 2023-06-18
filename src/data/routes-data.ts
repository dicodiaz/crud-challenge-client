import { FC } from 'react';
import Customers from '../routes/Customers';
import CustomersCreate from '../routes/CustomersCreate';
import CustomersEdit from '../routes/CustomersEdit';
import Drivers from '../routes/Drivers';
import DriversCreate from '../routes/DriversCreate';
import DriversEdit from '../routes/DriversEdit';
import Home from '../routes/Home';

type RouteType = {
  path: string;
  Component: FC;
};

const routes: RouteType[] = [
  {
    path: '/',
    Component: Home,
  },
  {
    path: '/customers/list',
    Component: Customers,
  },
  {
    path: '/customers/create',
    Component: CustomersCreate,
  },
  {
    path: '/customers/edit/:customerId',
    Component: CustomersEdit,
  },
  {
    path: '/drivers/list',
    Component: Drivers,
  },
  {
    path: '/drivers/create',
    Component: DriversCreate,
  },
  {
    path: '/drivers/edit/:driverId',
    Component: DriversEdit,
  },
];

export default routes;

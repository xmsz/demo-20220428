import { IRouterConfig } from 'ice';
import HomeLayout from '@/pages/Home/Layout'
import HomeA from '@/pages/Home/HomeA';



const routerConfig: IRouterConfig[] = [
  {
    path: '/',
    component: HomeLayout,
    children: [
      {
        path: "/home",
        component: HomeA
      }
    ]
  },
];

export default routerConfig;

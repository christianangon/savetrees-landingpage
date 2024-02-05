import Home from './pages/index';
import SignIn from './components/Signin/index';

const routes = [
  {
    name: "Home",
    route: "/",
    component: Home,
  },
  {
    name: "Sign",
    route: "/signin",
    component: SignIn,
  },
];

export default routes;
import Balance from "../Pages/Balance";
import Contact from "../Pages/Contact";
import DepositPage from "../Pages/DepositPage";
import Home from "../Pages/Home";
import Withdrawl from "../Pages/Withdrawl";

export const rouTes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/Withdrawl",
    element: <Withdrawl />,
  },
  {
    path: "/Balance",
    element: <Balance />,
  },
  {
    path: "/Contact",
    element: <Contact />,
  },
  {
    path: "/DepositPage",
    element: <DepositPage />,
  },
];

import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Frontpage from "./pages/Frontpage";
import UXpage from "./pages/UXpage";

const routes = [
  {
    path: "*",
    element: <Frontpage />,
  },
  {
    path: "/ux-design",
    element: <UXpage />,
  },
];

function App() {
  return <RouterProvider router={createBrowserRouter(routes)} />;
}

export default App;

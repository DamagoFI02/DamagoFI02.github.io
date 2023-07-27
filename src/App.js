import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./sites/Home";
import Mail from "./sites/Mail";
import Imprint from "./sites/Imprint";
import Privacy from "./sites/Privacy";
import RootsLayout from "./sites/RootsLayout";




const router = createBrowserRouter([
  {
    path: '/',
    element: <RootsLayout />,
    children: [
      { path: '/', element: <Home/>},
      { path: '/mail', element: <Mail/>},
      { path: '/impressum', element: <Imprint/>},
      { path: '/dsgvo', element: <Privacy/>}
    ],
  },
  
]);


function App() {
  return <RouterProvider router={router}/>;
}

export default App;

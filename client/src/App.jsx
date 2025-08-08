import Card from "./components/Card";
import Show from "./pages/Show";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
  const route = createBrowserRouter([
    {
      path: "/",
      element: <Card />,
    },{
      path:`/listings/:_id`,
      element: <Show/>
    }
  ]);

  return <RouterProvider router={route} />;
}

export default App;

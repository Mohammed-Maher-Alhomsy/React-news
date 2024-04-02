import { RouterProvider, createBrowserRouter } from "react-router-dom";

import NewsPage from "./pages/News";
import Layout from "./pages/Layout";
import GuardianPage from "./pages/Guardian";
import NewYorkPage from "./pages/NewYork";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <NewsPage />,
        },
        {
          path: "guardian",
          element: <GuardianPage />,
        },
        {
          path: "newyork",
          element: <NewYorkPage />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;

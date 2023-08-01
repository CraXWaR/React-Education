import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/Home";
import ProductsPage from "./pages/Products";
import RootLeyout from "./pages/Root";
import ErrorPage from "./pages/Error";
import ProductDetails from "./pages/Details";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <RootLeyout />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/products", element: <ProductsPage /> },
      { path: "/products/:id", element: <ProductDetails /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={routes} />;
}

export default App;

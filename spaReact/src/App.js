import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./components/Home";
import ProductsPage from "./components/Products";

const routes = createBrowserRouter([
  { path: "/", element: <HomePage /> },
  { path: "/products", element: <ProductsPage /> },
]);

function App() {
  return <RouterProvider router={routes} />;
}

export default App;

import { createBrowserRouter } from "react-router";
import ProductsPage from "./pages/ProductsPage";
import MainLayout from "./pages/MainLayout";
import ProductItemPage from "./pages/ProductItem";
import CartPage from "./pages/CartPage";
import FavoritePage from "./pages/FavoritePage";


export const router = createBrowserRouter([
    {
        Component: MainLayout,
        children: [
            {
                index: true,
                Component: ProductsPage,
            },
            {
                path: 'products/:id',
                Component: ProductItemPage
            },
            {
                path: 'cart',
                Component: CartPage
            },
            {
                path: 'favorite',
                Component: FavoritePage
            },
        ]
    }
]);
import { BrowserRouter, Route, Routes } from 'react-router';
import AppLayout from '@/layouts/app.layout';
import MainPage from '@/pages/landing';
import { RoutePaths } from './route.config';
import CatalogPage from '@/pages/catalog';
import ProductPage from '@/pages/product';
import CartPage from '@/pages/cart';
import ChecoutPage from '@/pages/Checkout';
import ConfirmationPage from '@/pages/confirmation'
const AppRouter = () => {
    const Root = () => {
        return (
            <Routes>
                <Route element={<AppLayout />}>
                    <Route index element={<MainPage />} />
                    <Route path={RoutePaths.CATALOG} element={<CatalogPage />} />
                        
                    <Route path={`${RoutePaths.PRODUCT}/:id`} element={<ProductPage />} />
                    <Route path={RoutePaths.CART} element={<CartPage />} />
                    <Route path={RoutePaths.CHECKOUT} element={<ChecoutPage />} />
                    <Route path={RoutePaths.CONFIRMATION} element={<ConfirmationPage />} /> 
                    

                </Route>
            </Routes>
        )
    }
    return (
        <BrowserRouter>
            <Root />
        </BrowserRouter>
    )
}

export default AppRouter;
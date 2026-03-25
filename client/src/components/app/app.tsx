import { JSX } from "react";
import { MainPage } from "../../pages/main-page/main-page";
import { FavoritesPage } from "../../pages/favourites-page/favourites-page";
import { LoginPage } from "../../pages/login-page/login-page";
import { OfferPage } from "../../pages/offer-page/offer-page";
import { NotFoundPage } from "../../pages/not-found-page/not-found-page";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AppRoute, AuthorizationStatus } from "../../const";
import { PrivateRoute } from "../private-route/private-route";
import { useAppSelector } from '../../store/hooks';

function App(): JSX.Element {
    const authorizationStatus = useAppSelector((state) => state.authorizationStatus);

    return(
        <BrowserRouter>
            <Routes>
                <Route 
                    path={AppRoute.Main} 
                    element={<MainPage />} 
                />
                <Route 
                    path={AppRoute.Login} 
                    element={<LoginPage />} 
                />
                <Route 
                    path={AppRoute.Favourites} 
                    element={
                        <PrivateRoute>
                            <FavoritesPage />
                        </PrivateRoute>
                    } 
                />
                <Route 
                    path={`${AppRoute.Offer}/:id`} 
                    element={<OfferPage />} 
                />
                <Route 
                    path={'*'} 
                    element={<NotFoundPage />} 
                />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
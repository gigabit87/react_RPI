import { JSX, useEffect } from "react";
import { Link } from "react-router-dom";
import { FavoritesLocationItems } from "../../components/favorites-locations-items/favorites-locations-items";
import { Header } from "../../components/header/header";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { fetchFavoriteOffersAction } from "../../store/api-action";
import { AppRoute } from "../../const";
import { LoadingPage } from "../loading-page/loading-page";

function FavoritesPage(): JSX.Element {
    const dispatch = useAppDispatch();
    const favoriteOffers = useAppSelector((state) => state.favoriteOffers);
    const isLoading = useAppSelector((state) => state.isFavoriteOffersLoading);
    
    useEffect(() => {
        dispatch(fetchFavoriteOffersAction());
    }, [dispatch]);
    
    if (isLoading) {
        return <LoadingPage />;
    }
    
    const offersByCity = favoriteOffers.reduce((acc, offer) => {
        const city = offer.city.name;
        if (!acc[city]) {
            acc[city] = [];
        }
        acc[city].push(offer);
        return acc;
    }, {} as Record<string, typeof favoriteOffers>);

    const cities = Object.keys(offersByCity);

    return (
        <div className="page">
            <Header />

            <main className="page__main page__main--favorites">
                <div className="page__favorites-container container">
                    <section className="favorites">
                        <h1 className="favorites__title">Saved listing</h1>
                        {favoriteOffers.length === 0 ? (
                            <div className="favorites__status-wrapper">
                                <b className="favorites__status">Nothing yet saved.</b>
                                <p className="favorites__status-description">
                                    Save properties to narrow down search or plan your future trips.
                                </p>
                            </div>
                        ) : (
                            <ul className="favorites__list">
                                {cities.map((city) => (
                                    <FavoritesLocationItems 
                                        key={city} 
                                        city={city} 
                                        offers={offersByCity[city]} 
                                    />
                                ))}
                            </ul>
                        )}
                    </section>
                </div>
            </main>

            <footer className="footer container">
                <Link className="footer__logo-link" to={AppRoute.Main}>
                    <img className="footer__logo" src="/img/logo.svg" alt="Rent service logo" width="64" height="33" />
                </Link>
            </footer>
        </div>
    );
}

export { FavoritesPage };
import { JSX } from "react";
import { FavoritesLocationItems } from "../../components/favorites-locations-items/favorites-locations-items";
import { Header } from "../../components/header/header";
import { useAppSelector } from "../../store/hooks";

function FavoritesPage(): JSX.Element {
    const offers = useAppSelector((state) => state.offers) || [];
    const favoriteOffers = offers.filter((offer) => offer.isFavorite);
    
    // Группируем по городам
    const offersByCity = favoriteOffers.reduce((acc, offer) => {
        const city = offer.city.name;
        if (!acc[city]) {
            acc[city] = [];
        }
        acc[city].push(offer);
        return acc;
    }, {} as Record<string, typeof favoriteOffers>);

    const cities = Object.keys(offersByCity);
    return(
        <div className="page">
      <Header />

      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            {favoriteOffers.length === 0 ? (
              <div style={{textAlign: 'center', padding: '50px 0'}}>
                <p>No saved listings yet</p>
              </div>
            ) : (
              <ul className="favorites__list">
                {cities.map((city) => (
                  <FavoritesLocationItems key={city} city={city} offers={offersByCity[city]} />
                ))}
              </ul>
            )}
          </section>
        </div>
      </main>
    </div>)
}

export { FavoritesPage };
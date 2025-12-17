import { JSX } from "react";
import { CitiesCard } from "../../components/cities-card/cities-card";
import { Header } from "../../components/header/header";
import { useAppSelector, useAppDispatch } from "../../store/hooks";
import { Cities } from "../../const";
import { setSelectedCity } from "../../store/slices/offers-slice";

type MainPageProps = {
    rentalOffersCount: number;
}

function MainPage({rentalOffersCount} : MainPageProps): JSX.Element {
    const { offers, selectedCity } = useAppSelector((state) => state.offers);
    const dispatch = useAppDispatch();
    const cityOffers = offers.filter((offer) => offer.city.name === selectedCity);
    const displayedOffers = cityOffers.slice(0, 5);

    const handleCityClick = (city: string) => {
      dispatch(setSelectedCity(city));
    };
    return(<div className ="page page--gray page--main">
      <Header />

      <main className ="page__main page__main--index">
        <h1 className ="visually-hidden">Cities</h1>
        <div className ="tabs">
          <section className ="locations container">
            <ul className ="locations__list tabs__list">
              {Cities.map((city) => (
                <li key={city} className ="locations__item">
                  <a 
                    className={`locations__item-link tabs__item ${selectedCity === city ? 'tabs__item--active' : ''}`}
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      handleCityClick(city);
                    }}
                  >
                    <span>{city}</span>
                  </a>
                </li>
              ))}
            </ul>
          </section>
        </div>
        <div className ="cities">
          <div className ="cities__places-container container">
            <section className ="cities__places places">
              <h2 className ="visually-hidden">Places</h2>
              <b className ="places__found">{cityOffers.length} places to stay in {selectedCity}</b>
              <form className ="places__sorting" action="#" method="get">
                <span className ="places__sorting-caption">Sort by</span>
                <span className ="places__sorting-type" tabIndex={0}>
                  Popular
                  <svg className="places__sorting-arrow" width="7" height="4">
                    <use href="#icon-arrow-select"></use>
                  </svg>
                </span>
                <ul className="places__options places__options--custom places__options--opened">
                  <li className="places__option places__option--active" tabIndex={0}>Popular</li>
                  <li className="places__option" tabIndex={0}>Price: low to high</li>
                  <li className="places__option" tabIndex={0}>Price: high to low</li>
                  <li className="places__option" tabIndex={0}>Top rated first</li>
                </ul>
              </form>
              <div className="cities__places-list places__list tabs__content">
                {displayedOffers.length > 0 ? (
                  displayedOffers.map((offer) => (
                    <CitiesCard
                      key={offer.id}
                      id={offer.id}
                      title={offer.title}
                      type={offer.type}
                      price={offer.price}
                      isPremium={offer.isPremium}
                      previewImage={offer.images[0] || 'img/apartment-01.jpg'}
                      rating={offer.rating}
                      isFavorite={offer.isFavorite}
                    />
                  ))
                ) : (
                  <div className="cities__no-places">
                    <p>No places available in {selectedCity}</p>
                  </div>
                )}
              </div>
            </section>
            <div className="cities__right-section">
              <section className="cities__map map"></section>
            </div>
          </div>
        </div>
      </main>
    </div>);
}

export { MainPage };
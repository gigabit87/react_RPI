import { JSX, useState } from "react";
import { CitiesCardList } from "../../components/cities-card-list/cities-card-list";
import { CitiesList } from "../../components/cities-list/cities-list";
import { SortOptions } from "../../components/sort-options/sort-options";
import { Map } from "../../components/map/map";
import { Header } from "../../components/header/header";
import { useAppSelector } from "../../store/hooks";
import { getOffersByCity, sortOffersByType } from "../../utils";
import { SortOffer } from "../../types/sort";

function MainPage(): JSX.Element {
    const selectedCity = useAppSelector((state) => state.city);
    const offers = useAppSelector((state) => state.offers);
    const [selectedOfferId, setSelectedOfferId] = useState<string | null>(null);
    const [activeSort, setActiveSort] = useState<SortOffer>('Popular');
    
    const selectedCityOffers = getOffersByCity(selectedCity?.name, offers);
    const sortedOffers = sortOffersByType(selectedCityOffers, activeSort);

    const cityData = selectedCity?.location || 
      { latitude: 52.3702157, longitude: 4.8951679, zoom: 13 };

    const mapPoints = sortedOffers.map(offer => ({
      id: offer.id,
      location: offer.location,
      title: offer.title
    }));

    const rentalOffersCount = sortedOffers.length;
    const hasOffers = sortedOffers.length > 0;

    return (
      <div className="page page--gray page--main">
        <Header />
        <main className={`page__main page__main--index ${!hasOffers ? 'page__main--index-empty' : ''}`}>
          <h1 className="visually-hidden">Cities</h1>
          <div className="tabs">
            <section className="locations container">
              <CitiesList selectedCity={selectedCity} />
            </section>
          </div>
          <div className="cities">
            <div className={`cities__places-container ${!hasOffers ? 'cities__places-container--empty' : ''} container`}>
              {hasOffers ? (
                <>
                  <section className="cities__places places">
                    <h2 className="visually-hidden">Places</h2>
                    <b className="places__found">{rentalOffersCount} places to stay in {selectedCity?.name}</b>
                    <SortOptions 
                      activeSorting={activeSort} 
                      onChange={(newSorting) => setActiveSort(newSorting)} 
                    />
                    <CitiesCardList 
                      offersList={sortedOffers}
                      onCardHover={setSelectedOfferId}
                      onCardLeave={() => setSelectedOfferId(null)}
                    />
                  </section>
                  <div className="cities__right-section">
                    <Map 
                      city={cityData}
                      points={mapPoints}
                      selectedPoint={selectedOfferId}
                      className="cities__map"
                    />
                  </div>
                </>
              ) : (
                <section className="cities__no-places">
                  <div className="cities__status-wrapper tabs__content">
                    <b className="cities__status">No places to stay available</b>
                    <p className="cities__status-description">
                      We could not find any property available at the moment in {selectedCity?.name}
                    </p>
                  </div>
                </section>
              )}
            </div>
          </div>
        </main>
      </div>
    );
}

export { MainPage };
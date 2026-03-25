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

    return(
        <div className="page page--gray page--main">
            <Header />
            <main className="page__main page__main--index">
                <h1 className="visually-hidden">Cities</h1>
                <div className="tabs">
                    <section className="locations container">
                        <CitiesList selectedCity={selectedCity} />
                    </section>
                </div>
                <div className="cities">
                    <div className="cities__places-container container">
                        <section className="cities__places places">
                            <h2 className="visually-hidden">Places</h2>
                            <b className="places__found">{rentalOffersCount} places to stay in {selectedCity?.name}</b>
                            <SortOptions 
                                activeSorting={activeSort} 
                                onChange={(newSorting) => setActiveSort(newSorting)} 
                            />
                            {sortedOffers.length > 0 ? (
                                <CitiesCardList 
                                    offersList={sortedOffers}
                                    onCardHover={setSelectedOfferId}
                                    onCardLeave={() => setSelectedOfferId(null)}
                                />
                            ) : (
                                <div className="cities__places-list places__list tabs__content">
                                    <div className="cities__no-places">
                                        <p>No places available in {selectedCity?.name}</p>
                                    </div>
                                </div>
                            )}
                        </section>
                        <div className="cities__right-section">
                            <Map 
                                city={cityData}
                                points={mapPoints}
                                selectedPoint={selectedOfferId}
                                className="cities__map"
                            />
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}

export { MainPage };
import { JSX, useMemo, useState, useEffect } from "react";
import { useParams, Navigate } from "react-router-dom";
import { OfferInsideItem } from "../../components/offer-inside-item/offer-inside-item";
import { CitiesCard } from "../../components/cities-card/cities-card";
import { ReviewsList } from "../../components/reviews-list/reviews-list";
import { ReviewForm } from "../../components/review-form/review-form";
import { Map } from "../../components/map/map";
import { Header } from "../../components/header/header";
import { useAppDispatch } from "../../store/hooks";
import { toggleFavorite } from "../../store/action";
import { AppRoute } from "../../const";
import { FullOffer } from "../../types/offer";
import { reviews } from "../../mocks/reviews";

type OfferProps = {
  offers: FullOffer[];
};

function OfferPage({ offers }: OfferProps): JSX.Element{
    const { id } = useParams<{ id: string }>();
    const dispatch = useAppDispatch();
    
    const foundOffer = useMemo(() => {
        if (!id || offers.length === 0) {
            return null;
        }
        return offers.find((o) => o.id === id) || null;
    }, [id, offers]);
    
    const [selectedOffer, setSelectedOffer] = useState<FullOffer | null>(foundOffer);
    
    useEffect(() => {
        setSelectedOffer(foundOffer);
    }, [foundOffer]);

    if (!id || !selectedOffer) {
        return <Navigate to={AppRoute.Main} replace />;
    }

    const ratingPercent = Math.round(selectedOffer.rating * 20);
    const nearbyOffers = offers
        .filter((offer) => offer.city.name === selectedOffer.city.name && offer.id !== selectedOffer.id)
        .slice(0, 3);

    // Подготавливаем точки для карты (текущее предложение + ближайшие)
    const mapPoints = [
      {
        id: selectedOffer.id,
        location: selectedOffer.location,
        title: selectedOffer.title
      },
      ...nearbyOffers.map(offer => ({
        id: offer.id,
        location: offer.location,
        title: offer.title
      }))
    ];
    return(
    <div className="page">
      <Header />

      <main className="page__main page__main--offer">
        <section className="offer">
          <div className="offer__gallery-container container">
            <div className="offer__gallery">
              {selectedOffer.images.slice(0, 6).map((image, index) => (
                <div key={index} className="offer__image-wrapper">
                  <img 
                    className="offer__image" 
                    src={image.startsWith('/') ? image : `/${image}`} 
                    alt={`Photo ${index + 1}`}
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="offer__container container">
            <div className="offer__wrapper">
              {selectedOffer.isPremium && (
                <div className="offer__mark">
                  <span>Premium</span>
                </div>
              )}
              <div className="offer__name-wrapper">
                <h1 className="offer__name">
                  {selectedOffer.title}
                </h1>
                <button 
                  className={`offer__bookmark-button button ${selectedOffer.isFavorite ? 'offer__bookmark-button--active' : ''}`}
                  type="button"
                  onClick={() => {
                    dispatch(toggleFavorite(selectedOffer.id));
                    setSelectedOffer({ ...selectedOffer, isFavorite: !selectedOffer.isFavorite });
                  }}
                >
                  <svg className="offer__bookmark-icon" width="31" height="33">
                    <use href="#icon-bookmark"></use>
                  </svg>
                  <span className="visually-hidden">To bookmarks</span>
                </button>
              </div>
              <div className="offer__rating rating">
                <div className="offer__stars rating__stars">
                  <span style={{width: `${ratingPercent}%`}}></span>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="offer__rating-value rating__value">{selectedOffer.rating}</span>
              </div>
              <ul className="offer__features">
                <li className="offer__feature offer__feature--entire">
                  {selectedOffer.type}
                </li>
                <li className="offer__feature offer__feature--bedrooms">
                  {selectedOffer.bedrooms} Bedroom{selectedOffer.bedrooms !== 1 ? 's' : ''}
                </li>
                <li className="offer__feature offer__feature--adults">
                  Max {selectedOffer.maxAdults} adult{selectedOffer.maxAdults !== 1 ? 's' : ''}
                </li>
              </ul>
              <div className="offer__price">
                <b className="offer__price-value">&euro;{selectedOffer.price}</b>
                <span className="offer__price-text">&nbsp;night</span>
              </div>
              <div className="offer__inside">
                <h2 className="offer__inside-title">What&apos;s inside</h2>
                <ul className="offer__inside-list">
                  {selectedOffer.goods.map((good, index) => (
                    <OfferInsideItem key={index} good={good} />
                  ))}
                </ul>
              </div>
              <div className="offer__host">
                <h2 className="offer__host-title">Meet the host</h2>
                <div className="offer__host-user user">
                  <div className={`offer__avatar-wrapper ${selectedOffer.host.isPro ? 'offer__avatar-wrapper--pro' : ''} user__avatar-wrapper`}>
                    <img 
                      className="offer__avatar user__avatar" 
                      src={selectedOffer.host.avatarUrl.startsWith('/') ? selectedOffer.host.avatarUrl : `/img/${selectedOffer.host.avatarUrl}`} 
                      width="74" 
                      height="74" 
                      alt="Host avatar"
                    />
                  </div>
                  <span className="offer__user-name">
                    {selectedOffer.host.name}
                  </span>
                  {selectedOffer.host.isPro && (
                    <span className="offer__user-status">
                      Pro
                    </span>
                  )}
                </div>
                <div className="offer__description">
                  <p className="offer__text">
                    {selectedOffer.description}
                  </p>
                </div>
              </div>
              <section className="offer__reviews reviews">
                <ReviewsList reviews={reviews} />
                <ReviewForm />
              </section>
            </div>
          </div>
          <Map 
            city={selectedOffer.city.location}
            points={mapPoints}
            selectedPoint={selectedOffer.id}
            className="offer__map"
          />
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <div className="near-places__list places__list">
              {nearbyOffers.map((offer) => (
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
              ))}
            </div>
          </section>
        </div>
      </main></div>)
}

export { OfferPage }
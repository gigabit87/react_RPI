import { JSX, useEffect, useState } from "react";
import { useParams, Navigate } from "react-router-dom";
import { OfferInsideItem } from "../../components/offer-inside-item/offer-inside-item";
import { CitiesCard } from "../../components/cities-card/cities-card";
import { FormRatingInput } from "../../components/form-rating-input/form-rating-input";
import { ReviewsItem } from "../../components/reviews-item/reviews-item";
import { Header } from "../../components/header/header";
import { useAppSelector, useAppDispatch } from "../../store/hooks";
import { setSelectedOffer, toggleFavorite } from "../../store/slices/offers-slice";
import { AppRoute } from "../../const";
import { FullOffer } from "../../types/offer";
import { reviews } from "../../mocks/reviews";

type OfferProps = {
  offers: FullOffer[];
};

function OfferPage({ offers }: OfferProps): JSX.Element{
    const { id } = useParams<{ id: string }>();
    const dispatch = useAppDispatch();
    const { selectedOffer } = useAppSelector((state) => state.offers);
    
    useEffect(() => {
        if (id) {
            const offer = offers.find((o) => o.id === id);
            if (offer) {
                dispatch(setSelectedOffer(offer));
            }
        }
    }, [id, offers, dispatch]);

    if (!id || !selectedOffer) {
        return <Navigate to={AppRoute.Main} />;
    }

    const ratingPercent = Math.round(selectedOffer.rating * 20);
    const nearbyOffers = offers
        .filter((offer) => offer.city.name === selectedOffer.city.name && offer.id !== selectedOffer.id)
        .slice(0, 3);
    
    const [selectedRating, setSelectedRating] = useState(0);
    const [reviewText, setReviewText] = useState('');
    
    const handleReviewSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // В реальном приложении здесь был бы API запрос
        console.log('Review submitted:', { rating: selectedRating, text: reviewText });
        setSelectedRating(0);
        setReviewText('');
    };
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
                    src={image.startsWith('img/') ? image : `img/${image}`} 
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
                  onClick={() => dispatch(toggleFavorite(selectedOffer.id))}
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
                      src={selectedOffer.host.avatarUrl.startsWith('img/') ? selectedOffer.host.avatarUrl : `img/${selectedOffer.host.avatarUrl}`} 
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
                <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>
                <ul className="reviews__list">
                  {reviews.map((review) => (
                    <ReviewsItem key={review.id} review={review} />
                  ))}
                </ul>
                <form className="reviews__form form" action="#" method="post" onSubmit={handleReviewSubmit}>
                  <label className="reviews__label form__label" htmlFor="review">Your review</label>
                  <div className="reviews__rating-form form__rating">
                    <FormRatingInput 
                      value={5} 
                      title="perfect" 
                      checked={selectedRating === 5}
                      onChange={setSelectedRating}
                    />
                    <FormRatingInput 
                      value={4} 
                      title="good" 
                      checked={selectedRating === 4}
                      onChange={setSelectedRating}
                    />
                    <FormRatingInput 
                      value={3} 
                      title="not bad" 
                      checked={selectedRating === 3}
                      onChange={setSelectedRating}
                    />
                    <FormRatingInput 
                      value={2} 
                      title="badly" 
                      checked={selectedRating === 2}
                      onChange={setSelectedRating}
                    />
                    <FormRatingInput 
                      value={1} 
                      title="terribly" 
                      checked={selectedRating === 1}
                      onChange={setSelectedRating}
                    />
                  </div>
                  <textarea 
                    className="reviews__textarea form__textarea" 
                    id="review" 
                    name="review" 
                    placeholder="Tell how was your stay, what you like and what can be improved"
                    value={reviewText}
                    onChange={(e) => setReviewText(e.target.value)}
                  />
                  <div className="reviews__button-wrapper">
                    <p className="reviews__help">
                      To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
                    </p>
                    <button 
                      className="reviews__submit form__submit button" 
                      type="submit"
                      disabled={!selectedRating || reviewText.length < 50}
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </section>
            </div>
          </div>
          <section className="offer__map map"></section>
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
import { JSX, useState, useEffect } from "react";
import { useParams, Navigate } from "react-router-dom";
import { OfferInsideItem } from "../../components/offer-inside-item/offer-inside-item";
import { CitiesCard } from "../../components/cities-card/cities-card";
import { ReviewsList } from "../../components/reviews-list/reviews-list";
import { ReviewForm } from "../../components/review-form/review-form";
import { Map } from "../../components/map/map";
import { Header } from "../../components/header/header";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { toggleFavorite } from "../../store/action";
import { AppRoute, AuthorizationStatus } from "../../const";
import { FullOffer } from "../../types/offer";
import { api } from "../../store";
import { LoadingPage } from "../loading-page/loading-page";
import { toggleFavoriteAction } from "../../store/api-action";

function OfferPage(): JSX.Element {
    const { id } = useParams<{ id: string }>();
    const dispatch = useAppDispatch();
    const [offer, setOffer] = useState<FullOffer | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    
    const allOffers = useAppSelector((state) => state.offers);
    const authorizationStatus = useAppSelector((state) => state.authorizationStatus);

    useEffect(() => {
        if (!id) return;
        
        const fetchOffer = async () => {
            setIsLoading(true);
            try {
                const response = await api.get<FullOffer>(`/offers/${id}`);
                setOffer(response.data);
                setError(null);
            } catch (err) {
                console.error('Failed to load offer:', err);
                setError('Failed to load offer');
                setOffer(null);
            } finally {
                setIsLoading(false);
            }
        };
        
        fetchOffer();
    }, [id]);

    if (isLoading) {
        return <LoadingPage />;
    }

    if (!id || !offer || error) {
        return <Navigate to="/404" replace />;
    }

    const ratingPercent = Math.round(offer.rating * 20);
    
    const nearbyOffers = allOffers
        .filter((o) => o.city.name === offer.city.name && o.id !== offer.id)
        .slice(0, 3);

    const mapPoints = [
        {
            id: offer.id,
            location: offer.location,
            title: offer.title
        },
        ...nearbyOffers.map(o => ({
            id: o.id,
            location: o.location,
            title: o.title
        }))
    ];

    const isAuth = authorizationStatus === AuthorizationStatus.Auth;

    return (
        <div className="page">
            <Header />
            <main className="page__main page__main--offer">
                <section className="offer">
                    <div className="offer__gallery-container container">
                        <div className="offer__gallery">
                            {offer.images.slice(0, 6).map((image, index) => (
                                <div key={index} className="offer__image-wrapper">
                                    <img 
                                        className="offer__image" 
                                        src={image.startsWith('http') ? image : `http://localhost:5000${image}`} 
                                        alt={`Photo ${index + 1}`}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="offer__container container">
                        <div className="offer__wrapper">
                            {offer.isPremium && (
                                <div className="offer__mark">
                                    <span>Premium</span>
                                </div>
                            )}
                            <div className="offer__name-wrapper">
                                <h1 className="offer__name">
                                    {offer.title}
                                </h1>
                                <button 
                                    className={`offer__bookmark-button button ${offer.isFavorite ? 'offer__bookmark-button--active' : ''}`}
                                    type="button"
                                    onClick={() => {
                                        const handleFavoriteClick = () => {
                                          const newStatus = offer.isFavorite ? 0 : 1;
                                          dispatch(toggleFavoriteAction({ offerId: offer.id, status: newStatus }));
                                          setOffer({ ...offer, isFavorite: !offer.isFavorite });
                                        };
                                        setOffer({ ...offer, isFavorite: !offer.isFavorite });
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
                                <span className="offer__rating-value rating__value">{offer.rating}</span>
                            </div>
                            <ul className="offer__features">
                                <li className="offer__feature offer__feature--entire">
                                    {offer.type}
                                </li>
                                <li className="offer__feature offer__feature--bedrooms">
                                    {offer.bedrooms} Bedroom{offer.bedrooms !== 1 ? 's' : ''}
                                </li>
                                <li className="offer__feature offer__feature--adults">
                                    Max {offer.maxAdults} adult{offer.maxAdults !== 1 ? 's' : ''}
                                </li>
                            </ul>
                            <div className="offer__price">
                                <b className="offer__price-value">&euro;{offer.price}</b>
                                <span className="offer__price-text">&nbsp;night</span>
                            </div>
                            <div className="offer__inside">
                                <h2 className="offer__inside-title">What&apos;s inside</h2>
                                <ul className="offer__inside-list">
                                    {offer.goods.map((good, index) => (
                                        <OfferInsideItem key={index} good={good} />
                                    ))}
                                </ul>
                            </div>
                            <div className="offer__host">
                                <h2 className="offer__host-title">Meet the host</h2>
                                <div className="offer__host-user user">
                                    <div className={`offer__avatar-wrapper ${offer.host.isPro ? 'offer__avatar-wrapper--pro' : ''} user__avatar-wrapper`}>
                                        <img 
                                            className="offer__avatar user__avatar" 
                                            src={offer.host.avatarUrl.startsWith('http') ? offer.host.avatarUrl : `http://localhost:5000${offer.host.avatarUrl}`} 
                                            width="74" 
                                            height="74" 
                                            alt="Host avatar"
                                        />
                                    </div>
                                    <span className="offer__user-name">
                                        {offer.host.name}
                                    </span>
                                    {offer.host.isPro && (
                                        <span className="offer__user-status">
                                            Pro
                                        </span>
                                    )}
                                </div>
                                <div className="offer__description">
                                    <p className="offer__text">
                                        {offer.description}
                                    </p>
                                </div>
                            </div>
                            <section className="offer__reviews reviews">
                                <ReviewsList offerId={offer.id} />
                                {isAuth && <ReviewForm offerId={offer.id} />}
                            </section>
                        </div>
                    </div>
                    <Map 
                        city={offer.city.location}
                        points={mapPoints}
                        selectedPoint={offer.id}
                        className="offer__map"
                    />
                </section>
                <div className="container">
                    <section className="near-places places">
                        <h2 className="near-places__title">Other places in the neighbourhood</h2>
                        <div className="near-places__list places__list">
                            {nearbyOffers.map((nearbyOffer) => (
                                <CitiesCard
                                    key={nearbyOffer.id}
                                    id={nearbyOffer.id}
                                    title={nearbyOffer.title}
                                    type={nearbyOffer.type}
                                    price={nearbyOffer.price}
                                    isPremium={nearbyOffer.isPremium}
                                    previewImage={nearbyOffer.previewImage}
                                    rating={nearbyOffer.rating}
                                    isFavorite={nearbyOffer.isFavorite}
                                />
                            ))}
                        </div>
                    </section>
                </div>
            </main>
        </div>
    );
}

export { OfferPage };
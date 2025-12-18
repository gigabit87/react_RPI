import { JSX } from "react";
import { Link } from "react-router-dom";
import { FullOffer } from "../../types/offer";
import { AppRoute } from "../../const";
import { useAppDispatch } from "../../store/hooks";
import { toggleFavorite } from "../../store/action";

type FavoriteCardProps = {
  offer: FullOffer;
};

function FavoriteCard({ offer }: FavoriteCardProps): JSX.Element{
  const dispatch = useAppDispatch();
  const ratingPercent = Math.round(offer.rating * 20);

  const handleFavoriteClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    dispatch(toggleFavorite(offer.id));
  };

  return (
    <article className="favorites__card place-card">
      {offer.isPremium && (
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      )}
      <div className="favorites__image-wrapper place-card__image-wrapper">
        <Link to={`${AppRoute.Offer}/${offer.id}`}>
          <img
            className="place-card__image"
            src={offer.images?.[0]?.startsWith('/') ? offer.images[0] : `/${offer.images?.[0] || 'img/apartment-small-03.jpg'}`}
            width="150"
            height="110"
            alt="Place image"
          />
        </Link>
      </div>
      <div className="favorites__card-info place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{offer.price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button 
            className="place-card__bookmark-button place-card__bookmark-button--active button" 
            type="button"
            onClick={handleFavoriteClick}
          >
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use href="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">In bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: `${ratingPercent}%`}}></span>
            <span className="visually-hidden">Rating {offer.rating}</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`${AppRoute.Offer}/${offer.id}`}>{offer.title}</Link>
        </h2>
        <p className="place-card__type">{offer.type}</p>
      </div>
    </article>
  );
}

export { FavoriteCard };


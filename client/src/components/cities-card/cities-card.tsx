import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AppRoute, AuthorizationStatus } from "../../const";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { toggleFavoriteAction } from "../../store/api-action";

type CitiesCardProps = {
  id: string;
  title: string;
  type: string;
  price: number;
  isPremium: boolean;
  previewImage: string;
  rating: number;
  isFavorite?: boolean;
  onMouseEnter?: (id: string) => void;
  onMouseLeave?: () => void;
}

function CitiesCard({ id, title, type, price, previewImage, isPremium, rating, isFavorite = false, onMouseEnter, onMouseLeave}: CitiesCardProps ) {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [, setOfferId] = useState('');
  const ratingPercent = Math.round(rating * 20);
  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);
  const isAuth = authorizationStatus === AuthorizationStatus.Auth;

  const handleFavoriteClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (!isAuth) {
      navigate(AppRoute.Login);
      return;
    }
    
    const newStatus = isFavorite ? 0 : 1;
    dispatch(toggleFavoriteAction({ offerId: id, status: newStatus }));
  };

  const handleMouseEnter = () => {
    setOfferId(id);
    onMouseEnter?.(id);
  };

  const handleMouseLeave = () => {
    setOfferId('');
    onMouseLeave?.();
  };

  const getImageUrl = () => {
    if (!previewImage) return '/img/apartment-01.jpg';
    if (previewImage.startsWith('http')) return previewImage;
    return `http://localhost:5000${previewImage}`;
  };

  return (
    <article 
      className="cities__card place-card"
      onMouseOver={handleMouseEnter}
      onMouseOut={handleMouseLeave}
    >
      {isPremium && (
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      )}
      <div className="cities__image-wrapper place-card__image-wrapper">
        <Link to={`${AppRoute.Offer}/${id}`}>
          <img 
            className="place-card__image" 
            src={getImageUrl()} 
            width="260" 
            height="200" 
            alt={title}
          />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button 
            className={`place-card__bookmark-button button ${isFavorite ? 'place-card__bookmark-button--active' : ''}`}
            type="button"
            onClick={handleFavoriteClick}
          >
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use href="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: `${ratingPercent}%`}}></span>
            <span className="visually-hidden">Rating {rating}</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`${AppRoute.Offer}/${id}`}>{title}</Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
}

export { CitiesCard };
import { JSX } from "react";
import { FavoritesCard } from "../favourites-card/favourites-card";
import { FullOffer } from "../../types/offer";

type FavoritesLocationItemsProps = {
  city: string;
  offers: FullOffer[];
};

function FavoritesLocationItems({ city, offers }: FavoritesLocationItemsProps): JSX.Element{
    return(
      <li className="favorites__locations-items">
        <div className="favorites__locations locations locations--current">
          <div className="locations__item">
            <a className="locations__item-link" href="#">
              <span>{city}</span>
            </a>
          </div>
        </div>
        <div className="favorites__places">
          {offers.map((offer) => (
            <FavoritesCard key={offer.id} offer={offer} />
          ))}
        </div>
      </li>
    )
}
export {FavoritesLocationItems};
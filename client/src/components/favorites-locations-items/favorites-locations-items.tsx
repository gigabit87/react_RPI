import { JSX } from "react";
import { FavoriteCardList } from "../favorite-card-list/favorite-card-list";
import { FullOffer } from "../../types/offer";

type FavoritesLocationItemsProps = {
  city: string;
  offers: FullOffer[];
};

function FavoritesLocationItems({ city, offers }: FavoritesLocationItemsProps): JSX.Element {
    return (
        <li className="favorites__locations-items">
            <div className="favorites__locations locations locations--current">
                <div className="locations__item">
                    <a className="locations__item-link" href="#">
                        <span>{city}</span>
                    </a>
                </div>
            </div>
            <FavoriteCardList offers={offers} />
        </li>
    );
}

export { FavoritesLocationItems };
import { JSX } from "react";
import { FavoriteCard } from "../favorite-card/favorite-card";
import { FullOffer } from "../../types/offer";

type FavoriteCardListProps = {
  offers: FullOffer[];
};

function FavoriteCardList({ offers }: FavoriteCardListProps): JSX.Element {
  return (
    <div className="favorites__places">
      {offers.map((offer) => (
        <FavoriteCard key={offer.id} offer={offer} />
      ))}
    </div>
  );
}

export { FavoriteCardList };
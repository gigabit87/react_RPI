import { JSX } from "react";

type OfferInsideItemProps = {
  good: string;
};

function OfferInsideItem({ good }: OfferInsideItemProps): JSX.Element {
  return (
    <li className="offer__inside-item">
      {good}
    </li>
  );
}

export { OfferInsideItem };
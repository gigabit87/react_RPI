import { JSX } from "react";
import { ReviewsItem } from "../reviews-item/reviews-item";
import { Review } from "../../types/review";

type ReviewsListProps = {
  reviews: Review[];
};

function ReviewsList({ reviews }: ReviewsListProps): JSX.Element {
  return (
    <>
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>
      <ul className="reviews__list">
        {reviews.map((review) => (
          <ReviewsItem key={review.id} review={review} />
        ))}
      </ul>
    </>
  );
}

export { ReviewsList };


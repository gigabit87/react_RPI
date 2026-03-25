import { JSX, useEffect } from "react";
import { ReviewsItem } from "../reviews-item/reviews-item";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { fetchReviewsAction } from "../../store/api-action";

type ReviewsListProps = {
  offerId: string;
};

function ReviewsList({ offerId }: ReviewsListProps): JSX.Element {
  const dispatch = useAppDispatch();
  const reviews = useAppSelector((state) => state.reviews);
  const isReviewsLoading = useAppSelector((state) => state.isReviewsLoading);

  useEffect(() => {
    if (offerId) {
      dispatch(fetchReviewsAction(offerId));
    }
  }, [offerId, dispatch]);

  if (isReviewsLoading) {
    return <div className="reviews__list">Loading reviews...</div>;
  }

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
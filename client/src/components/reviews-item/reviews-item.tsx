import { JSX } from "react";
import { Review } from "../../types/review";

type ReviewsItemProps = {
  review: Review;
};

function ReviewsItem({ review }: ReviewsItemProps): JSX.Element{
    const ratingPercent = Math.round(review.rating * 20);
    const date = new Date(review.date);
    const formattedDate = date.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });

    return(
        <li className="reviews__item">
            <div className="reviews__user user">
                <div className="reviews__avatar-wrapper user__avatar-wrapper">
                    <img 
                        className="reviews__avatar user__avatar" 
                        src={review.user.avatarUrl.startsWith('/') ? review.user.avatarUrl : `/img/${review.user.avatarUrl}`} 
                        width="54" 
                        height="54" 
                        alt="Reviews avatar"
                    />
                </div>
                <span className="reviews__user-name">
                    {review.user.name}
                </span>
            </div>
            <div className="reviews__info">
                <div className="reviews__rating rating">
                    <div className="reviews__stars rating__stars">
                        <span style={{width: `${ratingPercent}%`}}></span>
                        <span className="visually-hidden">Rating {review.rating}</span>
                    </div>
                </div>
                <p className="reviews__text">
                    {review.comment}
                </p>
                <time className="reviews__time" dateTime={review.date}>
                    {formattedDate}
                </time>
            </div>
        </li>
    )
}

export { ReviewsItem };
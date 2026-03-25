import { JSX, FormEvent, useState } from "react";
import { FormRatingInput } from "../form-rating-input/form-rating-input";
import { useAppDispatch } from "../../store/hooks";
import { api } from "../../store";
import { fetchReviewsAction } from "../../store/api-action";

type ReviewFormProps = {
  offerId: string;
};

function ReviewForm({ offerId }: ReviewFormProps): JSX.Element {
  const [selectedRating, setSelectedRating] = useState(0);
  const [reviewText, setReviewText] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const dispatch = useAppDispatch();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (isSubmitting) return;
    
    setIsSubmitting(true);
    
    try {
      const token = localStorage.getItem('rent-service-token');
      await api.post(`/comments/${offerId}`, {
        comment: reviewText,
        rating: selectedRating
      }, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      
      // Обновляем список отзывов
      dispatch(fetchReviewsAction(offerId));
      
      // Очищаем форму
      setSelectedRating(0);
      setReviewText('');
      
    } catch (error) {
      console.error('Failed to submit review:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form className="reviews__form form" action="#" method="post" onSubmit={handleSubmit}>
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        <FormRatingInput 
          value={5} 
          title="perfect" 
          checked={selectedRating === 5}
          onChange={setSelectedRating}
        />
        <FormRatingInput 
          value={4} 
          title="good" 
          checked={selectedRating === 4}
          onChange={setSelectedRating}
        />
        <FormRatingInput 
          value={3} 
          title="not bad" 
          checked={selectedRating === 3}
          onChange={setSelectedRating}
        />
        <FormRatingInput 
          value={2} 
          title="badly" 
          checked={selectedRating === 2}
          onChange={setSelectedRating}
        />
        <FormRatingInput 
          value={1} 
          title="terribly" 
          checked={selectedRating === 1}
          onChange={setSelectedRating}
        />
      </div>
      <textarea 
        className="reviews__textarea form__textarea" 
        id="review" 
        name="review" 
        placeholder="Tell how was your stay, what you like and what can be improved"
        value={reviewText}
        onChange={(e) => setReviewText(e.target.value)}
        disabled={isSubmitting}
      />
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button 
          className="reviews__submit form__submit button" 
          type="submit"
          disabled={!selectedRating || reviewText.length < 50 || isSubmitting}
        >
          {isSubmitting ? 'Submitting...' : 'Submit'}
        </button>
      </div>
    </form>
  );
}

export { ReviewForm };
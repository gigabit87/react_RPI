import { JSX } from "react";

type FormRatingInputProps = {
  value: number;
  title: string;
  checked?: boolean;
  onChange?: (value: number) => void;
};

function FormRatingInput({ value, title, checked = false, onChange }: FormRatingInputProps): JSX.Element{
    return(
        <>
            <input 
                className="form__rating-input visually-hidden" 
                name="rating" 
                value={value} 
                id={`${value}-stars`} 
                type="radio"
                checked={checked}
                onChange={() => onChange?.(value)}
            />
            <label htmlFor={`${value}-stars`} className="reviews__rating-label form__rating-label" title={title}>
                <svg className="form__star-image" width="37" height="33">
                    <use href="#icon-star"></use>
                </svg>
            </label>
        </>
    )
}

export { FormRatingInput };
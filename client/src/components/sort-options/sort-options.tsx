import { useState, KeyboardEvent, JSX } from 'react';
import { SortOffersType } from '../../const';
import classNames from 'classnames';
import { SortOffer } from '../../types/sort';

type SortPlacesProps = {
  activeSorting: SortOffer;
  onChange: (newSorting: SortOffer) => void;
};

function SortOptions({ activeSorting, onChange }: SortPlacesProps): JSX.Element {
  const [isOpen, setIsOpen] = useState(false);

  const iconStyle = {
    transform: `translateY(-50%) ${isOpen ? 'rotate(180deg)' : ''}`,
  };

  function keyDownHandler(evt: KeyboardEvent) {
    if (evt.key === 'Escape' && isOpen) {
      evt.preventDefault();
      setIsOpen(false);
    }
  }

  function typeClickHandler() {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  }

  function sortingItemClickHandler(type: SortOffer) {
    onChange(type);
    setIsOpen(false);
  }

  return (
    <form className="places__sorting" action="#" method="get" onKeyDown={keyDownHandler}>
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" tabIndex={0} onClick={typeClickHandler}>
        {SortOffersType[activeSorting]}
        <svg className="places__sorting-arrow" width="7" height="4" style={iconStyle}>
          <use href="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className={classNames('places__options', 'places__options--custom', { 'places__options--opened': isOpen })}>
        {(Object.keys(SortOffersType) as SortOffer[]).map((type) => (
          <li
            key={type}
            className={classNames('places__option', { 'places__option--active': activeSorting === type })}
            tabIndex={0}
            onClick={() => sortingItemClickHandler(type)}
          >
            {SortOffersType[type]}
          </li>
        ))}
      </ul>
    </form>
  );
}

export { SortOptions };
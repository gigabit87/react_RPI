import { describe, it, expect } from 'vitest';
import { getOffersByCity, sortOffersByType } from '../utils';
import { makeFakeOffer } from './mocks';
import { CITIES_LOCATION } from '../const';

describe('getOffersByCity', () => {
  it('возвращает только объявления указанного города', () => {
    const paris = CITIES_LOCATION[0];
    const cologne = CITIES_LOCATION[1];
    const parisOffer = { ...makeFakeOffer(), city: paris };
    const cologneOffer = { ...makeFakeOffer(), city: cologne };
    const result = getOffersByCity('Paris', [parisOffer, cologneOffer]);
    expect(result).toHaveLength(1);
    expect(result[0].city.name).toBe('Paris');
  });

  it('возвращает пустой массив, если город не найден', () => {
    const offers = [makeFakeOffer(), makeFakeOffer()];
    expect(getOffersByCity('Tokyo', offers)).toHaveLength(0);
  });

  it('возвращает пустой массив при пустом списке предложений', () => {
    expect(getOffersByCity('Paris', [])).toEqual([]);
  });
});

describe('sortOffersByType', () => {
  it('сортирует от дешёвых к дорогим', () => {
    const offers = [
      { ...makeFakeOffer(), price: 300 },
      { ...makeFakeOffer(), price: 100 },
      { ...makeFakeOffer(), price: 200 },
    ];
    const result = sortOffersByType([...offers], 'PriceToHigh');
    expect(result[0].price).toBe(100);
    expect(result[2].price).toBe(300);
  });

  it('сортирует от дорогих к дешёвым', () => {
    const offers = [
      { ...makeFakeOffer(), price: 100 },
      { ...makeFakeOffer(), price: 300 },
    ];
    const result = sortOffersByType([...offers], 'PriceToLow');
    expect(result[0].price).toBe(300);
  });

  it('сортирует по рейтингу', () => {
    const offers = [
      { ...makeFakeOffer(), rating: 3 },
      { ...makeFakeOffer(), rating: 5 },
      { ...makeFakeOffer(), rating: 4 },
    ];
    const result = sortOffersByType([...offers], 'TopRated');
    expect(result[0].rating).toBe(5);
  });

  it('не изменяет исходный массив', () => {
    const offers = [
      { ...makeFakeOffer(), price: 100 },
      { ...makeFakeOffer(), price: 200 },
    ];
    const copy = [...offers];
    sortOffersByType(offers, 'PriceToHigh');
    expect(offers).toEqual(copy);
  });

  it('корректно работает при пустом массиве', () => {
    const result = sortOffersByType([], 'PriceToHigh');
    expect(result).toEqual([]);
  });
});
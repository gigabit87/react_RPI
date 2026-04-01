import { describe, it, expect } from 'vitest';
import { screen } from '@testing-library/react';
import { CitiesCard } from '../components/cities-card/cities-card';
import { renderWithProviders } from './render-with-providers';
import { AppRoute } from '../const';
import { makeFakeOffer } from './mocks';

describe('CitiesCard', () => {
  const mockOffer = makeFakeOffer();

  const renderCard = (props = {}) => {
    return renderWithProviders(
      <CitiesCard
        id={mockOffer.id}
        title={mockOffer.title}
        type={mockOffer.type}
        price={mockOffer.price}
        isPremium={mockOffer.isPremium}
        previewImage={mockOffer.previewImage}
        rating={mockOffer.rating}
        isFavorite={mockOffer.isFavorite}
        {...props}
      />
    );
  };

  it('Заголовок объявления отображается на карточке', () => {
    renderCard();
    expect(screen.getByText(mockOffer.title)).toBeInTheDocument();
  });

  it('Цена объявления присутствует в разметке', () => {
    renderCard();
    expect(screen.getByText(`€${mockOffer.price}`)).toBeInTheDocument();
  });

  it('Метка "Premium" отображается когда isPremium = true', () => {
    renderCard({ isPremium: true });
    expect(screen.getByText(/premium/i)).toBeInTheDocument();
  });

  it('Метка "Premium" отсутствует когда isPremium = false', () => {
    renderCard({ isPremium: false });
    expect(screen.queryByText(/premium/i)).not.toBeInTheDocument();
  });

  it('Ссылка на страницу объявления содержит id в href (/offer/id)', () => {
    renderCard();
    const link = screen.getAllByRole('link')[0];
    expect(link.getAttribute('href')).toBe(`${AppRoute.Offer}/${mockOffer.id}`);
  });
});
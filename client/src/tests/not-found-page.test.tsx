import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { NotFoundPage } from '../pages/not-found-page/not-found-page';

describe('NotFoundPage', () => {
  const renderPage = () => render(
    <MemoryRouter>
      <NotFoundPage />
    </MemoryRouter>
  );

  it('отображает заголовок 404', () => {
    renderPage();
    expect(screen.getByText(/404/i)).toBeInTheDocument();
  });

  it('отображает текст Page Not Found', () => {
    renderPage();
    expect(screen.getByText(/page not found/i)).toBeInTheDocument();
  });

  it('ссылка на главную страницу присутствует', () => {
    renderPage();
    const link = screen.getByRole('link', { name: /на главную/i });
    expect(link).toBeInTheDocument();
  });

  it('ссылка ведет на главную страницу', () => {
    renderPage();
    const link = screen.getByRole('link', { name: /на главную/i });
    expect(link.getAttribute('href')).toBe('/');
  });
});
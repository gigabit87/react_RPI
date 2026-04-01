import { describe, it, expect } from 'vitest';
import { screen } from '@testing-library/react';
import { PrivateRoute } from '../components/private-route/private-route';
import { AuthorizationStatus, AppRoute } from '../const';
import { renderWithProviders } from './render-with-providers';

describe('PrivateRoute', () => {
  it('показывает дочерний компонент для авторизованного пользователя', () => {
    renderWithProviders(
      <PrivateRoute>
        <div data-testid="protected">Избранное</div>
      </PrivateRoute>,
      {
        storeOverrides: { authorizationStatus: AuthorizationStatus.Auth },
        initialEntries: [AppRoute.Favourites],
      }
    );
    expect(screen.getByTestId('protected')).toBeInTheDocument();
  });

  it('перенаправляет на /login для неавторизованного пользователя', () => {
    renderWithProviders(
      <PrivateRoute>
        <div data-testid="protected">Избранное</div>
      </PrivateRoute>,
      {
        storeOverrides: { authorizationStatus: AuthorizationStatus.NoAuth },
        initialEntries: [AppRoute.Favourites],
      }
    );
    expect(screen.queryByTestId('protected')).not.toBeInTheDocument();
  });

  it('перенаправляет на /login при статусе Unknown', () => {
    renderWithProviders(
      <PrivateRoute>
        <div data-testid="protected">Избранное</div>
      </PrivateRoute>,
      {
        storeOverrides: { authorizationStatus: AuthorizationStatus.Unknown },
        initialEntries: [AppRoute.Favourites],
      }
    );
    expect(screen.queryByTestId('protected')).not.toBeInTheDocument();
  });
});
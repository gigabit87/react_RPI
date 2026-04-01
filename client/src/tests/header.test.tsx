import { describe, it, expect } from 'vitest';
import { screen } from '@testing-library/react';
import { Header } from '../components/header/header';
import { renderWithProviders } from './render-with-providers';
import { AuthorizationStatus } from '../const';

describe('Header - неавторизованный пользователь', () => {
  it('отображает ссылку Sign in', () => {
    renderWithProviders(<Header />, {
      storeOverrides: { authorizationStatus: AuthorizationStatus.NoAuth },
    });
    expect(screen.getByText(/sign in/i)).toBeInTheDocument();
  });

  it('не отображает Sign out', () => {
    renderWithProviders(<Header />, {
      storeOverrides: { authorizationStatus: AuthorizationStatus.NoAuth },
    });
    expect(screen.queryByText(/sign out/i)).not.toBeInTheDocument();
  });
});

describe('Header - авторизованный пользователь', () => {
  it('отображает имя пользователя', () => {
    renderWithProviders(<Header />, {
      storeOverrides: {
        authorizationStatus: AuthorizationStatus.Auth,
        email: 'test@example.com',
        username: 'TestUser',
      },
    });
    expect(screen.getByText(/TestUser/i)).toBeInTheDocument();
  });

  it('отображает кнопку Sign out', () => {
    renderWithProviders(<Header />, {
      storeOverrides: {
        authorizationStatus: AuthorizationStatus.Auth,
        email: 'test@example.com',
      },
    });
    expect(screen.getByText(/sign out/i)).toBeInTheDocument();
  });
});
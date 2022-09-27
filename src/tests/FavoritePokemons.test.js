import React from 'react';
import { screen } from '@testing-library/react';
import FavoritePokemons from '../pages/FavoritePokemons';
import renderWithRouter from '../renderWithRouter';

describe('Teste se é exibida na tela a mensagem No favorite pokemon found', () => {
  test('teste not found', () => {
    renderWithRouter(<FavoritePokemons />);
    const noFavorite = screen.getByText('No favorite pokemon found');
    expect(noFavorite).toBeInTheDocument();
  });
});

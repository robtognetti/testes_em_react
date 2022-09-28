import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import renderWithRouter from '../renderWithRouter';

describe('Teste se é renderizado um card com informações de determinado pokémon', () => {
  test('Teste Imagem', () => {
    renderWithRouter(<App />);
    const name = screen.getByTestId('pokemon-name');
    expect(name).toHaveTextContent(/pikachu/i);
    const type = screen.getByTestId('pokemon-type');
    expect(type).toHaveTextContent(/Electric/i);
    const weight = screen.getByTestId('pokemon-weight');
    expect(weight).toHaveTextContent(/Average weight: 6.0 kg/i);
    const image = screen.getByAltText('Pikachu sprite');
    expect(image).toHaveAttribute('src', 'https://cdn2.bulbagarden.net/upload/b/b2/Spr_5b_025_m.png');
  });

  test('É exibido na tela um texto com o tipo do pokemon', () => {
    renderWithRouter(<App />);
    const type = screen.getByTestId('pokemon-type', { name: 'Electric' });
    expect(type).toBeInTheDocument();
    expect(type.innerHTML).toBe('Electric');
  });

  test('Teste se existe um ícone de estrela nos pokémons favoritados', () => {
    renderWithRouter(<App />);
    const details = screen.getByRole('link', { name: /more details/i });
    userEvent.click(details);
    const favorite = screen.getByLabelText(/pokémon favoritado?/i);
    userEvent.click(favorite);
    const selected = screen.getByRole('img', { name:
        'Pikachu is marked as favorite' });
    expect(selected).toBeInTheDocument();
    expect(selected).toHaveAttribute(
      'src',
      '/star-icon.svg',
    );
  });
});

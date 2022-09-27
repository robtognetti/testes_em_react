import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import renderWithRouter from '../renderWithRouter';

describe('Teste Pokedex', () => {
  test('É possível clicar no botão de filtragem All', () => {
    renderWithRouter(<App />);

    const all = screen.getByRole('button', { name: 'All' });
    expect(all).toBeInTheDocument();
    userEvent.click(all);
  });

  test('Os botões de filtragem por tipo possuem o nome correto', () => {
    renderWithRouter(<App />);

    const array = screen.getAllByTestId('pokemon-type-button');

    const pokemonsElements = ['Electric', 'Fire', 'Bug', 'Poison',
      'Psychic', 'Normal', 'Dragon'];

    array.forEach((element, index) => {
      expect(element).toHaveTextContent(pokemonsElements[index]);
    });
  });
});

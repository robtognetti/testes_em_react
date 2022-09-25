import { render, screen } from '@testing-library/react';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import About from '../pages/About';

describe('Teste se a página contém as informações sobre a Pokédex', () => {
  beforeEach(() => {
    render(<MemoryRouter><About /></MemoryRouter>);
  });

  test('Teste se a página contém um heading h2 com o texto About Pokédex', () => {
    const h2 = screen.getByRole('heading', {
      name: /About Pokédex/i,
      level: 2,
    });
    expect(h2).toBeInTheDocument();
  });
  test('Teste se a página contém a seguinte imagem de uma Pokédex', () => {
    const img = screen.getByAltText(/Pokédex/i);
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute('src', 'https://cdn2.bulbagarden.net/upload/thumb/8/86/Gen_I_Pok%C3%A9dex.png/800px-Gen_I_Pok%C3%A9dex.png');
  });
});

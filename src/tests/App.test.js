import { render, screen } from '@testing-library/react';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';

import App from '../App';

describe('Teste o componente App', () => {
  beforeEach(() => {
    render(<MemoryRouter><App /></MemoryRouter>);
  });
  test('Testa se o topo da aplicação contém conjunto fixo de links de navegação', () => {
    const linkHome = screen.getByText(/home/i);
    const linkAbout = screen.getByText(/about/i);
    const linkFavorite = screen.getByText(/Favorite Pokémons/i);
    expect(linkHome).toBeInTheDocument();
    expect(linkAbout).toBeInTheDocument();
    expect(linkFavorite).toBeInTheDocument();
    userEvent.click(linkHome);
    userEvent.click(linkAbout);
    userEvent.click(linkFavorite);
  });
});

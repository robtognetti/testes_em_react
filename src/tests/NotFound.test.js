import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouter from '../renderWithRouter';
import NotFound from '../pages/NotFound';

describe('Teste Not Found', () => {
  test('Teste h2', () => {
    renderWithRouter(<NotFound />);
    const h2 = screen.getByRole('heading', {
      name: 'Page requested not found',
      level: 2,
    });
    expect(h2).toBeInTheDocument();
  });
  test('Teste Imagem', () => {
    renderWithRouter(<NotFound />);
    const img = screen.getByRole('img');
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute(
      'src',
      'https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif',
    );
  });
});

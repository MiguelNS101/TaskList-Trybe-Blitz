/* eslint-disable no-undef */
import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from '../components/Header';

test('1 - Crie componente Header', () => {
  render(<Header />);
  const linkElement = screen.getByText(/Header/i);
  expect(linkElement).toBeInTheDocument();
});

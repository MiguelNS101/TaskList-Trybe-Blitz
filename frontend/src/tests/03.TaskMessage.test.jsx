/* eslint-disable no-undef */
import React from 'react';
import { render, screen } from '@testing-library/react';
import TaskMessage from '../components/TaskMessage';

test('1 - Crie componente TaskMessage', () => {
  render(<TaskMessage />);
  const linkElement = screen.getByTestId('message');
  expect(linkElement).toBeInTheDocument();
});

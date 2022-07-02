/* eslint-disable no-undef */
import React from 'react';
import { render, screen } from '@testing-library/react';
import TaskTitle from '../components/TaskTitle';

test('1 - Crie componente TaskTitle', () => {
  render(<TaskTitle />);
  const linkElement = screen.getByTestId('title');
  expect(linkElement).toBeInTheDocument();
});

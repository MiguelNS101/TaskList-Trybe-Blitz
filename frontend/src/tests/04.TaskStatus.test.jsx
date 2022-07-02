/* eslint-disable no-undef */
import React from 'react';
import { render, screen } from '@testing-library/react';
import TaskStatus from '../components/TaskStatus';

test('1 - Crie componente TaskStatus', () => {
  render(<TaskStatus />);
  const linkElement = screen.getByTestId('status');
  expect(linkElement).toBeInTheDocument();
});

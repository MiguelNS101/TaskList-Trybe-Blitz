/* eslint-disable no-undef */
import React from 'react';
import { render, screen } from '@testing-library/react';
import Tasklist from '../components/Tasklist';

test('1 - Crie componente createTask', () => {
  render(<Tasklist />);
  const linkElement = screen.getByTestId('createTask');
  expect(linkElement).toBeInTheDocument();
});

test('2 - Crie componente sortTask', () => {
  render(<Tasklist />);
  const linkElement = screen.getByTestId('sortTask');
  expect(linkElement).toBeInTheDocument();
});

test('3 - Crie componente taskList', () => {
  render(<Tasklist />);
  const linkElement = screen.getByTestId('taskList');
  expect(linkElement).toBeInTheDocument();
});

import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test(' Render Tic Tac Toe App by Teboho Mosuhli', () => {
  render(<App />);
  const testElement = screen.getByText(/Tic Tac Toe App by Teboho Mosuhli/i);
  expect(testElement).toBeInTheDocument();
});

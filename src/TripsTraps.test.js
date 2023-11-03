import React from 'react';
import { render, fireEvent, screen} from '@testing-library/react';
import App from './App';



test('clicking on a square updates the board', () => {
  render(<App />);
  const squareElement = screen.getByTestId('square-0');
  fireEvent.click(squareElement);
  expect(screen.getByTestId("square-0")).toHaveTextContent("X");
  //const statusElement = getByText(/Next player/i);
  //expect(statusElement).toHaveTextContent(/O/i);

});

test('2 x vajutus vasakult paremale, tulemuseks tuleb x ja o', () => {
  render(<App />);
  const ruut1 = screen.getByTestId('square-0');
  fireEvent.click(ruut1);
  expect(screen.getByTestId("square-0")).toHaveTextContent("X");

  const ruut2 = screen.getByTestId('square-1');
  fireEvent.click(ruut2);
  expect(screen.getByTestId("square-1")).toHaveTextContent("O");

});

test('2 x vajutus esimesele ruudule, peab jääma alles X', () => {
  render(<App />);
  const ruut1 = screen.getByTestId('square-0');
  fireEvent.click(ruut1);
  fireEvent.click(ruut1);
  expect(screen.getByTestId("square-0")).toHaveTextContent("X");

});


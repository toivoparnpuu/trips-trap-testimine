import React from 'react';
import { render, fireEvent, screen} from '@testing-library/react';
import App from './App';

test('kontrollime kas liigutusi saab tagasi võtta', () => {
  render(<App />);
  const ruut0 = screen.getByTestId('square-0');
  const ruut1 = screen.getByTestId('square-1');
  const ruut2 = screen.getByTestId('square-2');


  expect(screen.getByTestId('game-info-0')).toHaveTextContent("Go to game start");
  fireEvent.click(ruut0);
  expect(screen.getByTestId("square-0")).toHaveTextContent("X"); 
  expect(screen.getByTestId("status")).toHaveTextContent("Next player: O");
  expect(screen.getByTestId('game-info-1')).toHaveTextContent("Go to move #1");

  fireEvent.click(ruut1);
  expect(screen.getByTestId("square-1")).toHaveTextContent("O");
  expect(screen.getByTestId("status")).toHaveTextContent("Next player: X");
  expect(screen.getByTestId('game-info-2')).toHaveTextContent("Go to move #2");

  fireEvent.click(ruut2);
  expect(screen.getByTestId("square-2")).toHaveTextContent("X");
  expect(screen.getByTestId("status")).toHaveTextContent("Next player: O");
  expect(screen.getByTestId('game-info-3')).toHaveTextContent("Go to move #3");

  fireEvent.click(screen.getByTestId('game-info-1'));
  expect(screen.getByTestId("square-0")).toHaveTextContent("X");
  expect(screen.getByTestId("status")).toHaveTextContent("Next player: O");


  
  

});
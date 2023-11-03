import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import App from "./App";

test("clicking on a square updates the board", () => {
  render(<App />);
  const squareElement = screen.getByTestId("square-0");
  fireEvent.click(squareElement);
  expect(screen.getByTestId("square-0")).toHaveTextContent("X");
  //const statusElement = getByText(/Next player/i);
  //expect(statusElement).toHaveTextContent(/O/i);
});

test("2 x vajutus vasakult paremale, tulemuseks tuleb x ja o", () => {
  render(<App />);
  const ruut1 = screen.getByTestId("square-0");
  fireEvent.click(ruut1);
  expect(screen.getByTestId("square-0")).toHaveTextContent("X");

  const ruut2 = screen.getByTestId("square-1");
  fireEvent.click(ruut2);
  expect(screen.getByTestId("square-1")).toHaveTextContent("O");
});

test("2 x vajutus esimesele ruudule, peab jääma alles X", () => {
  render(<App />);
  const ruut1 = screen.getByTestId("square-0");
  fireEvent.click(ruut1);
  fireEvent.click(ruut1);
  expect(screen.getByTestId("square-0")).toHaveTextContent("X");
});

test("7 sammu võiduni", () => {
  render(<App />);
  const ruut0 = screen.getByTestId("square-0");
  const ruut1 = screen.getByTestId("square-1");
  const ruut2 = screen.getByTestId("square-2");
  const ruut3 = screen.getByTestId("square-3");
  const ruut4 = screen.getByTestId("square-4");
  const ruut5 = screen.getByTestId("square-5");
  const ruut6 = screen.getByTestId("square-6");

  fireEvent.click(ruut0);
  fireEvent.click(ruut1);
  fireEvent.click(ruut2);
  fireEvent.click(ruut3);
  fireEvent.click(ruut4);
  fireEvent.click(ruut5);
  fireEvent.click(ruut6);

  const statusElement = screen.getByTestId("status");
  expect(statusElement).toHaveTextContent(/Winner: X/i);
});

test("kontrollime staatus teadet ja mängu", () => {
  render(<App />);
  const ruut0 = screen.getByTestId("square-0");
  const ruut1 = screen.getByTestId("square-1");
  const ruut2 = screen.getByTestId("square-2");
  const ruut3 = screen.getByTestId("square-3");
  const ruut4 = screen.getByTestId("square-4");
  const ruut5 = screen.getByTestId("square-5");
  const ruut6 = screen.getByTestId("square-6");

  fireEvent.click(ruut0);
  expect(screen.getByTestId("square-0")).toHaveTextContent("X");
  expect(screen.getByTestId("status")).toHaveTextContent("Next player: O");
  fireEvent.click(ruut1);
  expect(screen.getByTestId("square-1")).toHaveTextContent("O");
  expect(screen.getByTestId("status")).toHaveTextContent("Next player: X");
  fireEvent.click(ruut2);
  expect(screen.getByTestId("square-2")).toHaveTextContent("X");
  expect(screen.getByTestId("status")).toHaveTextContent("Next player: O");
  fireEvent.click(ruut3);
  expect(screen.getByTestId("square-3")).toHaveTextContent("O");
  expect(screen.getByTestId("status")).toHaveTextContent("Next player: X");
  fireEvent.click(ruut4);
  expect(screen.getByTestId("square-4")).toHaveTextContent("X");
  expect(screen.getByTestId("status")).toHaveTextContent("Next player: O");
  fireEvent.click(ruut5);
  expect(screen.getByTestId("square-5")).toHaveTextContent("O");
  expect(screen.getByTestId("status")).toHaveTextContent("Next player: X");
  fireEvent.click(ruut6);
  expect(screen.getByTestId("square-6")).toHaveTextContent("X");
  expect(screen.getByTestId("status")).toHaveTextContent("Winner: X");
});

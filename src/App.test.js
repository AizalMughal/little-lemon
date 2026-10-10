import { render, screen } from '@testing-library/react';
import App from './App';
import { initializeTimes, updateTimes } from './components/Main';

test('renders Little Lemon booking heading', () => {
  render(<App />);
  // Aap navigation ya welcome message check kar sakte hain
  const linkElement = screen.getByText(/Little Lemon/i);
  expect(linkElement).toBeInTheDocument();
});

test('initializeTimes returns expected initial available times', () => {
  const initialTimes = initializeTimes();
  expect(initialTimes.length).toBeGreaterThan(0);
  expect(initialTimes).toContain('17:00');
});

test('updateTimes returns the same state regardless of action', () => {
  const currentState = ['17:00', '18:00'];
  const action = { type: 'UPDATE_TIMES', date: '2026-10-15' };
  const newState = updateTimes(currentState, action);
  expect(newState).toEqual(['17:00', '18:00', '19:00', '20:00', '21:00', '22:00']);
});
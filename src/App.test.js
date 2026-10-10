import { render, screen } from '@testing-library/react';
import { initializeTimes, updateTimes } from './components/Main';
import BookingForm from './components/BookingForm';

/* 1. Test for rendering the BookingForm heading */
test('Renders the BookingForm heading', () => {
  render(<BookingForm availableTimes={['17:00', '18:00']} dispatch={() => {}} />);
  const headingElement = screen.getByText("Reserve a Table");
  expect(headingElement).toBeInTheDocument();
});

/* 2. Test for initializeTimes */
test('initializeTimes returns expected available times from fetchAPI', () => {
  const times = initializeTimes();
  expect(times).not.toBeNull();
  expect(Array.isArray(times)).toBe(true);
  expect(times.length).toBeGreaterThan(0);
});

/* 3. Test for updateTimes */
test('updateTimes returns available times for the selected date', () => {
  const initialState = ['17:00', '18:00'];
  const action = { type: 'UPDATE_TIMES', date: '2026-06-06' };
  const updatedTimes = updateTimes(initialState, action);

  expect(updatedTimes).not.toBeNull();
  expect(Array.isArray(updatedTimes)).toBe(true);
  expect(updatedTimes.length).toBeGreaterThan(0);
});
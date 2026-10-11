import { render, screen, fireEvent } from '@testing-library/react';
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
  const action = { type: 'UPDATE_TIMES', date: '2026-06-01' };
  const result = updateTimes(initialState, action);
  expect(Array.isArray(result)).toBe(true);
});

/* 4. Test for HTML5 validation attributes */
test('HTML5 validation attributes are correctly applied to form fields', () => {
  render(<BookingForm availableTimes={['17:00', '18:00']} dispatch={() => {}} />);
  
  const dateInput = screen.getByLabelText(/Choose date/i);
  expect(dateInput).toHaveAttribute('required');
  expect(dateInput).toHaveAttribute('type', 'date');

  const guestsInput = screen.getByLabelText(/Number of guests/i);
  expect(guestsInput).toHaveAttribute('required');
  expect(guestsInput).toHaveAttribute('type', 'number');
  expect(guestsInput).toHaveAttribute('min', '1');
  expect(guestsInput).toHaveAttribute('max', '10');

  const occasionSelect = screen.getByLabelText(/Occasion/i);
  expect(occasionSelect).toHaveAttribute('required');
});

/* 5. Test for React validation and submit button states */
test('Submit button is disabled initially and enabled when valid data is entered', () => {
  render(<BookingForm availableTimes={['17:00', '18:00']} dispatch={() => {}} />);

  const submitButton = screen.getByRole('button', { name: /On Click/i });
  
  // Initially disabled because date and occasion are empty
  expect(submitButton).toBeDisabled();

  // Fill in valid data
  const dateInput = screen.getByLabelText(/Choose date/i);
  fireEvent.change(dateInput, { target: { value: '2026-06-01' } });

  const guestsInput = screen.getByLabelText(/Number of guests/i);
  fireEvent.change(guestsInput, { target: { value: '3' } });

  const occasionSelect = screen.getByLabelText(/Occasion/i);
  fireEvent.change(occasionSelect, { target: { value: 'Birthday' } });

  // Now the submit button should be enabled
  expect(submitButton).not.toBeDisabled();
});
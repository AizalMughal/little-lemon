import React, { useState } from 'react';

function BookingForm({ availableTimes, dispatch }) {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState('');

  const handleDateChange = (e) => {
    const selectedDate = e.target.value;
    setDate(selectedDate);
    if (dispatch) {
      dispatch({ type: 'UPDATE_TIMES', date: selectedDate });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Reservation Confirmed!\nDate: ${date}\nTime: ${time}\nGuests: ${guests}\nOccasion: ${occasion || 'None'}`);
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: 'grid', maxWidth: '400px', gap: '20px', margin: '30px auto' }}>
      <h2>Reserve a Table</h2>

      <label htmlFor="res-date">Choose date</label>
      <input
        type="date"
        id="res-date"
        value={date}
        onChange={handleDateChange}
        required
      />

      <label htmlFor="res-time">Choose time</label>
      <select
        id="res-time"
        value={time}
        onChange={(e) => setTime(e.target.value)}
        required
      >
        <option value="">Select a time</option>
        {availableTimes && availableTimes.map((t) => (
          <option key={t} value={t}>{t}</option>
        ))}
      </select>

      <label htmlFor="guests">Number of guests</label>
      <input
        type="number"
        placeholder="1"
        min="1"
        max="10"
        id="guests"
        value={guests}
        onChange={(e) => setGuests(e.target.value)}
        required
      />

      {/* Figma Animated / Custom Styled Occasion Dropdown */}
      <label htmlFor="occasion">Occasion</label>
      <select
        id="occasion"
        className={`occasion-dropdown ${occasion ? 'selected' : ''}`}
        value={occasion}
        onChange={(e) => setOccasion(e.target.value)}
        required
      >
        <option value="">Select Occasion</option>
        <option value="Birthday">Birthday 🎂</option>
        <option value="Engagement">Engagement 💍</option>
        <option value="Anniversary">Anniversary 🎉</option>
      </select>

      <input
        type="submit"
        value="Make Your Reservation"
        className="btn-primary"
        style={{ marginTop: '10px', cursor: 'pointer' }}
      />
    </form>
  );
}

export default BookingForm;
import React, { useState } from 'react';

export default function BookingForm({ availableTimes, dispatch, submitForm }) {
  const [date, setDate] = useState('');
  const [time, setTime] = useState(availableTimes[0] || '17:00');
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState('Birthday');

  const handleDateChange = (e) => {
    const selectedDate = e.target.value;
    setDate(selectedDate);
    dispatch({ type: 'UPDATE_TIMES', date: selectedDate });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = { date, time, guests, occasion };
    if (submitForm) {
      submitForm(formData);
    }
  };

  return (
    <div style={{ maxWidth: '600px', margin: '40px auto', padding: '30px', backgroundColor: '#EDEFEE', borderRadius: '16px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}>
      <h2 style={{ fontFamily: 'Markazi Text', fontSize: '2.5rem', color: '#495E57', textAlign: 'center', marginBottom: '20px' }}>
        Reserve a Table
      </h2>
      <form onSubmit={handleSubmit} style={{ display: 'grid', gap: '20px' }}>
        <div>
          <label htmlFor="res-date" style={{ display: 'block', fontWeight: 'bold', marginBottom: '8px', color: '#333' }}>
            Choose date
          </label>
          <input
            type="date"
            id="res-date"
            value={date}
            onChange={handleDateChange}
            required
            style={{ width: '100%', padding: '10px', borderRadius: '8px', border: '1px solid #ccc' }}
          />
        </div>

        <div>
          <label htmlFor="res-time" style={{ display: 'block', fontWeight: 'bold', marginBottom: '8px', color: '#333' }}>
            Choose time
          </label>
          <select
            id="res-time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            required
            style={{ width: '100%', padding: '10px', borderRadius: '8px', border: '1px solid #ccc' }}
          >
            {availableTimes.map((availableTime, index) => (
              <option key={index} value={availableTime}>
                {availableTime}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="guests" style={{ display: 'block', fontWeight: 'bold', marginBottom: '8px', color: '#333' }}>
            Number of guests
          </label>
          <input
            type="number"
            placeholder="1"
            min="1"
            max="10"
            id="guests"
            value={guests}
            onChange={(e) => setGuests(e.target.value)}
            required
            style={{ width: '100%', padding: '10px', borderRadius: '8px', border: '1px solid #ccc' }}
          />
        </div>

        <div>
          <label htmlFor="occasion" style={{ display: 'block', fontWeight: 'bold', marginBottom: '8px', color: '#333' }}>
            Occasion
          </label>
          <select
            id="occasion"
            value={occasion}
            onChange={(e) => setOccasion(e.target.value)}
            style={{ width: '100%', padding: '10px', borderRadius: '8px', border: '1px solid #ccc' }}
          >
            <option value="Birthday">Birthday</option>
            <option value="Anniversary">Anniversary</option>
          </select>
        </div>

        <button
          type="submit"
          aria-label="On Click"
          className="btn-primary"
          style={{ width: '100%', padding: '12px', fontSize: '1rem', marginTop: '10px' }}
        >
          Make Your Reservation
        </button>
      </form>
    </div>
  );
}
import React, { useState } from 'react';

export default function BookingForm({ availableTimes, dispatch, submitForm }) {
  const [date, setDate] = useState('');
  const [time, setTime] = useState(availableTimes[0] || '17:00');
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState('');

  const handleDateChange = (e) => {
    const selectedDate = e.target.value;
    setDate(selectedDate);
    dispatch({ type: 'UPDATE_TIMES', date: selectedDate });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (date && time && occasion && guests >= 1 && guests <= 10) {
      const formData = { date, time, guests, occasion };
      if (submitForm) {
        submitForm(formData);
      }
    }
  };

  const isFormValid = date !== '' && time !== '' && occasion !== '' && guests >= 1 && guests <= 10 && availableTimes.length > 0;

  return (
    <main style={{ maxWidth: '600px', margin: '40px auto', padding: '30px', backgroundColor: '#EDEFEE', borderRadius: '16px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}>
      <h2 style={{ fontFamily: 'Markazi Text', fontSize: '2.5rem', color: '#495E57', textAlign: 'center', marginBottom: '20px' }}>
        Reserve a Table
      </h2>
      <form onSubmit={handleSubmit} style={{ display: 'grid', gap: '20px' }} noValidate>
        
        <fieldset style={{ border: 'none', padding: 0, margin: 0, display: 'grid', gap: '20px' }}>
          <legend style={{ position: 'absolute', width: '1px', height: '1px', padding: '0', margin: '-1px', overflow: 'hidden', clip: 'rect(0,0,0,0.0)', whiteSpace: 'nowrap', border: '0' }}>
            Table Reservation Details
          </legend>

          <div>
            <label htmlFor="res-date" style={{ display: 'block', fontWeight: 'bold', marginBottom: '8px', color: '#333' }}>
              Choose date <span style={{ color: 'red' }}>*</span>
            </label>
            <input
              type="date"
              id="res-date"
              value={date}
              onChange={handleDateChange}
              required
              style={{ width: '100%', padding: '10px', borderRadius: '8px', border: '1px solid #ccc' }}
            />
            {!date && <small style={{ color: '#d9534f' }}>Please choose a valid date.</small>}
          </div>

          <div>
            <label htmlFor="res-time" style={{ display: 'block', fontWeight: 'bold', marginBottom: '8px', color: '#333' }}>
              Choose time <span style={{ color: 'red' }}>*</span>
            </label>
            <select
              id="res-time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              required
              style={{ width: '100%', padding: '10px', borderRadius: '8px', border: '1px solid #ccc' }}
            >
              {availableTimes.length > 0 ? (
                availableTimes.map((availableTime, index) => (
                  <option key={index} value={availableTime}>
                    {availableTime}
                  </option>
                ))
              ) : (
                <option value="">No times available</option>
              )}
            </select>
          </div>

          <div>
            <label htmlFor="guests" style={{ display: 'block', fontWeight: 'bold', marginBottom: '8px', color: '#333' }}>
              Number of guests <span style={{ color: 'red' }}>*</span>
            </label>
            <input
              type="number"
              placeholder="1"
              min="1"
              max="10"
              id="guests"
              value={guests}
              onChange={(e) => setGuests(Number(e.target.value))}
              required
              style={{ width: '100%', padding: '10px', borderRadius: '8px', border: '1px solid #ccc' }}
            />
            {(guests < 1 || guests > 10) && (
              <small style={{ color: '#d9534f' }}>Please enter between 1 and 10 guests.</small>
            )}
          </div>

          <div>
            <label htmlFor="occasion" style={{ display: 'block', fontWeight: 'bold', marginBottom: '8px', color: '#333' }}>
              Occasion <span style={{ color: 'red' }}>*</span>
            </label>
            <select
              id="occasion"
              value={occasion}
              onChange={(e) => setOccasion(e.target.value)}
              required
              style={{ width: '100%', padding: '10px', borderRadius: '8px', border: '1px solid #ccc' }}
            >
              <option value="" disabled>
                Select occasion
              </option>
              <option value="Birthday">Birthday</option>
              <option value="Anniversary">Anniversary</option>
              <option value="Engagement">Engagement</option>
              <option value="Wedding">Wedding</option>
              <option value="Other">Other</option>
            </select>
            {!occasion && <small style={{ color: '#d9534f' }}>Please select an occasion.</small>}
          </div>

        </fieldset>

        <button
          type="submit"
          disabled={!isFormValid}
          aria-label="On Click"
          className="btn-primary"
          style={{
            width: '100%',
            padding: '12px',
            fontSize: '1rem',
            marginTop: '10px',
            backgroundColor: isFormValid ? '#F4CE14' : '#cccccc',
            cursor: isFormValid ? 'pointer' : 'not-allowed',
            color: isFormValid ? '#333333' : '#666666',
            border: 'none',
            borderRadius: '8px',
            fontWeight: 'bold'
          }}
        >
          Make Your Reservation
        </button>
      </form>
    </main>
  );
}
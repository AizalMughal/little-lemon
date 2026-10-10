import React, { useReducer } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import BookingPage from './BookingPage';

export function initializeTimes() {
  return ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
}

export function updateTimes(state, action) {
  if (action.type === 'UPDATE_TIMES') {
    return ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
  }
  return state;
}

function HomePage() {
  const navigate = useNavigate();

  return (
    <>
      {/* 1. Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>
          <p>
            We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.
          </p>
          <button onClick={() => navigate('/booking')} className="btn-primary">
            Reserve a Table
          </button>
        </div>
        <div className="hero-image">
          <div className="img-placeholder">Restaurant Food Image</div>
        </div>
      </section>

      {/* 2. Highlights Section */}
      <section className="highlights-section">
        <div className="highlights-header">
          <h2>This weeks specials!</h2>
          <button className="btn-primary">Online Menu</button>
        </div>
        <div className="cards-grid">
          <div className="card">
            <div className="card-img">Greek Salad Image</div>
            <div className="card-content">
              <div className="card-title">
                <h3>Greek salad</h3>
                <span className="price">$12.99</span>
              </div>
              <p>The famous greek salad of crispy romaine lettuce, onions, olives and feta cheese.</p>
            </div>
          </div>
          <div className="card">
            <div className="card-img">Bruchetta Image</div>
            <div className="card-content">
              <div className="card-title">
                <h3>Bruchetta</h3>
                <span className="price">$5.99</span>
              </div>
              <p>Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned.</p>
            </div>
          </div>
          <div className="card">
            <div className="card-img">Lemon Dessert Image</div>
            <div className="card-content">
              <div className="card-title">
                <h3>Lemon Dessert</h3>
                <span className="price">$5.00</span>
              </div>
              <p>This comes straight from grandma's recipe book, every last ingredient has been sourced.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Testimonials Section */}
      <section className="testimonials-section">
        <h2>Testimonials</h2>
        <div className="reviews-grid">
          <div className="review-card">
            <h4>Rating: ★★★★★</h4>
            <p><strong>Sara K.</strong></p>
            <p>"Awesome food and great ambiance!"</p>
          </div>
          <div className="review-card">
            <h4>Rating: ★★★★★</h4>
            <p><strong>John D.</strong></p>
            <p>"Best Mediterranean food in town!"</p>
          </div>
          <div className="review-card">
            <h4>Rating: ★★★★★</h4>
            <p><strong>Aizal M.</strong></p>
            <p>"Loved the table reservation experience."</p>
          </div>
        </div>
      </section>

      {/* 4. About Section */}
      <section className="about-section">
        <div className="about-content">
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>
          <p>
            Little Lemon is owned by two Italian brothers, Mario and Adrian, who moved to the United States to start their dream restaurant.
          </p>
        </div>
        <div className="about-images">
          <div className="img-placeholder">Mario and Adrian</div>
        </div>
      </section>
    </>
  );
}

function Main() {
  const [availableTimes, dispatch] = useReducer(updateTimes, [], initializeTimes);

  return (
    <main>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/booking"
          element={<BookingPage availableTimes={availableTimes} dispatch={dispatch} />}
        />
      </Routes>
    </main>
  );
}

export default Main;
import React, { useReducer } from 'react';
import restauranfood from '../icons_assets/restauranfood.jpg';
import greekSalad from '../icons_assets/greek salad.jpg';
import bruchetta from '../icons_assets/bruchetta.svg';
import lemonDessert from '../icons_assets/lemon dessert.jpg';
import deliveryIcon from '../icons_assets/Dish icon.svg';
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
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-container">
          <div className="hero-content">
            <h1>Little Lemon</h1>
            <h2>Chicago</h2>
            <p>
              We are a family owned Mediterranean restaurant, focused on traditional
              recipes served with a modern twist.
            </p>
            <button onClick={() => navigate('/booking')} className="btn-primary">
              Reserve a Table
            </button>
          </div>
          <div className="hero-image-wrapper">
            <img src={restauranfood} alt="Restaurant Food" />
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="highlights-section">
        <div className="highlights-header">
          <h2>This weeks specials!</h2>
          <button className="btn-primary">Online Menu</button>
        </div>
        <div className="cards-grid">
          {/* Card 1 */}
          <div className="card">
            <div className="card-img">
              <img src={greekSalad} alt="Greek Salad" />
            </div>
            <div className="card-content">
              <div className="card-title">
                <h3>Greek salad</h3>
                <span className="price">$12.99</span>
              </div>
              <p>
                The famous greek salad of crispy lettuce, peppers, olives and our
                Chicago style feta cheese, garnished with crunchy garlic and rosemary
                croutons.
              </p>
              <div className="card-delivery">
                <span>Order a delivery</span>
                <img src={deliveryIcon} alt="Delivery" />
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="card">
            <div className="card-img">
              <img src={bruchetta} alt="Bruschetta" />
            </div>
            <div className="card-content">
              <div className="card-title">
                <h3>Bruschetta</h3>
                <span className="price">$5.99</span>
              </div>
              <p>
                Our Bruschetta is made from grilled bread that has been smeared with garlic
                and seasoned with salt and olive oil.
              </p>
              <div className="card-delivery">
                <span>Order a delivery</span>
                <img src={deliveryIcon} alt="Delivery" />
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="card">
            <div className="card-img">
              <img src={lemonDessert} alt="Lemon Dessert" />
            </div>
            <div className="card-content">
              <div className="card-title">
                <h3>Lemon Dessert</h3>
                <span className="price">$5.00</span>
              </div>
              <p>
                This comes straight from grandma's recipe book, every last ingredient
                has been sourced and is as authentic as can be imagined.
              </p>
              <div className="card-delivery">
                <span>Order a delivery</span>
                <img src={deliveryIcon} alt="Delivery" />
              </div>
            </div>
          </div>
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
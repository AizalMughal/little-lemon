import React, { useReducer } from 'react';
import restauranfood from '../icons_assets/restauranfood.jpg';
import greekSalad from '../icons_assets/greek salad.jpg';
import bruchetta from '../icons_assets/bruchetta.svg';
import lemonDessert from '../icons_assets/lemon dessert.jpg';
import deliveryIcon from '../icons_assets/Dish icon.svg';
import marioAdrian from '../icons_assets/restaurant chef B.jpg';
import { Routes, Route, useNavigate } from 'react-router-dom';
import BookingPage from './BookingPage';

export function initializeTimes() {
  const today = new Date();
  return window.fetchAPI ? window.fetchAPI(today) : ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
}

export function updateTimes(state, action) {
  if (action.type === 'UPDATE_TIMES') {
    const selectedDate = new Date(action.date);
    return window.fetchAPI ? window.fetchAPI(selectedDate) : state;
  }
  return state;
}

/* ConfirmedBooking Component (Step 1) */
function ConfirmedBooking() {
  return (
    <div style={{ maxWidth: '600px', margin: '60px auto', padding: '40px', backgroundColor: '#EDEFEE', borderRadius: '16px', textAlign: 'center', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}>
      <h1 style={{ fontFamily: 'Markazi Text', fontSize: '3rem', color: '#495E57', marginBottom: '20px' }}>
        Booking Confirmed!
      </h1>
      <p style={{ fontSize: '1.1rem', color: '#333333', lineHeight: '1.6' }}>
        Thank you for reserving a table at Little Lemon. Your booking has been successfully confirmed. We look forward to seeing you!
      </p>
    </div>
  );
}

function CallToAction() {
  const navigate = useNavigate();
  return (
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
  );
}

function Specials() {
  return (
    <section className="highlights-section">
      <div className="highlights-header">
        <h2>This weeks specials!</h2>
        <button className="btn-primary">Online Menu</button>
      </div>
      <div className="cards-grid">
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
  );
}

function CustomersSay() {
  return (
    <section className="testimonials-section" style={{ maxWidth: '860px', margin: '0 auto 60px auto', padding: '40px', backgroundColor: '#495E57', borderRadius: '16px', color: '#EDEFEE', textAlign: 'center' }}>
      <h2 style={{ fontFamily: 'Markazi Text', fontSize: '2.5rem', color: '#F4CE14', marginBottom: '30px' }}>Testimonials</h2>
      <div className="reviews-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '20px' }}>
        <div className="review-card" style={{ backgroundColor: '#ffffff', color: '#333333', padding: '20px', borderRadius: '10px', textAlign: 'left' }}>
          <h4 style={{ margin: '0 0 10px 0', color: '#F4CE14' }}>★★★★★</h4>
          <p style={{ fontWeight: 'bold', marginBottom: '8px' }}>Sara K.</p>
          <p style={{ fontSize: '0.9rem', color: '#666' }}>"Awesome food and great ambiance!"</p>
        </div>
        <div className="review-card" style={{ backgroundColor: '#ffffff', color: '#333333', padding: '20px', borderRadius: '10px', textAlign: 'left' }}>
          <h4 style={{ margin: '0 0 10px 0', color: '#F4CE14' }}>★★★★★</h4>
          <p style={{ fontWeight: 'bold', marginBottom: '8px' }}>John D.</p>
          <p style={{ fontSize: '0.9rem', color: '#666' }}>"Best Mediterranean food in town!"</p>
        </div>
        <div className="review-card" style={{ backgroundColor: '#ffffff', color: '#333333', padding: '20px', borderRadius: '10px', textAlign: 'left' }}>
          <h4 style={{ margin: '0 0 10px 0', color: '#F4CE14' }}>★★★★★</h4>
          <p style={{ fontWeight: 'bold', marginBottom: '8px' }}>Aizal M.</p>
          <p style={{ fontSize: '0.9rem', color: '#666' }}>"Loved the table reservation experience."</p>
        </div>
      </div>
    </section>
  );
}

function Chicago() {
  return (
    <section className="about-section" style={{ maxWidth: '860px', margin: '0 auto 60px auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0 20px' }}>
      <div className="about-content" style={{ maxWidth: '450px' }}>
        <h1 style={{ fontFamily: 'Markazi Text', fontSize: '3rem', color: '#495E57', margin: '0' }}>Little Lemon</h1>
        <h2 style={{ fontFamily: 'Markazi Text', fontSize: '2rem', color: '#333333', margin: '0 0 15px 0' }}>Chicago</h2>
        <p style={{ color: '#333333', lineHeight: '1.5' }}>
          Little Lemon is owned by two Italian brothers, Mario and Adrian, who moved to the United States to start their dream restaurant. Based in Chicago, the restaurant focuses on traditional recipes served with a modern twist, using locally sourced ingredients to create authentic Mediterranean flavors.
        </p>
      </div>
      <div className="about-images" style={{ width: '280px', height: '280px', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 4px 10px rgba(0,0,0,0.15)' }}>
        <img src={marioAdrian} alt="Mario and Adrian" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
      </div>
    </section>
  );
}

function HomePage() {
  return (
    <>
      <CallToAction />
      <Specials />
      <CustomersSay />
      <Chicago />
    </>
  );
}

function Main() {
  const [availableTimes, dispatch] = useReducer(updateTimes, [], initializeTimes);
  const navigate = useNavigate();

  /* submitForm function (Step 2) */
  const submitForm = (formData) => {
    const success = window.submitAPI ? window.submitAPI(formData) : true;
    if (success) {
      navigate('/confirmed');
    }
  };

  return (
    <main>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/booking"
          element={
            <BookingPage
              availableTimes={availableTimes}
              dispatch={dispatch}
              submitForm={submitForm}
            />
          }
        />
        <Route path="/confirmed" element={<ConfirmedBooking />} />
      </Routes>
    </main>
  );
}

export default Main;
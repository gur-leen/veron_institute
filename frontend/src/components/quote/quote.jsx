import React, { useState } from 'react';
import './quote.css';

const GetQuote = () => {
  const [formData, setFormData] = useState({
    name: '',
    whatsappNumber: '',
    email: '',
    arrivalDate: '',
    departureDate: '',
    numberOfAdults: '',
    hotelCategory: '',
    destinations: '',
    paymentOption: '',
    country: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  return (
    <div className="quote-container">
      <h2>Get a Quote</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
          />
        </div>

        <div className="form-group">
          <label>WhatsApp Number</label>
          <input
            type="text"
            name="whatsappNumber"
            value={formData.whatsappNumber}
            onChange={handleChange}
            placeholder="Enter your WhatsApp number"
          />
        </div>

        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
          />
        </div>

        <div className="form-group">
          <label>Arrival Date & Time</label>
          <input
            type="datetime-local"
            name="arrivalDate"
            value={formData.arrivalDate}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Departure Date & Time</label>
          <input
            type="datetime-local"
            name="departureDate"
            value={formData.departureDate}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Number of Adults</label>
          <input
            type="number"
            name="numberOfAdults"
            value={formData.numberOfAdults}
            onChange={handleChange}
            placeholder="Enter number of adults"
          />
        </div>

        <div className="form-group">
          <label>Hotel Category</label>
          <select
            name="hotelCategory"
            value={formData.hotelCategory}
            onChange={handleChange}
          >
            <option value="">Select a category</option>
            <option value="budget">Budget</option>
            <option value="mid-range">Mid-Range</option>
            <option value="luxury">Luxury</option>
          </select>
        </div>

        <div className="form-group">
          <label>Destinations</label>
          <input
            type="text"
            name="destinations"
            value={formData.destinations}
            onChange={handleChange}
            placeholder="Enter your preferred destinations"
          />
        </div>

        <div className="form-group">
          <label>Payment Option</label>
          <select
            name="paymentOption"
            value={formData.paymentOption}
            onChange={handleChange}
          >
            <option value="">Select payment option</option>
            <option value="paypal">PayPal</option>
            <option value="visa">VISA</option>
          </select>
        </div>

        <div className="form-group">
          <label>Country</label>
          <input
            type="text"
            name="country"
            value={formData.country}
            onChange={handleChange}
            placeholder="Enter your country"
          />
        </div>

        <button type="submit">GET A QUOTE</button>
      </form>
    </div>
  );
};

export default GetQuote;
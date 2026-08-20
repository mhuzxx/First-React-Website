import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import "./ContactPage.css";

export default function GetInTouch() {
  const [formData, setFormData] = useState({
    fullName: '',
    workEmail: '',
    subject: '',
    message: ''
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // Map your form fields to match your EmailJS template variables
    const templateParams = {
      from_name: formData.fullName,
      from_email: formData.workEmail,
      subject: formData.subject || 'Free Consultation Booking',
      message: formData.message,
    };

    emailjs
      .send(
        'service_dq00fos', 
        'template_eoz5dli', 
        templateParams,
        'HeO2ASbmKksnL52Da'
      )
      .then(
        (response) => {
          console.log('SUCCESS!', response.status, response.text);
          alert('Thank you! Your consultation request has been sent.');
          // Reset form fields
          setFormData({ fullName: '', workEmail: '', subject: '', message: '' });
          setLoading(false);
        },
        (error) => {
          console.error('FAILED...', error);
          alert('Failed to send message. Please try again.');
          setLoading(false);
        }
      );
  };

  return (
    <section className="contact-wrapper">
      <div className="container">
        {/* Top Header */}
        <div className="top-header">
          <h1>Get In <span className="highlight-blue">Touch</span></h1>
        </div>

        {/* Content Section Grid */}
        <div className="content-grid">
          
          {/* Left Column */}
          <div className="left-info">
            <h2 className="info-title">
              Ready To Turn Your Vision Into Reality?
            </h2>
            <p className="info-desc">
              Want to blast your business off like a rocket? Tojo Global's got a secret weapon for you: an amazing custom Marketing, Management, Design, Development & Crypto listing plan which will turn heads and grow your business faster than ever.
            </p>

            {/* Contact Details */}
            <div className="contact-list">
              {/* Phone */}
              <div className="contact-item">
                <div className="icon-circle">
                  <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1.003 1.003 0 011.02-.24c1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                  </svg>
                </div>
                <span className="contact-text">+92 123 456 7890</span>
              </div>

              {/* Email */}
              <div className="contact-item">
                <div className="icon-circle">
                  <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                  </svg>
                </div>
                <span className="contact-text">info@codesthinker.com</span>
              </div>

              {/* Location 1 */}
              <div className="contact-item">
                <div className="icon-circle">
                  <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                  </svg>
                </div>
                <div className="contact-text">
                  Bartle House 9 Oxford Court, Manchester M23WQ<br />
                  United Kingdom (Regional Office)
                </div>
              </div>

              {/* Location 2 */}
              <div className="contact-item">
                <div className="icon-circle">
                  <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                  </svg>
                </div>
                <div className="contact-text">
                  Hassan Manzil Basement Goheer Town<br />
                  Bahawalpur (Global Delivery Center)
                </div>
              </div>
            </div>

            {/* Social Media Buttons */}
            <div className="social-links">
              <a href="#facebook" className="social-btn" aria-label="Facebook">
                <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H7.5v-3H10V9.5C10 7.01 11.49 5.6 13.78 5.6c1.1 0 2.25.2 2.25.2v2.48h-1.27c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.45 3h-2.33v6.8c4.56-.93 8-4.96 8-9.8z"/>
                </svg>
              </a>
              <a href="#twitter" className="social-btn" aria-label="Twitter">
                <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.05c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.58 8.58 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                </svg>
              </a>
              <a href="#instagram" className="social-btn" aria-label="Instagram">
                <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a href="#linkedin" className="social-btn" aria-label="LinkedIn">
                <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Right Column Form Card */}
          <div className="form-card">
            <h2 className="form-title">Book a Free Consultation</h2>
            
            <form onSubmit={handleSubmit}>
              {/* Full Name */}
              <div className="form-group">
                <label className="form-label">Full Name *</label>
                <input 
                  type="text" 
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Full Name" 
                  className="form-input" 
                  required 
                />
              </div>

              {/* Work Email */}
              <div className="form-group">
                <label className="form-label">Work Email *</label>
                <input 
                  type="email" 
                  name="workEmail"
                  value={formData.workEmail}
                  onChange={handleChange}
                  placeholder="Working Email" 
                  className="form-input" 
                  required 
                />
              </div>

              {/* Subject */}
              <div className="form-group">
                <label className="form-label">Subject</label>
                <input 
                  type="text" 
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Enter your subject" 
                  className="form-input" 
                />
              </div>

              {/* Message */}
              <div className="form-group">
                <label className="form-label">Message</label>
                <textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Describe your message here" 
                  className="form-textarea"
                ></textarea>
              </div>

              {/* Submit Button */}
              <div className="btn-wrapper">
                <button type="submit" className="submit-btn" disabled={loading}>
                  {loading ? 'SENDING...' : 'SUBMIT '}
                  {!loading && (
                    <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/>
                    </svg>
                  )}
                </button>
              </div>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
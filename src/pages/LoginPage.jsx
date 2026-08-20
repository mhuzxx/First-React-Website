import { useState } from 'react';
import Reveal from '../components/Reveal';
import './LoginPage.css';

export default function LoginPage() {
  const [form, setForm] = useState({ email: '', password: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="login-section">
      <Reveal as="div" className="login-card">
        <h1>Welcome Back</h1>
        <p>Log in to manage your projects with Code&apos;s Thinker.</p>

        <form onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            required
          />
          <button type="submit" className="btn btn-primary login-btn">
            {submitted ? 'Logged In!' : 'Login'}
          </button>
        </form>
      </Reveal>
    </section>
  );
}

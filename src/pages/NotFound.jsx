import { Link } from 'react-router-dom';
import './NotFound.css';

export default function NotFound() {
  return (
    <section className="notfound">
      <h1>404</h1>
      <p>The page you&apos;re looking for doesn&apos;t exist.</p>
      <Link to="/" className="btn btn-primary">Back to Home</Link>
    </section>
  );
}

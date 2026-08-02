import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="container" style={{ padding: '100px 24px', textAlign: 'center' }}>
      <h1 style={{ fontSize: '3rem' }}>404</h1>
      <p style={{ color: 'var(--ink-soft)', margin: '10px 0 24px' }}>Ye page nahi mila.</p>
      <Link className="btn" to="/">← Dashboard par jao</Link>
    </div>
  );
}

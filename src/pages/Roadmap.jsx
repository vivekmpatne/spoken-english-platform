import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import days from '../data/days.json';
import { getCompletedDays } from '../utils/storage';
import './Roadmap.css';

export default function Roadmap() {
  const [completed, setCompleted] = useState(new Set());
  useEffect(() => setCompleted(getCompletedDays()), []);

  const activeDays = days.filter((d) => d.topics.length > 0);

  return (
    <div className="container roadmap-page">
      <span className="eyebrow">Day 1 → Day 70</span>
      <h1>Zero To Hero Roadmap</h1>
      <p className="roadmap-sub">Har din ek naya grammar concept. Sequence follow karo, skip mat karo.</p>

      <div className="timeline">
        {activeDays.map((d, idx) => (
          <Link key={d.day} to={`/roadmap/day/${d.day}`} className="timeline-item">
            <div className="timeline-rail">
              <span className={`timeline-dot ${completed.has(d.day) ? 'done' : ''}`}>
                {completed.has(d.day) ? '✓' : d.day}
              </span>
              {idx < activeDays.length - 1 && <span className="timeline-line" />}
            </div>
            <div className="timeline-card card">
              <span className="timeline-day">Day {d.day}</span>
              <h3>{d.topics.join(' · ')}</h3>
              {d.summary && <p className="hinglish">{d.summary}</p>}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

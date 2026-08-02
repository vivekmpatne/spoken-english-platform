import { useParams, Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import days from '../data/days.json';
import grammar from '../data/grammar.json';
import { getCompletedDays, toggleCompletedDay } from '../utils/storage';
import './DayDetail.css';

export default function DayDetail() {
  const { day } = useParams();
  const navigate = useNavigate();
  const dayNum = Number(day);
  const dayData = days.find((d) => d.day === dayNum);
  const items = grammar.filter((g) => dayData?.grammarIds.includes(g.id));
  const [completed, setCompleted] = useState(new Set());

  useEffect(() => setCompleted(getCompletedDays()), []);

  if (!dayData || dayData.topics.length === 0) {
    return (
      <div className="container" style={{ padding: '60px 24px' }}>
        <p>Day not found.</p>
        <Link className="btn" to="/roadmap">← Back to Roadmap</Link>
      </div>
    );
  }

  const isDone = completed.has(dayNum);
  const prev = days.slice(0, dayNum - 1).reverse().find((d) => d.topics.length > 0);
  const next = days.slice(dayNum).find((d) => d.topics.length > 0);

  return (
    <div className="container day-detail">
      <Link to="/roadmap" className="back-link">← Roadmap</Link>

      <div className="day-header">
        <span className="eyebrow">Day {dayData.day} of 70</span>
        <h1>{dayData.topics.join(' · ')}</h1>
        <button
          className={`btn ${isDone ? 'btn-ghost' : ''}`}
          onClick={() => setCompleted(toggleCompletedDay(dayNum))}
        >
          {isDone ? '✓ Marked Complete' : 'Mark as Complete'}
        </button>
      </div>

      {items.map((g) => (
        <article key={g.id} className="card day-grammar-block">
          <div className="dgb-top">
            <span className="badge badge-source">{g.category}</span>
          </div>
          <h2>{g.topic}</h2>
          <p className="hinglish">{g.hinglishMeaning}</p>

          <h4>Rules</h4>
          <ul className="rule-list">
            {g.rules.map((r, i) => <li key={i}>{r}</li>)}
          </ul>

          <h4>Examples</h4>
          <ul className="example-list">
            {g.examples.map((ex, i) => <li key={i}>{ex}</li>)}
          </ul>

          {g.keywords.length > 0 && (
            <div className="keyword-row">
              {g.keywords.map((k) => <span key={k} className="keyword-chip">{k}</span>)}
            </div>
          )}
        </article>
      ))}

      <div className="day-nav">
        {prev ? (
          <button className="btn btn-ghost" onClick={() => navigate(`/roadmap/day/${prev.day}`)}>← Day {prev.day}</button>
        ) : <span />}
        {next ? (
          <button className="btn" onClick={() => navigate(`/roadmap/day/${next.day}`)}>Day {next.day} →</button>
        ) : <span />}
      </div>
    </div>
  );
}

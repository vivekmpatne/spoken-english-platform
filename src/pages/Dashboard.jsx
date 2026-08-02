import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import grammar from '../data/grammar.json';
import days from '../data/days.json';
import vocabulary from '../data/vocabulary.json';
import interview from '../data/interview.json';
import { getCompletedDays } from '../utils/storage';
import './Dashboard.css';

const activeDays = days.filter((d) => d.topics.length > 0);

export default function Dashboard() {
  const [completed, setCompleted] = useState(new Set());

  useEffect(() => {
    setCompleted(getCompletedDays());
  }, []);

  const pct = Math.round((completed.size / activeDays.length) * 100) || 0;

  const cards = [
    { to: '/roadmap', title: 'Start Learning', desc: 'Day 1 se Day 70 tak, roadmap follow karo.', tone: 'coral', icon: '01' },
    { to: '/vocabulary', title: 'Daily Vocabulary', desc: 'Rozana life aur interview ke liye words.', tone: 'teal', icon: '02' },
    { to: '/grammar', title: 'Grammar Roadmap', desc: '115 grammar rules, category-wise explore.', tone: 'indigo', icon: '03' },
    { to: '/interview', title: 'Interview Preparation', desc: 'HR questions, templates, answer tips.', tone: 'gold', icon: '04' },
    { to: '/search', title: 'Search Everything', desc: 'Grammar, vocab, days — sab ek jagah.', tone: 'ink', icon: '05' },
  ];

  return (
    <div className="dash">
      <section className="hero container">
        <div className="hero-copy">
          <span className="eyebrow">Spoken English · Grammar · Interview</span>
          <h1>
            English seekhna ab feel hoga <em>ek roadmap</em>, <br />
            random notes nahi.
          </h1>
          <p className="hero-sub">
            Hindi aur Kannada medium students ke liye — 70-din ka structured grammar journey,
            rozmarra ki vocabulary, aur interview-ready communication, sab Hinglish explanation ke saath.
          </p>
          <div className="hero-actions">
            <Link className="btn" to="/roadmap">Start Day 1 →</Link>
            <Link className="btn btn-ghost" to="/grammar">Browse Grammar</Link>
          </div>
        </div>
        <div className="hero-progress card">
          <span className="eyebrow">Your Progress</span>
          <div className="ring-wrap">
            <svg viewBox="0 0 120 120" className="ring">
              <circle cx="60" cy="60" r="52" className="ring-bg" />
              <circle
                cx="60" cy="60" r="52"
                className="ring-fg"
                strokeDasharray={2 * Math.PI * 52}
                strokeDashoffset={2 * Math.PI * 52 * (1 - pct / 100)}
              />
            </svg>
            <div className="ring-label">
              <strong>{pct}%</strong>
              <span>complete</span>
            </div>
          </div>
          <p className="ring-sub">{completed.size} / {activeDays.length} days completed</p>
        </div>
      </section>

      <section className="container stats-grid">
        <StatCard label="Days Completed" value={`${completed.size}/${activeDays.length}`} tone="coral" />
        <StatCard label="Grammar Topics" value={grammar.length} tone="indigo" />
        <StatCard label="Vocabulary Words" value={vocabulary.length} tone="teal" />
        <StatCard label="Interview Templates" value={interview.length} tone="gold" />
      </section>

      <section className="container cards-section">
        <h2>Kahan se shuru karein?</h2>
        <div className="nav-cards">
          {cards.map((c) => (
            <Link key={c.to} to={c.to} className={`nav-card tone-${c.tone}`}>
              <span className="nav-card-num">{c.icon}</span>
              <div>
                <h3>{c.title}</h3>
                <p>{c.desc}</p>
              </div>
              <span className="nav-card-arrow">→</span>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}

function StatCard({ label, value, tone }) {
  return (
    <div className={`stat-card tone-${tone}`}>
      <strong>{value}</strong>
      <span>{label}</span>
    </div>
  );
}

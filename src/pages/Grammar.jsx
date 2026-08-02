import { useMemo, useState } from 'react';
import grammar from '../data/grammar.json';
import './Grammar.css';

const categories = ['All', ...new Set(grammar.map((g) => g.category))];

export default function Grammar() {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('All');
  const [openId, setOpenId] = useState(null);

  const filtered = useMemo(() => {
    const q = query.toLowerCase().trim();
    return grammar.filter((g) => {
      const matchesCategory = category === 'All' || g.category === category;
      const matchesQuery =
        !q ||
        g.topic.toLowerCase().includes(q) ||
        g.hinglishMeaning.toLowerCase().includes(q) ||
        g.keywords.some((k) => k.toLowerCase().includes(q));
      return matchesCategory && matchesQuery;
    });
  }, [query, category]);

  return (
    <div className="container grammar-page">
      <span className="eyebrow">115 Rules · Day 1–70</span>
      <h1>Grammar Explorer</h1>
      <p className="grammar-sub">Tenses se leke Advanced Spoken Rules tak — sab kuch category-wise.</p>

      <div className="grammar-controls">
        <input
          className="grammar-search"
          placeholder="Search topic, keyword, ya Hinglish meaning..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <div className="category-pills scrollbar-hide">
          {categories.map((c) => (
            <button
              key={c}
              className={`pill ${category === c ? 'active' : ''}`}
              onClick={() => setCategory(c)}
            >
              {c}
            </button>
          ))}
        </div>
      </div>

      <p className="result-count">{filtered.length} topics</p>

      <div className="grammar-grid">
        {filtered.map((g) => {
          const open = openId === g.id;
          return (
            <div key={g.id} className="card grammar-card" onClick={() => setOpenId(open ? null : g.id)}>
              <div className="gc-head">
                <span className="badge badge-source">Day {g.day}</span>
                <span className="gc-cat">{g.category}</span>
              </div>
              <h3>{g.topic}</h3>
              <p className="hinglish">{g.hinglishMeaning}</p>

              {open && (
                <div className="gc-body">
                  <h4>Rules</h4>
                  <ul>{g.rules.map((r, i) => <li key={i}>{r}</li>)}</ul>
                  <h4>Examples</h4>
                  <ul>{g.examples.map((e, i) => <li key={i}>{e}</li>)}</ul>
                  <div className="keyword-row">
                    {g.keywords.map((k) => <span key={k} className="keyword-chip">{k}</span>)}
                  </div>
                </div>
              )}
              <span className="gc-toggle">{open ? 'Show less ↑' : 'Show rules & examples ↓'}</span>
            </div>
          );
        })}
      </div>

      {filtered.length === 0 && <p className="empty-state">Kuch nahi mila. Different keyword try karo.</p>}
    </div>
  );
}

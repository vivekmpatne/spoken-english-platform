import { useMemo, useState } from 'react';
import vocabulary from '../data/vocabulary.json';
import './Vocabulary.css';

const categories = ['All', ...new Set(vocabulary.map((v) => v.category))];

export default function Vocabulary() {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('All');

  const filtered = useMemo(() => {
    const q = query.toLowerCase().trim();
    return vocabulary.filter((v) => {
      const matchCat = category === 'All' || v.category === category;
      const matchQ = !q || v.word.toLowerCase().includes(q) || v.hinglishMeaning.toLowerCase().includes(q);
      return matchCat && matchQ;
    });
  }, [query, category]);

  return (
    <div className="container vocab-page">
      <div className="sample-notice">
        <span className="badge badge-sample">Sample Preview</span>
        <p>Ye {vocabulary.length} words starter set hain — asli playlist se vocabulary data nahi diya gaya tha, isliye ye sirf UI demo ke liye hain. Apna vocabulary JSON do to real data se replace kar dunga.</p>
      </div>

      <span className="eyebrow">Daily Life · Office · Software · Interview</span>
      <h1>Vocabulary Explorer</h1>

      <div className="grammar-controls">
        <input className="grammar-search" placeholder="Search word..." value={query} onChange={(e) => setQuery(e.target.value)} />
        <div className="category-pills scrollbar-hide">
          {categories.map((c) => (
            <button key={c} className={`pill ${category === c ? 'active' : ''}`} onClick={() => setCategory(c)}>{c}</button>
          ))}
        </div>
      </div>

      <div className="vocab-grid">
        {filtered.map((v) => (
          <div key={v.id} className="card vocab-card">
            <div className="vc-top">
              <h3>{v.word}</h3>
              <span className="vc-pron">/{v.pronunciation}/</span>
            </div>
            <span className="badge badge-source vc-cat">{v.category}</span>
            <p className="vc-meaning">{v.englishMeaning}</p>
            <p className="hinglish">{v.hinglishMeaning}</p>
            <p className="vc-example">"{v.exampleSentence}"</p>
            <p className="vc-related">Related: {v.relatedWords}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

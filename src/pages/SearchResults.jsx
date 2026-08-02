import { useSearchParams, Link } from 'react-router-dom';
import { globalSearch } from '../utils/search';
import './SearchResults.css';

export default function SearchResults() {
  const [params] = useSearchParams();
  const q = params.get('q') || '';
  const results = globalSearch(q);
  const total = results.grammar.length + results.days.length + results.vocabulary.length + results.interview.length;

  return (
    <div className="container search-page">
      <span className="eyebrow">Search Everything</span>
      <h1>Results for "{q}"</h1>
      <p className="result-count">{total} matches</p>

      {results.days.length > 0 && (
        <Section title="Days">
          {results.days.map((d) => (
            <Link key={d.day} to={`/roadmap/day/${d.day}`} className="result-row">
              <span className="badge badge-source">Day {d.day}</span>
              <span>{d.topics.join(' · ')}</span>
            </Link>
          ))}
        </Section>
      )}

      {results.grammar.length > 0 && (
        <Section title="Grammar">
          {results.grammar.map((g) => (
            <Link key={g.id} to={`/roadmap/day/${g.day}`} className="result-row">
              <span className="badge badge-source">{g.category}</span>
              <span>{g.topic}</span>
            </Link>
          ))}
        </Section>
      )}

      {results.vocabulary.length > 0 && (
        <Section title="Vocabulary">
          {results.vocabulary.map((v) => (
            <Link key={v.id} to="/vocabulary" className="result-row">
              <span className="badge badge-sample">{v.category}</span>
              <span>{v.word} — {v.hinglishMeaning}</span>
            </Link>
          ))}
        </Section>
      )}

      {results.interview.length > 0 && (
        <Section title="Interview">
          {results.interview.map((i) => (
            <Link key={i.id} to="/interview" className="result-row">
              <span className="badge badge-sample">HR</span>
              <span>{i.question}</span>
            </Link>
          ))}
        </Section>
      )}

      {total === 0 && <p className="empty-state">Kuch nahi mila "{q}" ke liye. Kisi aur keyword se try karo.</p>}
    </div>
  );
}

function Section({ title, children }) {
  return (
    <div className="result-section">
      <h2>{title}</h2>
      <div className="result-list">{children}</div>
    </div>
  );
}

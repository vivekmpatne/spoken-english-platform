import { useState } from 'react';
import interview from '../data/interview.json';
import extras from '../data/extras.json';
import './Interview.css';

export default function Interview() {
  const [openId, setOpenId] = useState(interview[0]?.id);

  return (
    <div className="container interview-page">
      <div className="sample-notice">
        <span className="badge badge-sample">Sample Preview</span>
        <p>Ye HR questions aur answer templates starter set hain, playlist data me nahi the. Apna interview transcript do to real content se replace kar dunga.</p>
      </div>

      <span className="eyebrow">HR Questions · Templates · Tips</span>
      <h1>Interview Preparation</h1>

      <div className="interview-layout">
        <div className="q-list">
          {interview.map((q) => (
            <button
              key={q.id}
              className={`q-item ${openId === q.id ? 'active' : ''}`}
              onClick={() => setOpenId(q.id)}
            >
              {q.question}
            </button>
          ))}
        </div>

        <div className="q-detail card">
          {interview.filter((q) => q.id === openId).map((q) => (
            <div key={q.id}>
              <h2>{q.question}</h2>
              <p className="hinglish">{q.purpose}</p>

              <h4>Answer Template</h4>
              <p className="template-line">{q.answerTemplate}</p>

              <h4>Beginner Answer</h4>
              <p className="answer-block">{q.beginnerAnswer}</p>

              <h4>Professional Answer</h4>
              <p className="answer-block professional">{q.professionalAnswer}</p>

              <h4>Tips</h4>
              <ul className="tips-list">
                {q.tips.map((t, i) => <li key={i}>{t}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <section className="intro-section">
        <h2>Self Introduction Templates</h2>
        <div className="intro-grid">
          {extras.introTemplates.map((t) => (
            <div key={t.id} className="card intro-card">
              <span className="badge badge-sample">{t.context}</span>
              <h3>{t.category}</h3>
              <p>{t.template}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

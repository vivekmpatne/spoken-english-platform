import { useEffect, useRef, useState } from 'react';
import extras from '../data/extras.json';
import './Speaking.css';

export default function Speaking() {
  const [active, setActive] = useState(null);
  const [seconds, setSeconds] = useState(0);
  const [running, setRunning] = useState(false);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (running) {
      intervalRef.current = setInterval(() => setSeconds((s) => s + 1), 1000);
    } else {
      clearInterval(intervalRef.current);
    }
    return () => clearInterval(intervalRef.current);
  }, [running]);

  function start(challenge) {
    setActive(challenge);
    setSeconds(0);
    setRunning(true);
  }
  function stop() {
    setRunning(false);
  }

  const targetSeconds = active ? (active.duration.includes('3') ? 180 : 60) : 60;
  const mm = String(Math.floor(seconds / 60)).padStart(2, '0');
  const ss = String(seconds % 60).padStart(2, '0');

  return (
    <div className="container speaking-page">
      <div className="sample-notice">
        <span className="badge badge-sample">Sample Preview</span>
        <p>Speaking topics starter list hain — timer sirf practice ke liye hai, koi recording save nahi hoti.</p>
      </div>

      <span className="eyebrow">Daily Speaking Challenge</span>
      <h1>Speaking Practice</h1>
      <p className="speaking-sub">Topic choose karo, timer start karo, aur bolna shuru karo. Ruko mat, flow banaye rakho.</p>

      <div className="speaking-layout">
        <div className="challenge-list">
          {extras.speakingChallenges.map((c) => (
            <button
              key={c.id}
              className={`challenge-item ${active?.id === c.id ? 'active' : ''}`}
              onClick={() => start(c)}
            >
              <span>{c.topic}</span>
              <span className="challenge-duration">{c.duration}</span>
            </button>
          ))}
        </div>

        <div className="timer-card card">
          {active ? (
            <>
              <span className="eyebrow">{active.topic}</span>
              <div className={`timer-display ${seconds >= targetSeconds ? 'over' : ''}`}>{mm}:{ss}</div>
              <p className="timer-target">Target: {active.duration}</p>
              <div className="timer-actions">
                {running ? (
                  <button className="btn" onClick={stop}>Pause</button>
                ) : (
                  <button className="btn" onClick={() => setRunning(true)}>Resume</button>
                )}
                <button className="btn btn-ghost" onClick={() => { setActive(null); setRunning(false); setSeconds(0); }}>Reset</button>
              </div>
            </>
          ) : (
            <p className="timer-placeholder">Left side se ek topic choose karo, timer yahan start hoga.</p>
          )}
        </div>
      </div>
    </div>
  );
}

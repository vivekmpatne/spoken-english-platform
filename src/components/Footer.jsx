export default function Footer() {
  return (
    <footer style={{ borderTop: '1.5px solid var(--line)', marginTop: 60 }}>
      <div className="container" style={{ padding: '28px 24px', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12 }}>
        <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.78rem', color: 'var(--ink-soft)' }}>
          English Zero To Hero — built from real Day 1–70 grammar playlist data.
        </p>
        <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.78rem', color: 'var(--ink-soft)' }}>
          Grammar se Guftagu tak.
        </p>
      </div>
    </footer>
  );
}

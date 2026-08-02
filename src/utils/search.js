import grammar from '../data/grammar.json';
import days from '../data/days.json';
import vocabulary from '../data/vocabulary.json';
import interview from '../data/interview.json';

function norm(s) {
  return (s || '').toString().toLowerCase();
}

export function globalSearch(query) {
  const q = norm(query).trim();
  if (!q) return { grammar: [], days: [], vocabulary: [], interview: [] };

  const g = grammar.filter((item) =>
    norm(item.topic).includes(q) ||
    norm(item.hinglishMeaning).includes(q) ||
    norm(item.hindi).includes(q) ||
    item.keywords.some((k) => norm(k).includes(q)) ||
    item.rules.some((r) => norm(r).includes(q))
  );

  const d = days.filter((item) =>
    item.topics.some((t) => norm(t).includes(q)) ||
    item.keywords.some((k) => norm(k).includes(q)) ||
    norm(item.summary).includes(q) ||
    norm(String(item.day)).includes(q)
  );

  const v = vocabulary.filter((item) =>
    norm(item.word).includes(q) ||
    norm(item.englishMeaning).includes(q) ||
    norm(item.hinglishMeaning).includes(q) ||
    norm(item.category).includes(q)
  );

  const i = interview.filter((item) =>
    norm(item.question).includes(q) ||
    norm(item.purpose).includes(q)
  );

  return { grammar: g, days: d, vocabulary: v, interview: i };
}

const KEYS = {
  theme: 'zth_theme',
  completedDays: 'zth_completed_days',
  bookmarks: 'zth_bookmarks',
};

export function getTheme() {
  return localStorage.getItem(KEYS.theme) || 'light';
}
export function setTheme(t) {
  localStorage.setItem(KEYS.theme, t);
}

function getSet(key) {
  try {
    const raw = localStorage.getItem(key);
    return raw ? new Set(JSON.parse(raw)) : new Set();
  } catch {
    return new Set();
  }
}
function saveSet(key, set) {
  localStorage.setItem(key, JSON.stringify([...set]));
}

export function getCompletedDays() {
  return getSet(KEYS.completedDays);
}
export function toggleCompletedDay(day) {
  const set = getCompletedDays();
  set.has(day) ? set.delete(day) : set.add(day);
  saveSet(KEYS.completedDays, set);
  return set;
}

export function getBookmarks() {
  return getSet(KEYS.bookmarks);
}
export function toggleBookmark(id) {
  const set = getBookmarks();
  set.has(id) ? set.delete(id) : set.add(id);
  saveSet(KEYS.bookmarks, set);
  return set;
}

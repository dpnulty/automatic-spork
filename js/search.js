// Simple client-side search fetching prebuilt search.json
export async function runSearch(query) {
  const res = await fetch('/search.json');
  const data = await res.json();
  const q = query.toLowerCase();
  return data.filter(item =>
    item.title.toLowerCase().includes(q) ||
    item.excerpt.toLowerCase().includes(q) ||
    item.tags.some(t => t.includes(q))
  );
}

export function debounce(fn, delay = 200) {
  let t;
  return (...args) => {
    clearTimeout(t);
    t = setTimeout(() => fn(...args), delay);
  };
}

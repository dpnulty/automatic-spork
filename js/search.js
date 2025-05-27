// Simple client-side search fetching prebuilt search.json
export async function runSearch(query) {
  const res = await fetch('/search.json');
  const data = await res.json();
  return data.filter(item =>
    item.title.toLowerCase().includes(query.toLowerCase()) ||
    item.tags.some(t => t.includes(query.toLowerCase()))
  );
}

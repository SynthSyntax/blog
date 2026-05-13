// Prefix a path with the deploy base (e.g. '/blog' for project repos).
// Use this for every internal link so the site works whether base is '/' or '/blog'.
const BASE = import.meta.env.BASE_URL.replace(/\/$/, ''); // strip trailing slash
export const u = (path: string): string => {
  if (!path) return BASE + '/';
  return BASE + (path.startsWith('/') ? path : '/' + path);
};

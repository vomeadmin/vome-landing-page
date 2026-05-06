// Environment-aware base URL for links into the React web-app
// (register / register-volunteer / login).
//
// Resolution:
//   1. astro dev locally  -> http://localhost:3000 (React dev server)
//   2. Built deployments  -> relative path (CloudFront origin failover
//      routes unknown paths to the React origin on the same domain)

const LOCAL = "http://localhost:3000";

function baseUrl(): string | null {
  if (import.meta.env.DEV) return LOCAL;
  return null;
}

export function appUrl(path: string): string {
  const clean = path.startsWith("/") ? path : `/${path}`;
  const base = baseUrl();
  return base ? `${base}${clean}` : clean;
}

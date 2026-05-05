// Environment-aware base URL for links into the React web-app
// (register / register-volunteer / login).
//
// Resolution order (build- or dev-time, since this is a static site):
//   1. astro dev locally -> http://localhost:3000
//   2. PUBLIC_APP_BASE_URL env var if set (used for the dev CloudFront build)
//   3. Fallback to production https://www.vomevolunteer.com

const LOCAL = "http://localhost:3000";
const PROD = "https://www.vomevolunteer.com";

function baseUrl(): string {
  if (import.meta.env.DEV) return LOCAL;
  const explicit = import.meta.env.PUBLIC_APP_BASE_URL;
  if (typeof explicit === "string" && explicit.length > 0) {
    return explicit.replace(/\/+$/, "");
  }
  return PROD;
}

export function appUrl(path: string): string {
  const clean = path.startsWith("/") ? path : `/${path}`;
  return `${baseUrl()}${clean}`;
}

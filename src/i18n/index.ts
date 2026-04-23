/**
 * i18n helpers — locale detection from Astro.url.pathname.
 *
 * Convention: `/` is English, `/fr/...` is French. Any path that starts with
 * `/fr` is treated as French. Everything else is English.
 */
import type { Locale } from "./strings";
export { strings, t, LOCALES, DEFAULT_LOCALE } from "./strings";
export type { Locale } from "./strings";

export function localeFromPath(pathname: string): Locale {
  return pathname === "/fr" || pathname.startsWith("/fr/") ? "fr" : "en";
}

/** URL for the same page in the other locale. */
export function switchLocaleHref(pathname: string, next: Locale): string {
  const current = localeFromPath(pathname);
  if (current === next) return pathname;
  if (next === "fr") {
    // /foo/bar → /fr/foo/bar ; / → /fr/
    if (pathname === "/") return "/fr/";
    return `/fr${pathname}`;
  }
  // fr → en: strip /fr prefix
  if (pathname === "/fr" || pathname === "/fr/") return "/";
  return pathname.replace(/^\/fr/, "") || "/";
}

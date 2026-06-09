import type { Surah } from '../types';
import { surahInfo } from '../data/surah-info';

/**
 * Normalizes text for searching: lowercases, strips Latin diacritics, and
 * collapses apostrophes/hyphens/punctuation to spaces. This lets "ali imran"
 * match "Ali-'Imran" and "isa" match "'Isa". Arabic letters are preserved so
 * the Arabic surah name stays searchable.
 */
function normalize(text: string): string {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '') // remove combining diacritics
    .replace(/[^a-z0-9؀-ۿ]+/g, ' ') // keep latin/digits/arabic, rest -> space
    .trim();
}

/** Builds the searchable text for a surah: name, meaning, Arabic name, overview, topics. */
function haystackFor(surah: Surah): string {
  const info = surahInfo[surah.id];
  return normalize(
    [
      surah.name,
      info?.translation ?? '',
      info?.arabic ?? '',
      surah.overview,
      surah.topicsCovered.join(' '),
    ].join(' ')
  );
}

/**
 * Returns the surahs matching the query. Matching is case/diacritic-insensitive
 * and requires every whitespace-separated term to be present (AND semantics).
 * An empty query returns the full list unchanged.
 */
export function searchSurahs(surahs: Surah[], query: string): Surah[] {
  const normalized = normalize(query);
  if (!normalized) return surahs;

  const terms = normalized.split(' ').filter(Boolean);
  return surahs.filter((surah) => {
    const haystack = haystackFor(surah);
    return terms.every((term) => haystack.includes(term));
  });
}

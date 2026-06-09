import React from 'react';

/**
 * Maps textual honorific abbreviations to their Unicode ligature glyphs.
 * These glyphs live in the "Arabic honorific ligatures" sub-block
 * (Unicode 14.0) and the Arabic Presentation Forms-A block. They render
 * with a font that supports them (we load "Scheherazade New" for this).
 */
const HONORIFICS: Record<string, { glyph: string; label: string }> = {
  '(SAW)': { glyph: 'ﷺ', label: 'صلى الله عليه وسلم' }, // ﷺ
  '(AS)': { glyph: '﵇', label: 'عليه السلام' },        // ﵇
  '(RA)': { glyph: '﵁', label: 'رضي الله عنه' },       // ﵁
};

// Matches whole-token abbreviations only, e.g. "(AS)" but not "(jiwa)".
const TOKEN_RE = /\((?:SAW|AS|RA)\)/g;

/**
 * Replaces honorific abbreviations in a string with their styled Unicode
 * glyph, returning React nodes. Plain strings without any token pass through
 * unchanged so callers can use it everywhere without overhead.
 */
export function withHonorifics(text: string): React.ReactNode {
  if (!text) return text;

  const nodes: React.ReactNode[] = [];
  let lastIndex = 0;
  let key = 0;

  for (const match of text.matchAll(TOKEN_RE)) {
    const offset = match.index ?? 0;
    const { glyph, label } = HONORIFICS[match[0]];

    if (offset > lastIndex) nodes.push(text.slice(lastIndex, offset));

    nodes.push(
      <span
        key={key++}
        className="font-honorific"
        lang="ar"
        title={label}
        aria-label={label}
      >
        {glyph}
      </span>
    );

    lastIndex = offset + match[0].length;
  }

  if (nodes.length === 0) return text;
  if (lastIndex < text.length) nodes.push(text.slice(lastIndex));

  return nodes;
}

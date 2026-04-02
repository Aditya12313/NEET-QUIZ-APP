/**
 * Adapts the existing notes:[{concept,fact,tip}] format into the flat arrays
 * expected by the revision view, without modifying neetContent.json.
 */
export function adaptChapter(ch) {
  if (!ch) return ch
  const notes = ch.notes ?? []
  return {
    ...ch,
    concepts:   notes.map(n => n.concept).filter(Boolean),
    formulas:   (ch.formulas ?? []),
    ncertLines: notes.map(n => n.fact).filter(Boolean),
    mistakes:   notes.map(n => n.tip).filter(Boolean),
    summary:    notes.map(n => `${n.concept} ${n.tip ?? ''}`.trim()).filter(Boolean),
  }
}


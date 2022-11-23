/**
 * Check if the given character code, or the character code at the first
 * character, is alphabetical.
 *
 * @param {string|number} character
 * @returns {boolean} Whether `character` is alphabetical.
 */
export function isAlphabetical(character) {
  const code =
    typeof character === 'string' ? character.codePointAt(0) : character

  return (
    code !== undefined &&
    ((code >= 97 && code <= 122) /* a-z */ ||
      (code >= 65 && code <= 90)) /* A-Z */
  )
}

/**
 * Check if the given code point, or the code point at the first index, is
 * alphabetical.
 *
 * @param {string|number} value
 *   Code point or string.
 * @returns {boolean}
 *   Whether `value` is alphabetical.
 */
export function isAlphabetical(value) {
  const code = typeof value === 'string' ? value.codePointAt(0) : value

  return (
    code !== undefined &&
    ((code >= 97 && code <= 122) /* a-z */ ||
      (code >= 65 && code <= 90)) /* A-Z */
  )
}

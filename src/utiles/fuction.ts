/**
 *
 * @param {string} txt - The input string to be truncated.
 * @param {number} [max=80] - The maximum length to truncate the string. Default is 80.
 * @returns {string} - The truncated string with ellipsis (...) if applicable.
 */
export function txtSlicer(txt: string, max: number = 80) {
  if (txt.length >= max) return `${txt.slice(0, max)} ...`;
  return txt;
}

export function TRIM(text) {
  return text.trim();
}
export function UPPER(text) {
  return text.toUpperCase();
}
export function LOWER(text) {
  return text.toLowerCase();
}
export function REMOVE_DUPLICATES(array) {
  return [...new Set(array)];
}
export function FIND_AND_REPLACE(array, findText, replaceText) {
  return array.map((cell) => (cell === findText ? replaceText : cell));
}

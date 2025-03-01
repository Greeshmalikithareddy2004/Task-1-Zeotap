export function SUM(range) {
  return range.reduce((acc, num) => acc + num, 0);
}
export function AVERAGE(range) {
  return SUM(range) / range.length;
}
export function MAX(range) {
  return Math.max(...range);
}
export function MIN(range) {
  return Math.min(...range);
}
export function COUNT(range) {
  return range.filter((val) => !isNaN(val)).length;
}

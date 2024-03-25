export function formatToCompactNumber(target: number) {
  return Intl.NumberFormat('en', {
    notation: 'compact',
    maximumFractionDigits: 1,
  }).format(target);
}

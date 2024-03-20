export function formatWeblogDate(date: Date) {
  // extra Date wrapper is for client and server side compatibility
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
}

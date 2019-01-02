export const secondsToString = (seconds: number) => {
  const mins = Math.floor(seconds/60);
  const secs = seconds - (mins * 60);

  return `${mins}`.padStart(2, '0') + ':' + `${secs}`.padStart(2, '0');
}
export const debounce = <T extends unknown[], U>(
  func: (...args: T) => U,
  delay: number
): ((...args: T) => void) => {
  let timer: NodeJS.Timeout;
  return (...args: T) => {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => func(...args), delay);
  };
};
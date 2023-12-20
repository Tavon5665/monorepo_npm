export const isEven = (x: number) => x % 2 === 0;

export function printMultiplicationTable() {
  for (let i = 1; i <= 9; i++) {
    let line = '';
    for (let j = 1; j <= i; j++) {
      line += `${j} * ${i} = ${j * i}  `;
    }
    console.log(line);
  }
}

function debounce<F extends (...args: any[]) => any>(func: F, wait: number): (...args: Parameters<F>) => void {
  let timeoutId: number = 0;
  return (...args: Parameters<F>) => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    timeoutId = setTimeout(() => func(...args), wait);
  };
}
function curry<F extends (...args: any[]) => any>(fn: F): (...args: Parameters<F>) => any {
  const curried = (...args: any[]) =>
    args.length >= fn.length
      ? fn(...args)
      : (...args2: any[]) => curried(...args, ...args2);

  return curried as (...args: Parameters<F>) => any;
}
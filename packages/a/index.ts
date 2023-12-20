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
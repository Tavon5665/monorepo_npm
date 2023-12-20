import { isEven } from '@dorod/monorepo-pkg-a';

export const isOdd = (x: number) => !isEven(x);

export const isOddAndGreaterThanTen = (x: number) => isOdd(x) && x > 10;
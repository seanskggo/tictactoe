export type CellMark = boolean | null;
export type Cell = [number, CellMark, boolean];
export type GridState = Cell[][];
export type Winner = 'Circle' | 'Cross' | 'draw';
export type GameOutcome = [boolean, Winner | null];

export const createEmptyGrid = (): GridState => [
  [[0, null, false], [1, null, false], [2, null, false]],
  [[3, null, false], [4, null, false], [5, null, false]],
  [[6, null, false], [7, null, false], [8, null, false]],
];

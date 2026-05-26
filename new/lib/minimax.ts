import type { GridState } from './types';

export function bestMove(grid: GridState, player: boolean): number | null {
  let bestValue = player ? -1 : 1;
  let bestIndex: number | null = null;
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (grid[i][j][1] === null) {
        grid[i][j][1] = player;
        const value = minimax(grid, !player);
        if ((value <= bestValue && !player) || (value >= bestValue && player)) {
          bestValue = value;
          bestIndex = 3 * i + j;
        }
        grid[i][j][1] = null;
      }
    }
  }
  return bestIndex;
}

function minimax(grid: GridState, player: boolean): number {
  const result = check(grid);
  if (result !== null) return result;
  let bestValue = player ? -1 : 1;
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (grid[i][j][1] === null) {
        grid[i][j][1] = player;
        const value = minimax(grid, !player);
        bestValue = player
          ? value > bestValue ? value : bestValue
          : value < bestValue ? value : bestValue;
        grid[i][j][1] = null;
      }
    }
  }
  return bestValue;
}

function check(gd: GridState): number | null {
  for (let i = 0; i < 3; i++) {
    if (gd[i][0][1] === true && gd[i][1][1] === true && gd[i][2][1] === true) return 1;
    if (gd[i][0][1] === false && gd[i][1][1] === false && gd[i][2][1] === false) return -1;
    if (gd[0][i][1] === true && gd[1][i][1] === true && gd[2][i][1] === true) return 1;
    if (gd[0][i][1] === false && gd[1][i][1] === false && gd[2][i][1] === false) return -1;
  }
  if (gd[0][0][1] === true && gd[1][1][1] === true && gd[2][2][1] === true) return 1;
  if (gd[0][0][1] === false && gd[1][1][1] === false && gd[2][2][1] === false) return -1;
  if (gd[0][2][1] === true && gd[1][1][1] === true && gd[2][0][1] === true) return 1;
  if (gd[0][2][1] === false && gd[1][1][1] === false && gd[2][0][1] === false) return -1;
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (gd[i][j][1] === null) return null;
    }
  }
  return 0;
}

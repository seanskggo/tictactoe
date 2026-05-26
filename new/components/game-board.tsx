import { LinearGradient } from 'expo-linear-gradient';
import { useEffect, useState } from 'react';
import { Dimensions, Image, Pressable, StyleSheet, View } from 'react-native';
import { circle, cross } from '@/constants/images';
import { checkState } from '@/lib/check-state';
import { bestMove } from '@/lib/minimax';
import { createEmptyGrid, type CellMark, type GridState, type Winner } from '@/lib/types';
import { GameBackground } from './backgrounds';
import { EndGameModal } from './end-game-modal';

const buttonDimension = Dimensions.get('window').width * 0.23;

const chooseImage = (mark: CellMark) => {
  if (mark === null) return null;
  return mark ? circle : cross;
};

type Props = { vsAi?: boolean };

export function GameBoard({ vsAi = false }: Props) {
  const [grid, setGrid] = useState<GridState>(createEmptyGrid);
  const [turn, setTurn] = useState(true);
  const [winner, setWinner] = useState<Winner | null>(null);
  const [modalVisible, setModalVisible] = useState(true);

  const playAt = (index: number) => {
    if (winner !== null) return;
    const col = Math.floor(index / 3);
    const row = index - 3 * col;
    if (grid[col][row][2]) return;
    const next = grid.map((r) => r.map((c) => [...c])) as GridState;
    next[col][row][1] = turn;
    next[col][row][2] = true;
    setGrid(next);
    setTurn(!turn);
    setModalVisible(true);
  };

  const reset = () => {
    setGrid(createEmptyGrid());
    setTurn(true);
    setWinner(null);
    setModalVisible(true);
  };

  useEffect(() => {
    const [over, w] = checkState(grid);
    if (over && winner === null) setWinner(w);
  }, [grid, winner]);

  useEffect(() => {
    if (vsAi && !turn && winner === null) {
      const move = bestMove(grid.map((r) => r.map((c) => [...c])) as GridState, turn);
      if (move !== null) {
        const timer = setTimeout(() => playAt(move), 150);
        return () => clearTimeout(timer);
      }
    }
  }, [grid, turn, vsAi, winner]);

  return (
    <View style={styles.mainContainer}>
      <GameBackground />
      <View style={styles.priority}>
        {grid.map((row, rowIndex) => (
          <View style={styles.rowRender} key={`row${rowIndex}`}>
            {row.map((cell) => (
              <LinearGradient
                key={String(cell[0])}
                colors={['#00d5ff', '#11adab', '#1ffffb']}
                style={styles.gradient}
                start={{ x: 0.0, y: 0.25 }}
                end={{ x: 0.5, y: 1.0 }}
              >
                <Pressable style={styles.button} onPress={() => playAt(cell[0])}>
                  {chooseImage(cell[1]) && (
                    <Image source={chooseImage(cell[1])} style={styles.image} />
                  )}
                </Pressable>
              </LinearGradient>
            ))}
          </View>
        ))}
      </View>
      {winner !== null && (
        <EndGameModal
          visible={modalVisible}
          winner={winner}
          onClose={() => setModalVisible(false)}
          onReset={reset}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  rowRender: {
    flexDirection: 'row',
  },
  priority: {
    position: 'absolute',
  },
  button: {
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    aspectRatio: 1,
    width: buttonDimension,
  },
  gradient: {
    borderRadius: 8,
  },
  image: {
    flex: 1,
    resizeMode: 'contain',
    width: buttonDimension,
  },
});

import { StyleSheet, View } from 'react-native';
import Board from '../components/Board';
import Message from '../components/Message';
import TButton from '../components/TButton';
import Title from '../components/Title';
import colors from '../constants/color';

const BOARD = [
  ['X', 'O', 'X'],
  ['O', 'X', ''],
  ['', 'O', 'X'],
];

export default function Home({ onOpenRules, onOpenCredits }) {

  return (
    <View style={styles.card}>
      <Title>Tic Tac Toe</Title>
      <Board grid={BOARD} />
      <View style={styles.actions}>
        <TButton label="Rules" onPress={onOpenRules} />
        <TButton label="Credits" onPress={onOpenCredits} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: colors.surface,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: colors.border,
    padding: 20,
    shadowColor: '#000000',
    shadowOpacity: 0.08,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 4 },
    elevation: 3,
  },
  actions: {
    marginTop: 20,
  },
});

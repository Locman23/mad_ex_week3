import { StyleSheet, Text, View } from 'react-native';
import TButton from '../components/TButton';
import Title from '../components/Title';
import colors from '../constants/color';

export default function Rules({ onBack }) {
  return (
    <View style={styles.card}>
      <Title>Rules</Title>
      <Text style={styles.body}>1. Two players take turns marking empty cells on a 3×3 board.</Text>
      <Text style={styles.body}>2. Player X goes first, then player O.</Text>
      <Text style={styles.body}>3. First to connect three marks in a row, column, or diagonal wins.</Text>
      <Text style={styles.body}>4. If all cells are filled with no winner, the game is a draw.</Text>
      <View style={styles.action}>
        <TButton label="Back" onPress={onBack} />
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
  },
  body: {
    fontSize: 16,
    lineHeight: 24,
    color: colors.textPrimary,
    marginBottom: 10,
  },
  action: {
    marginTop: 10,
  },
});

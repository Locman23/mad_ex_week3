import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  const board = [
    ['X', 'O', 'X'],
    ['O', 'X', ''],
    ['', 'O', 'X'],
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tic Tac Toe</Text>

      <View style={styles.boardFrame}>
        <View style={styles.board}>
          {board.map((row, rowIndex) => (
            <View key={rowIndex} style={styles.row}>
              {row.map((cell, cellIndex) => (
                <View key={cellIndex} style={styles.cell}>
                  <Text style={styles.cellText}>{cell}</Text>
                </View>
              ))}
            </View>
          ))}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8fafc',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  title: {
    color: '#0f172a',
    fontSize: 30,
    fontWeight: '600',
    letterSpacing: 0.5,
    marginBottom: 20,
  },
  boardFrame: {
    padding: 14,
    borderRadius: 20,
    backgroundColor: '#dbeafe',
    borderWidth: 1.5,
    borderColor: '#93c5fd',
  },
  board: {
    width: 300,
    height: 300,
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#bfdbfe',
    borderRadius: 14,
    overflow: 'hidden',
  },
  row: {
    flex: 1,
    flexDirection: 'row',
  },
  cell: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#e2e8f0',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffffff',
  },
  cellText: {
    color: '#334155',
    fontSize: 42,
    fontWeight: '500',
  },
});

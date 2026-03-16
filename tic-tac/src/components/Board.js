import { StyleSheet, Text, View } from 'react-native';
import colors from '../constants/color';

export default function Board({ grid }) {
  return (
    <View style={styles.board}>
      {grid.map((row, rowIndex) => (
        <View key={rowIndex} style={styles.row}>
          {row.map((cell, cellIndex) => (
            <View key={cellIndex} style={styles.cell}>
              <Text
                style={[
                  styles.cellText,
                  cell === 'X' && styles.xText,
                  cell === 'O' && styles.oText,
                ]}
              >
                {cell}
              </Text>
            </View>
          ))}
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  board: {
    width: '100%',
    maxWidth: 320,
    aspectRatio: 1,
    borderRadius: 16,
    borderWidth: 2,
    borderColor: colors.border,
    backgroundColor: colors.surface,
    overflow: 'hidden',
  },
  row: {
    flex: 1,
    flexDirection: 'row',
  },
  cell: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: colors.cellBorder,
    backgroundColor: colors.cellBackground,
  },
  cellText: {
    fontSize: 44,
    fontWeight: '800',
  },
  xText: {
    color: colors.xColor,
  },
  oText: {
    color: colors.oColor,
  },
});

import { StyleSheet, Text } from 'react-native';
import colors from '../constants/color';

export default function Title({ children }) {
  return <Text style={styles.title}>{children}</Text>;
}

const styles = StyleSheet.create({
  title: {
    fontSize: 34,
    fontWeight: '800',
    color: colors.primaryDark,
    letterSpacing: 0.8,
    marginBottom: 10,
    textAlign: 'center',
  },
});

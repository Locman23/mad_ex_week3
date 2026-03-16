import { StyleSheet, Text } from 'react-native';
import colors from '../constants/color';

export default function Message({ children }) {
  return <Text style={styles.message}>{children}</Text>;
}

const styles = StyleSheet.create({
  message: {
    marginTop: 16,
    fontSize: 16,
    color: colors.textSecondary,
    textAlign: 'center',
    lineHeight: 22,
  },
});

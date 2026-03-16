import { StyleSheet, Text, View } from 'react-native';
import TButton from '../components/TButton';
import Title from '../components/Title';
import colors from '../constants/color';

export default function Credit({ onBack }) {
  return (
    <View style={styles.card}>
      <Title>Credits</Title>
      <Text style={styles.body}>Designed and built for MAD.</Text>
      <Text style={styles.body}>Built with React Native and Expo.</Text>
      <Text style={styles.body}>Created by: Lachlan Smith</Text>
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
    marginBottom: 8,
  },
  action: {
    marginTop: 14,
  },
});

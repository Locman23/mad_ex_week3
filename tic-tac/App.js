import { useState } from 'react';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';
import Home from './src/screens/Home';
import Rules from './src/screens/Rules';
import Credit from './src/screens/Credit';
import colors from './src/constants/color';

export default function App() {
  const [screen, setScreen] = useState('home');

  let content = null;

  if (screen === 'rules') {
    content = <Rules onBack={() => setScreen('home')} />;
  } else if (screen === 'credits') {
    content = <Credit onBack={() => setScreen('home')} />;
  } else {
    content = (
      <Home
        onOpenRules={() => setScreen('rules')}
        onOpenCredits={() => setScreen('credits')}
      />
    );
  }

  return (
    <View style={styles.safeArea}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.container}>
        <View style={styles.orbOne} />
        <View style={styles.orbTwo} />
        {content}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.background,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  container: {
    flex: 1,
    backgroundColor: colors.background,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  orbOne: {
    position: 'absolute',
    width: 180,
    height: 180,
    borderRadius: 90,
    backgroundColor: colors.orbOne,
    top: 40,
    right: 10,
    opacity: 0.7,
  },
  orbTwo: {
    position: 'absolute',
    width: 140,
    height: 140,
    borderRadius: 70,
    backgroundColor: colors.orbTwo,
    bottom: 80,
    left: 10,
    opacity: 0.8,
  },
});

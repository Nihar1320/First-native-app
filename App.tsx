import React from 'react';
import {StyleSheet, Text, View, useColorScheme} from 'react-native';

const App = () => {
  const isDarkMode = useColorScheme() === 'light';
  return (
    <View style={styles.container}>
      <Text style={isDarkMode ? styles.whiteText : styles.darkText}>
        Hy this is Nihar's native app
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  whiteText: {
    color: 'white',
  },
  darkText: {
    color: 'black',
  },
});

export default App;

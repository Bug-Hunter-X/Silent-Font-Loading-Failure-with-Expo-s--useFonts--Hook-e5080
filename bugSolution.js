// bugSolution.js
import { useFonts, Roboto_400Regular } from '@expo-google-fonts/roboto';
import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const App = () => {
  let [fontsLoaded] = useFonts({
    RobotoRegular: Roboto_400Regular,
  });

  if (!fontsLoaded) {
    return <Text>Loading fonts...</Text>;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello, world!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontFamily: 'RobotoRegular',
    fontSize: 24,
  },
});

export default App; 
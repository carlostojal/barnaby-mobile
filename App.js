import * as React from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import SendComponent from './SendComponent.js'

const instructions = Platform.select({
  ios: `Press Cmd+R to reload,\nCmd+D or shake for dev menu`,
  android: `Double tap R on your keyboard to reload,\nShake or press menu button for dev menu`,
});

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Welcome to React Native!</Text>
	  <SendComponent />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
	padding: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});

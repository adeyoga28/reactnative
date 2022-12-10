import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

const FirstApp = () => {
  return (
    <View style={styles.container}>
      <Text>Halo FirstApp!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

export default FirstApp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

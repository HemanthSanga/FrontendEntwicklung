import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, SafeAreaView, View, Dimensions } from 'react-native';
import { useDimensions, useDeviceOrientation } from '@react-native-community/hooks';
export default function App() {
  console.log(useDeviceOrientation());

  return (
    <SafeAreaView style={styles.container}>
      <View style={{
        backgroundColor: 'dodgerblue',
        width: "100%",
        height: "30%"
      }}>
      <Text>Block 1</Text>
      </View>
      <View style={{
        backgroundColor: 'dodgerblue',
        width: "100%",
        height: "30%"
      }}>
      <Text>Block 2</Text>
      </View>

     
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'

  },
});

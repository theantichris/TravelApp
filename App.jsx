import React from 'react';
import {StyleSheet, View, Text, SafeAreaView} from 'react-native';

const App = () => {
  return (
    <SafeAreaView style={styles.safeViewArea}>
      <View>
        <Text>Hello</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeViewArea: {
    flex: 1,
    backgroundColor: 'red',
  },
});

export default App;

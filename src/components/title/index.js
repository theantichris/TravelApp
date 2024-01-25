import React from 'react';
import {Text, StyleSheet} from 'react-native';

const Title = () => {
  return <Text style={styles.title}>Hello</Text>;
};

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
  },
});

export default Title;

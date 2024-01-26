import React from 'react';
import {Text, StyleSheet} from 'react-native';

const Title = ({text}) => {
  return <Text style={styles.title}>{text}</Text>;
};

Title.defaultProps = {
  text: 'Default text',
};

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
  },
});

export default Title;

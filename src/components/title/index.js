import React, {useEffect, useState} from 'react';
import {Text, StyleSheet} from 'react-native';

// Passes in a property called text and deconstructing it.
const Title = ({text}) => {
  // Sets up a variable in state with a default value.
  const [stateText, setStateText] = useState('Default State');

  // Called anytime something changes.
  useEffect(
    () => {
      // What you want to do when something changes.
    },
    [
      // Define items you want to listen to.
    ],
  );

  // Updates the stateText when the function is called.
  const onTextPress = () => {
    setStateText('Updated State');
  };

  return (
    // onPress calls the function onTextPress when the component is clicked.
    <Text onPress={onTextPress} style={styles.title}>
      {stateText}
    </Text>
  );
};

// Sets a default value for the text property.
Title.defaultProps = {
  text: 'Default text',
};

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
  },
});

export default Title;

/* eslint-disable react-native/no-inline-styles */

import React from 'react';
import {View, SafeAreaView, StyleSheet} from 'react-native';
import Title from '../../components/title';

const Home = () => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Title text="Where do" style={{fontWeight: 'normal'}} />
        <Title text="you want to go?" />
        <Title text="Explore Attractions" style={styles.subtitle} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 32,
  },
  subtitle: {
    fontSize: 20,
    color: '#000000',
    marginTop: 40,
    marginBottom: 34,
  },
});

export default React.memo(Home);

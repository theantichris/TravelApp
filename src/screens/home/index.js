/* eslint-disable react-native/no-inline-styles */

import React from 'react';
import {View, SafeAreaView, StyleSheet} from 'react-native';
import Title from '../../components/title';
import Categories from '../../components/categories';

const categories = [
  'All',
  'Popular',
  'Historical',
  'Random',
  'Trending',
  'Exclusive',
  'Others',
];

const Home = () => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Title text="Where do" style={{fontWeight: 'normal'}} />
        <Title text="you want to go?" />
        <Title text="Explore Attractions" style={styles.subtitle} />

        <Categories categories={categories} selectedCategory="All" />
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
    marginBottom: 18,
  },
});

export default React.memo(Home);

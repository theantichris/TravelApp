import React, {useState} from 'react';
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
  const [selectedCategory, setSelectedCategory] = useState('All');

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Title text="Where do" style={styles.normalTitle} />
        <Title text="you want to go?" />
        <Title text="Explore Attractions" style={styles.subtitle} />

        <Categories
          categories={categories}
          selectedCategory={selectedCategory}
          onCategoryPress={setSelectedCategory}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 32,
  },
  normalTitle: {
    fontWeight: 'normal',
  },
  subtitle: {
    fontSize: 20,
    color: '#000000',
    marginTop: 40,
    marginBottom: 18,
  },
});

export default React.memo(Home);

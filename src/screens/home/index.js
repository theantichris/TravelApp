import React, {useState} from 'react';
import {View, SafeAreaView, StyleSheet} from 'react-native';
import Title from '../../components/title';
import Categories from '../../components/categories';
import AttractionCard from '../../components/AttractionCard';

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

        <View style={styles.row}>
          <AttractionCard
            title="Entertainment Park"
            subtitle="Rome"
            imageSrc={
              'https://cdn.generationvoyage.fr/2020/01/Europa-park-attraction-eau-755x485.jpg'
            }
          />

          <AttractionCard
            title="Entertainment Park"
            subtitle="Rome"
            imageSrc={
              'https://cdn.generationvoyage.fr/2020/01/Europa-park-attraction-eau-755x485.jpg'
            }
          />
        </View>
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
  row: {
    flexDirection: 'row',
  },
});

export default React.memo(Home);

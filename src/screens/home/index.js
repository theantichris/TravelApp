import React, {useEffect, useState} from 'react';
import {View, SafeAreaView, StyleSheet, ScrollView} from 'react-native';
import Title from '../../components/title';
import Categories from '../../components/categories';
import AttractionCard from '../../components/AttractionCard';
import jsonData from '../../data/attractions.json';

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
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(jsonData);
  }, []);

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

        <ScrollView contentContainerStyle={styles.row}>
          {data?.map((item, index) => {
            return (
              <AttractionCard
                style={index % 2 === 0 ? styles.firstCard : {}}
                key={item.id}
                title={item.name}
                subtitle={item.city}
                imageSrc={item.images?.length ? item.images[0] : null}
              />
            );
          })}
        </ScrollView>
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
    flexWrap: 'wrap',
  },
  firstCard: {
    marginRight: 12,
  },
});

export default React.memo(Home);

import React, {useEffect, useState} from 'react';
import {SafeAreaView, StyleSheet, FlatList, View, Text} from 'react-native';
import Title from '../../components/title';
import Categories from '../../components/categories';
import AttractionCard from '../../components/AttractionCard';
import jsonData from '../../data/attractions.json';
import categoriesData from '../../data/categories.json';

const ALL = 'All';

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState(ALL);
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(jsonData);
  }, []);

  useEffect(() => {
    if (selectedCategory === ALL) {
      setData(jsonData);
    } else {
      const filteredData = jsonData?.filter(item => {
        return item?.categories?.includes(selectedCategory);
      });

      setData(filteredData);
    }
  }, [selectedCategory]);

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={item => String(item?.id)}
        numColumns={2}
        style={styles.list}
        ListEmptyComponent={<Text style={styles.emptyText}>No items found.</Text>}
        ListHeaderComponent={
          <>
            <View style={styles.titleContainer}>
              <Title text="Where do" style={styles.normalTitle} />
              <Title text="you want to go?" />
              <Title text="Explore Attractions" style={styles.subtitle} />
            </View>

            <Categories
              categories={[ALL, ...categoriesData]}
              selectedCategory={selectedCategory}
              onCategoryPress={setSelectedCategory}
            />
          </>
        }
        renderItem={({item, index}) => (
          <AttractionCard
            style={index % 2 === 0 ? styles.firstCard : styles.secondCard}
            key={item.id}
            title={item.name}
            subtitle={item.city}
            imageSrc={item.images?.length ? item.images[0] : null}
          />
        )}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  list: {
    flexGrow: 1,
  },
  titleContainer: {
    margin: 32,
  },
  normalTitle: {
    fontWeight: 'normal',
  },
  subtitle: {
    fontSize: 20,
    color: '#000000',
    marginTop: 40,
  },
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  firstCard: {
    marginLeft: 32,
    marginRight: 12,
  },
  secondCard: {
    marginRight: 32,
  },
  emptyText: {
    textAlign: 'center',
    marginTop: 50,
    fontSize: 12,
    color: 'rgba(0,0,0,0.5)',
  },
});

export default React.memo(Home);

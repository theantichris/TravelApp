import React from 'react';
import {FlatList, Text, StyleSheet, TouchableOpacity} from 'react-native';

const Categories = ({categories, selectedCategory, onCategoryPress}) => {
  return (
    <FlatList
      horizontal
      data={categories}
      style={styles.categoriesContainer}
      showsHorizontalScrollIndicator={false}
      renderItem={({item}) => {
        const selected = selectedCategory === item;

        return (
          <TouchableOpacity
            onPress={() => onCategoryPress(item)}
            style={[
              styles.itemContainer,
              selected ? styles.selectedItemContainer : {},
            ]}>
            <Text
              style={[styles.item, selected ? styles.selectedCategory : {}]}>
              {item}
            </Text>
          </TouchableOpacity>
        );
      }}
    />
  );
};

const styles = StyleSheet.create({
  categoriesContainer: {
    marginRight: -32,
  },
  itemContainer: {
    marginVertical: 14,
    marginRight: 17,
  },
  selectedItemContainer: {
    borderBottomColor: '#4681A3',
    borderBottomWidth: 1,
  },
  item: {
    color: 'rgba(0,0,0,0.5)',
    fontSize: 12,
    paddingVertical: 2,
  },
  selectedCategory: {
    color: '#000000',
  },
});

export default React.memo(Categories);

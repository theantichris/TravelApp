import React from 'react';
import {FlatList, Text, StyleSheet, TouchableOpacity} from 'react-native';

const Categories = ({categories, selectedCategory, onCategoryPress}) => {
  return (
    <FlatList
      horizontal
      data={categories}
      keyExtractor={item => String(item)}
      showsHorizontalScrollIndicator={false}
      renderItem={({item, index}) => {
        const selected = selectedCategory === item;

        return (
          <TouchableOpacity
            onPress={() => onCategoryPress(item)}
            style={[
              styles.itemContainer,
              selected ? styles.selectedItemContainer : {},
              index === 0 ? styles.firstItem : {},
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
  itemContainer: {
    marginBottom: 14,
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
  firstItem: {
    marginLeft: 32,
  },
  selectedCategory: {
    color: '#000000',
  },
});

export default React.memo(Categories);

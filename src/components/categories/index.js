import React from 'react';
import {FlatList, Text, StyleSheet, View} from 'react-native';

const Categories = ({categories, selectedCategory}) => {
  return (
    <FlatList
      horizontal
      data={categories}
      renderItem={({item}) => {
        const selected = selectedCategory === item;

        return (
          <View
            style={[
              styles.itemContainer,
              selected ? styles.selectedItemContainer : {},
            ]}>
            <Text
              style={[styles.item, selected ? styles.selectedCategory : {}]}>
              {item}
            </Text>
          </View>
        );
      }}
    />
  );
};

const styles = StyleSheet.create({
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

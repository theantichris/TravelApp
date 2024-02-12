import React from 'react';
import {Image, StyleSheet, Text, View, Dimensions} from 'react-native';

// Use Dimensions to get the dimensions of the device's window or screen.
const {width} = Dimensions.get('window');

const AttractionCard = ({imageSrc, title, subtitle, style}) => {
  return (
    <View style={[styles.card, style]}>
      <Image style={styles.image} source={{uri: imageSrc}} />
      <Text style={styles.title}>{title}</Text>

      <View style={styles.row}>
        <Image
          style={styles.icon}
          source={require('../../assets/location.png')}
        />
        <Text style={styles.subtitle}>{subtitle}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    padding: 4,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#E2E2E2',
    borderRadius: 15,
  },
  image: {
    width: (width - 96) / 2,
    height: 120,
    borderRadius: 15,
  },
  title: {
    fontSize: 12,
    fontWeight: '500',
    marginTop: 12,
    marginLeft: 6,
  },
  subtitle: {
    fontSize: 10,
    fontWeight: '300',
    color: 'rgba(0,0,0,0.5)',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
    marginBottom: 12,
    marginLeft: 6,
  },
  icon: {
    width: 10,
    height: 10,
    marginRight: 6,
  },
});

export default React.memo(AttractionCard);

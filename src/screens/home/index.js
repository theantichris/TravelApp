import React from 'react';
import {View, SafeAreaView} from 'react-native';
import Title from '../../components/title';

const Home = () => {
  return (
    <SafeAreaView>
      <View>
        <Title text="My First Component" />
      </View>
    </SafeAreaView>
  );
};

export default Home;

import {SafeAreaView, Text, View, FlatList} from 'react-native';
import {GlobalProvider} from './context/GlobalState';
import React, {useState, useContext, useEffect} from 'react';
import {GlobalContext, ContactStates} from './context/GlobalState';
const Cards = () => {
  const {contacts} = useContext(GlobalContext) as ContactStates;

  return (
    <View style={{flex: 1, marginTop: 50, alignItems: 'center'}}>
      {contacts.map((value, index) => {
        console.log(contacts);
        return <Text>{value.name}</Text>;
      })}
    </View>
  );
};
export default Cards;

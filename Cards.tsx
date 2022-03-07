import {SafeAreaView, Text, View, FlatList} from 'react-native';
import {GlobalProvider} from './context/GlobalState';
import React, {useState, useContext, useEffect} from 'react';
import {GlobalContext, ContactStates} from './context/GlobalState';
import {Avatar, Card, IconButton} from 'react-native-paper';

const Cards = () => {
  const {contacts} = useContext(GlobalContext) as ContactStates;

  return (
    <View style={{flex: 1, marginTop: 50, alignItems: 'center'}}>
      {contacts.map((value, index) => {
        console.log(contacts);
        return (
          <Card.Title
            title={value.name}
            subtitle={value.phoneNumber}
            left={() => (
              <Avatar.Image size={50} source={{uri: value.image_uri}} />
            )}
          />
        );
      })}
    </View>
  );
};
export default Cards;

import {SafeAreaView, Text, View, FlatList, ScrollView} from 'react-native';
import {GlobalProvider} from './context/GlobalState';
import React, {useState, useContext, useEffect} from 'react';
import {GlobalContext, ContactStates} from './context/GlobalState';
import {Avatar, Card, Colors, IconButton} from 'react-native-paper';

const Cards = () => {
  const {contacts} = useContext(GlobalContext) as ContactStates;

  return (
    <View style={{flex: 1, marginTop: 5}}>
      <ScrollView style={{flex: 1, marginTop: 60}}>
        {contacts.map((value, index) => {
          console.log(contacts);
          return (
            <Card.Title
              style={{flex: 4}}
              title={value.name}
              subtitle={value.phoneNumber}
              left={() => (
                <Avatar.Image size={50} source={{uri: value.image_uri}} />
              )}
            />
          );
        })}
      </ScrollView>
    </View>
  );
};
export default Cards;

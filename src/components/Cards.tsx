import {View, ScrollView} from 'react-native';
import React, {useState, useContext, useEffect} from 'react';
import {GlobalContext, ContactStates} from '../context/GlobalState';
import {Avatar, Card, Colors, IconButton} from 'react-native-paper';
import {ContactType} from '../context/ContactType';

interface CardProps {
  search: string;
  setModalEditContactVisible: () => void;
}
const Cards = (props: CardProps) => {
  const [search, setSearchContacts] = useState(props.search);
  const {contacts, removeContact} = useContext(GlobalContext) as ContactStates;
  const isNumeric = (val: string): boolean => {
    return !isNaN(Number(val));
  };

  useEffect(() => {
    setSearchContacts(props.search);
  }, [props.search]);
  if (search?.length == 0 || search == ' ' || search == '') {
    return (
      <View style={{flex: 1, marginTop: 10}}>
        <ScrollView style={{flex: 1, marginTop: 10}}>
          {contacts.map((value, index) => {
            return (
              <Card.Title
                key={value.id}
                style={{
                  flex: 4,
                  borderWidth: 1,
                  borderColor: 'transparent',
                  borderBottomColor: Colors.grey300,
                }}
                title={value.name}
                subtitle={value.phoneNumber}
                left={() => (
                  <Avatar.Image size={50} source={{uri: value.image_uri}} />
                )}
                right={() => (
                  <IconandEdit
                    id={value.id}
                    onDelete={removeContact}
                    image_uri={value.image_uri}
                    name={value.name}
                    phoneNumber={value.phoneNumber}
                    setModalEditContactVisible={
                      props.setModalEditContactVisible
                    }></IconandEdit>
                )}
              />
            );
          })}
        </ScrollView>
      </View>
    );
  } else {
    const oldlistofContacts: ContactType[] = [...contacts];
    const newlistofContacts: ContactType[] = oldlistofContacts.filter(val => {
      const name: string = val.name!;
      const phoneNumber: string = val.phoneNumber!;
      if (search === '') {
        return val;
      } else if (name.toLowerCase().includes(search!!.toLowerCase()) === true) {
        return val;
      }
      if (isNumeric(search!![0]) === true) {
        return phoneNumber.includes(search!!.toLowerCase());
      }
    });
    return (
      <View style={{flex: 1, marginTop: 10}}>
        <ScrollView style={{flex: 1, marginTop: 10}}>
          {newlistofContacts.map((value, index) => {
            console.log(contacts);
            return (
              <Card.Title
                key={value.id}
                style={{
                  flex: 4,
                  borderWidth: 1,
                  borderColor: 'transparent',
                  borderBottomColor: Colors.grey300,
                }}
                title={value.name}
                subtitle={value.phoneNumber}
                left={() => (
                  <Avatar.Image size={50} source={{uri: value.image_uri}} />
                )}
                right={() => (
                  <IconandEdit
                    id={value.id}
                    onDelete={removeContact}
                    image_uri={value.image_uri}
                    name={value.name}
                    phoneNumber={value.phoneNumber}
                    setModalEditContactVisible={
                      props.setModalEditContactVisible
                    }></IconandEdit>
                )}
              />
            );
          })}
        </ScrollView>
      </View>
    );
  }
};
export default Cards;

interface IconandEditProps {
  id: number;
  image_uri?: string;
  name?: string;
  phoneNumber?: string;
  setModalEditContactVisible: () => void;
  onDelete: (id: number) => void;
}
const IconandEdit = (props: IconandEditProps) => {
  const {contacts, removeContact, setCurrentContact} = useContext(
    GlobalContext,
  ) as ContactStates;
  const onEdit = (
    id: number,
    image_uri?: string,
    name?: string,
    phoneNumber?: string,
  ) => {
    props.setModalEditContactVisible();
    setCurrentContact(id, image_uri, name, phoneNumber);
  };
  const handleDelete = () => {
    props.onDelete(props.id);
  };
  const handleEdit = () => {
    onEdit(props.id, props.image_uri, props.name, props.phoneNumber);
  };
  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'row',
        justifyContent: `center`,
        alignItems: 'center',
      }}>
      <IconButton icon="delete" size={30} onPress={handleDelete} />
      <IconButton icon="pencil" size={30} onPress={handleEdit} />
    </View>
  );
};

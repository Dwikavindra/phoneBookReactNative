import React, {ContextType, createContext, useEffect, useState} from 'react';

import {ContactType} from './ContactType';
import AsyncStorage from '@react-native-async-storage/async-storage';

// type FavoriteAction = {
//   type: string;
//   payload: FavoriteMoviesType;
// };

export type ContactStates = {
  contacts: ContactType[];

  currentContact: ContactType;
  addContact: (contact: ContactType) => void;
  removeContact: (id: number) => void;
  editContact: (id: number, contact: ContactType) => void;
  setCurrentContact: (
    id: number,
    image_uri?: string,
    name?: string,
    phoneNumber?: string,
  ) => void;
  setSearchContact: Function;
};
const initialState: ContactStates = {
  contacts: [],
  currentContact: {id: 0, name: '', phoneNumber: ''},
  addContact: () => {},
  removeContact: () => {},
  editContact: () => {},
  setCurrentContact: () => {},
  setSearchContact: Function,
};

export const GlobalContext = createContext<ContactStates>(initialState);

export const GlobalProvider: React.FC<React.ReactNode> = ({children}) => {
  const [contacts, setContacts] = useState<ContactType[]>([]);
  const [searchContacts, setSearcContacts] = useState<ContactType[]>([
    ...contacts,
  ]);
  const [text, setTextName] = useState<string>('');
  const [phoneNumber, setPhoneNumber] = useState<string>('');
  const [id, setID] = useState<number>(-1);
  const [imageUri, setImageUri] = useState<string>('');

  const AddToContacts = (contact: ContactType) => {
    storeData([...contacts, contact]);
    console.log(contacts);
  };
  const storeData = async (value: ContactType[]) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem('contacts', jsonValue);
    } catch (e) {
      // saving error
    }
  };

  const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('contacts');
      const value: ContactType[] | null =
        jsonValue != null ? (JSON.parse(jsonValue) as ContactType[]) : null;
      if (value != null) {
        setContacts(value as ContactType[]);
      }
    } catch (e) {
      // error reading value
    }
  };
  const removeContacts = (id: number) => {
    const newContacts: ContactType[] = contacts.filter(val => val.id != id);

    setContacts(newContacts);
    storeData(newContacts);
  };
  const currentContact: ContactType = {
    id: id,
    image_uri: imageUri,
    name: text,
    phoneNumber: phoneNumber,
  };

  const editContacts = (id: number, newContactInfo: ContactType) => {
    console.log(id);
    const newContacts: ContactType[] = [...contacts];
    newContacts.find(item => {
      if (item.id === id) {
        item.name = newContactInfo.name;
        item.phoneNumber = newContactInfo.phoneNumber;
        item.image_uri = newContactInfo.image_uri;
      }
    });
    setContacts(newContacts);
    storeData(newContacts);
  };

  const setCurrentContacts = (
    id: number,
    image_uri?: string,
    name?: string,
    phoneNumber?: string,
  ) => {
    setID(id);
    setTextName(name!!);
    setPhoneNumber(phoneNumber!!);
    setImageUri(image_uri!!);
  };

  //   useEffect(() => {
  //     if (contacts.length > 0) {
  //       storeData(contacts);
  //     }
  //   }, [contacts]);

  useEffect(() => {
    getData();
  }, [contacts]);

  let values: ContactStates = {
    contacts: contacts,
    currentContact: currentContact,
    addContact: AddToContacts,
    removeContact: removeContacts,
    editContact: editContacts,
    setCurrentContact: setCurrentContacts,
    setSearchContact: setSearcContacts,
  };

  return (
    <GlobalContext.Provider value={values}>{children}</GlobalContext.Provider>
  );
};

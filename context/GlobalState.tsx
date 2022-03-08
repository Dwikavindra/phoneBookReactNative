import React, {ContextType, createContext, useEffect, useState} from 'react';

import {ContactType} from './ContactType';

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
    setContacts([...contacts, contact]);
    console.log(contacts);
  };

  const removeContacts = (id: number) => {
    const newContacts: ContactType[] = contacts.filter(val => val.id != id);

    setContacts(newContacts);
    // sessionStorage.setItem("favorites", JSON.stringify(newmovies));
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
    // sessionStorage.setItem("favorites", JSON.stringify(newmovies));
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
  //   function getFavoritesFromSessionStorage() {
  //     let favoriteslist = sessionStorage.getItem("favorites");
  //     if (favoriteslist == null) {
  //       return movies;
  //     } else {
  //       setMovies(JSON.parse(favoriteslist));
  //     }
  //   }

  //   useEffect(() => {
  //     if (movies.length > 0) {
  //       sessionStorage.setItem("favorites", JSON.stringify(movies));
  //     }
  //   }, [movies]);

  //   useEffect(() => {
  //     getFavoritesFromSessionStorage();
  //   }, []);
  useEffect(() => {
    console.log(contacts);
    setContacts(contacts);
  });

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

import React, {ContextType, createContext, useEffect, useState} from 'react';

import {ContactType} from './ContactType';

// type FavoriteAction = {
//   type: string;
//   payload: FavoriteMoviesType;
// };

export type ContactStates = {
  contacts: ContactType[];
  addContact: (contact: ContactType) => void;
  removeContact: (id: number) => void;
};
const initialState: ContactStates = {
  contacts: [],
  addContact: () => {},
  removeContact: () => {},
};

export const GlobalContext = createContext<ContactStates>(initialState);

export const GlobalProvider: React.FC<React.ReactNode> = ({children}) => {
  const [contacts, setContacts] = useState<ContactType[]>([]);

  const AddToContacts = (contact: ContactType) => {
    setContacts([...contacts, contact]);
    console.log(contacts);
  };

  const removeContacts = (id: number) => {
    const newmovies: ContactType[] = contacts.filter(val => val.id != id);

    setContacts(newmovies);
    // sessionStorage.setItem("favorites", JSON.stringify(newmovies));
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
    addContact: AddToContacts,
    removeContact: removeContacts,
  };

  return (
    <GlobalContext.Provider value={values}>{children}</GlobalContext.Provider>
  );
};

import React, {useEffect} from 'react';
import {useState, useContext} from 'react';
import styles from './styles';

import {SafeAreaView, Text, View, FlatList} from 'react-native';
import {Searchbar, IconButton, Colors, TextInput} from 'react-native-paper';
import ModalAddContact from './ModalAddContact';
import {GlobalProvider} from './src/context/GlobalState';
import {GlobalContext, ContactStates} from './src/context/GlobalState';
import Cards from './src/components/Cards';
import ModalEditContact from './ModalEditContact';
import {Icon} from 'react-native-paper/lib/typescript/components/Avatar/Avatar';

interface ItemProps {
  name: String;
}
const Item = (props: ItemProps) => (
  <View style={styles.item}>
    <Text style={styles.title}>{props.name}</Text>
  </View>
);
export function App() {
  const [text, setText] = useState<string>('');
  const [visible, setVisible] = useState(false);
  const [isModalEditVisible, setModalEditVisible] = useState(false);
  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const showModalEdit = () => setModalEditVisible(true);
  const hideModalEdit = () => setModalEditVisible(false);
  const {contacts} = useContext(GlobalContext) as ContactStates;
  const onChangeTextName = (text: string) => setText(text);

  useEffect(() => {
    console.log('FROM App.tsx');
    console.log(contacts);
  }, [contacts]);
  return (
    <SafeAreaView style={styles.container}>
      <GlobalProvider>
        <View style={styles.container}>
          <Text style={styles.title}>Phone Book</Text>
          <ModalAddContact
            visible={visible}
            onDismiss={hideModal}></ModalAddContact>

          <ModalEditContact
            visible={isModalEditVisible}
            onDismiss={hideModalEdit}></ModalEditContact>

          <View style={styles.textInput}>
            <TextInput
              onChangeText={onChangeTextName}
              style={styles.textInputPadding}
              selectionColor="blue"
              value={text}
              mode="outlined"
              left={<TextInput.Icon name="magnify"></TextInput.Icon>}
              activeOutlineColor={Colors.blue100}
              theme={{colors: {background: 'transparent'}}}></TextInput>
          </View>
          <Cards
            setModalEditContactVisible={showModalEdit}
            search={text}></Cards>
        </View>

        <IconButton
          onPress={showModal}
          style={styles.floatingActionButton}
          icon="plus"
          size={50}
          color={Colors.white}></IconButton>
      </GlobalProvider>
    </SafeAreaView>
  );
}

export default App;

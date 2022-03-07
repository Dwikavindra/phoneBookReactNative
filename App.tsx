import React, {useEffect} from 'react';
import {useState, useContext} from 'react';
import styles from './styles';

import {SafeAreaView, Text, View, FlatList} from 'react-native';
import {Searchbar, TextInput, IconButton, Colors} from 'react-native-paper';
import ModalAddContact from './ModalAddContact';
import {GlobalProvider} from './context/GlobalState';
import {GlobalContext, ContactStates} from './context/GlobalState';
import {ContactType} from './context/ContactType';
import Cards from './Cards';

interface ItemProps {
  name: String;
}
const Item = (props: ItemProps) => (
  <View style={styles.item}>
    <Text style={styles.title}>{props.name}</Text>
  </View>
);
export function App() {
  const [text, setText] = useState<string>();
  const [visible, setVisible] = useState(false);
  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const {contacts} = useContext(GlobalContext) as ContactStates;
  const onChangeTextName = (text: string) => setText(text);
  const containerStyle = {backgroundColor: 'white', padding: 20};
  const renderItem = ({name}: ContactType) => <Item name={name} />;

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
          <Cards></Cards>
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

import React, {useEffect} from 'react';
import {useState} from 'react';
import styles from './styles';

import {BackHandler, SafeAreaView, Text, View} from 'react-native';
import {Searchbar, TextInput, IconButton, Colors} from 'react-native-paper';
import ModalAddContact from './ModalAddContact';

export function App() {
  const [text, setText] = useState<string>();
  const [visible, setVisible] = useState(false);
  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const onChangeTextName = (text: string) => setText(text);
  const containerStyle = {backgroundColor: 'white', padding: 20};

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Text style={styles.title}>Phone Book</Text>
        <ModalAddContact
          visible={visible}
          onDismiss={hideModal}></ModalAddContact>
        <View style={styles.textInput}>
          <TextInput
            onChangeText={text => onChangeTextName(text)}
            style={styles.textInputPadding}
            selectionColor="blue"
            value={text}
            mode="outlined"
            left={<TextInput.Icon name="magnify"></TextInput.Icon>}
            activeOutlineColor={Colors.blue100}
            theme={{colors: {background: 'transparent'}}}></TextInput>
        </View>
      </View>

      <IconButton
        onPress={showModal}
        style={styles.floatingActionButton}
        icon="plus"
        size={50}
        color={Colors.white}></IconButton>
    </SafeAreaView>
  );
}

export default App;

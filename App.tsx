/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {useState} from 'react';
import styles from './styles';
import {BackHandler, SafeAreaView, Text, View} from 'react-native';
import {
  Searchbar,
  TextInput,
  IconButton,
  Colors,
  Modal,
  Portal,
} from 'react-native-paper';
import ModalAddContact from './ModalAddContact';

export function App() {
  const [text, setText] = useState<string>(' ');
  const [visible, setVisible] = useState(false);
  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Text style={styles.title}>Phone Book</Text>
        <ModalAddContact
          visible={visible}
          onDismiss={hideModal}
          setVisible={setVisible}></ModalAddContact>
        <View style={styles.textInput}>
          <TextInput
            onChange={() => {
              setText(text);
            }}
            style={styles.textInputPadding}
            value={text}
            mode="flat"
            left={<TextInput.Icon name="magnify"></TextInput.Icon>}></TextInput>
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

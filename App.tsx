/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import * as React from 'react';
import styles from './styles';
import {SafeAreaView, Text, View} from 'react-native';
import {
  Searchbar,
  TextInput,
  IconButton,
  Colors,
  Modal,
  Portal,
} from 'react-native-paper';

export function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Text style={styles.title}>Phone Book</Text>
<<<<<<< HEAD
        <ModalAddContact
          visible={visible}
          onDismiss={hideModal}
          setVisible={setVisible}></ModalAddContact>
=======

>>>>>>> parent of 94a03dd (added Modal)
        <View style={styles.textInput}>
          <TextInput
            style={styles.textInputPadding}
            value="Search by phone number or name"
            mode="flat"
            left={<TextInput.Icon name="magnify"></TextInput.Icon>}></TextInput>
        </View>
      </View>
      <IconButton
        style={styles.floatingActionButton}
        icon="plus"
        size={50}
        color={Colors.white}></IconButton>
    </SafeAreaView>
  );
}

export default App;

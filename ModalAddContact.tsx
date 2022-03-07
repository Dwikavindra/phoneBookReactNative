import Modal from 'react-native-modal';
import styles from './styles';
import {Text, View} from 'react-native';
import React, {useState, useContext} from 'react';
import {GlobalContext, ContactStates} from './context/GlobalState';

import * as ImagePicker from 'react-native-image-picker';
import {Asset} from 'react-native-image-picker';
import {
  Avatar,
  TextInput,
  Colors,
  Button,
  IconButton,
} from 'react-native-paper';
import {ContactType} from './context/ContactType';

interface ModalAddContactProps {
  visible: boolean;
  onDismiss: () => void;
}

export default function ModalAddContact(props: ModalAddContactProps) {
  const [text, setTextName] = useState<string>();
  const [phoneNumber, setPhoneNumber] = useState<string>();
  const [imageUri, setImageUri] = useState<string>('');
  const {addContact, contacts} = useContext(GlobalContext) as ContactStates;
  const onChangeTextName = (text: string) => setTextName(text);
  const onChangeTextPhoneNumber = (text: string) => setPhoneNumber(text);
  const onBackdropPress = () => {
    props.onDismiss();
    setImageUri(' ');
  };
  const onSubmit = () => {
    const newContact: ContactType = {
      id: Math.floor(Math.random() * 1000),
      image_uri: imageUri,
      name: text!,
      phoneNumber: phoneNumber!,
    };
    console.log(newContact.name);
    addContact(newContact);
    setTextName('');
    setPhoneNumber('');
    setImageUri('');
    props.onDismiss();
  };

  const handleChoosePhoto = async () => {
    const options = {};
    try {
      const result = await ImagePicker.launchImageLibrary({
        selectionLimit: 1,
        mediaType: 'photo',
      });
      const arrayResult: any = result.assets;
      console.log(arrayResult[0].uri);
      setImageUri(arrayResult[0].uri);
      arrayResult[0] = '';
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Modal isVisible={props.visible} onBackdropPress={onBackdropPress}>
      <View style={styles.modalAddContact}>
        <View style={styles.modalAddContactHeader}>
          <Text style={styles.modalAddContactHeaderText}>Contacts</Text>
          <IconButton
            style={styles.modalCloseButton}
            onPress={onBackdropPress}
            icon="close"
            size={20}
            color={Colors.grey500}></IconButton>
        </View>
        <Avatar.Image
          style={styles.modalAddContactProfile}
          size={190}
          source={{uri: imageUri}}
        />
        <Button
          style={styles.addProfilePictureButton}
          icon="camera"
          mode="text"
          onPress={handleChoosePhoto}>
          Add Photo
        </Button>
        <TextInput
          onChangeText={text => onChangeTextName(text)}
          style={styles.textInputName}
          label={'Name'}
          value={text}
          left={<TextInput.Icon name="account"></TextInput.Icon>}
          theme={{colors: {background: 'transparent'}}}></TextInput>
        <TextInput
          onChangeText={text => onChangeTextPhoneNumber(text)}
          style={styles.textInputPhoneNumber}
          label={'Number'}
          value={phoneNumber}
          left={<TextInput.Icon name="phone"></TextInput.Icon>}
          theme={{colors: {background: 'transparent'}}}></TextInput>
        <Button
          style={styles.addContactButton}
          icon="plus"
          mode="contained"
          onPress={onSubmit}>
          Add
        </Button>
      </View>
    </Modal>
  );
}

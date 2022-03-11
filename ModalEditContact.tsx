import Modal from 'react-native-modal';
import styles from './styles';
import {Text, View} from 'react-native';
import React, {useState, useContext, useEffect} from 'react';
import {GlobalContext, ContactStates} from './src/context/GlobalState';

import * as ImagePicker from 'react-native-image-picker';
import {Asset} from 'react-native-image-picker';
import {
  Avatar,
  TextInput,
  Colors,
  Button,
  IconButton,
} from 'react-native-paper';
import {ContactType} from './src/context/ContactType';

interface ModalEditContactProps {
  visible: boolean;
  onDismiss: () => void;
}

export default function ModalEditContact(props: ModalEditContactProps) {
  const {setCurrentContact, currentContact, editContact} = useContext(
    GlobalContext,
  ) as ContactStates;
  const [text, setTextName] = useState<string | undefined>(currentContact.name);
  const [phoneNumber, setPhoneNumber] = useState<string | undefined>(
    currentContact.phoneNumber,
  );

  //error on modal edit is because every build the file path changes as long as the build is not different should be fine
  const [id, setID] = useState<number>(currentContact.id);
  const [imageUri, setImageUri] = useState<string | undefined>(
    currentContact.image_uri == null || currentContact.image_uri == undefined
      ? 'https://cdn.idntimes.com/content-images/post/20190204/img-20190203-235941-16c3a8a0cf0a39303830e8e107fd60d6.JPG'
      : currentContact.image_uri,
  );
  const onChangeTextName = (text: string) => setTextName(text);
  const onChangeTextPhoneNumber = (text: string) => setPhoneNumber(text);
  const onBackdropPress = () => {
    props.onDismiss();
  };

  useEffect(() => {
    setTextName(currentContact.name);
  }, [currentContact.name]);

  useEffect(() => {
    setPhoneNumber(currentContact.phoneNumber);
  }, [currentContact.phoneNumber]);
  useEffect(() => {
    setID(currentContact.id);
  }, [currentContact.id]);
  useEffect(() => {
    setImageUri(currentContact.image_uri);
  }, [currentContact.image_uri]);
  const onSubmit = () => {
    const newContact: ContactType = {
      id: id,
      image_uri: imageUri,
      name: text!,
      phoneNumber: phoneNumber!,
    };
    console.log(newContact.name);
    setCurrentContact(
      newContact.id,
      newContact.image_uri,
      newContact.name,
      newContact.phoneNumber,
    );
    editContact(id, newContact);
    props.onDismiss();
  };

  const handleChoosePhoto = async () => {
    try {
      const result = await ImagePicker.launchImageLibrary({
        selectionLimit: 1,
        mediaType: 'photo',
      });
      const arrayResult: any = result.assets;
      console.log(arrayResult[0].uri);
      setImageUri(arrayResult[0].uri);
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
          Change Photo
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
          Edit
        </Button>
      </View>
    </Modal>
  );
}

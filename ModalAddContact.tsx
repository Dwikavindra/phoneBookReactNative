import Modal from 'react-native-modal';
import styles from './styles';
import {Text, View} from 'react-native';
import React from 'react';

interface ModalAddContactProps {
  visible: boolean;
  onDismiss: () => void;
}

export default function ModalAddContact(props: ModalAddContactProps) {
  return (
    <Modal isVisible={props.visible} onBackdropPress={props.onDismiss}>
      <View style={styles.modalAddContact}>
        <Text>Hello!</Text>
      </View>
    </Modal>
  );
}

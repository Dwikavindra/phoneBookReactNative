import {Modal, Portal} from 'react-native-paper';
import styles from './styles';
import {Text, View} from 'react-native';
import React from 'react';

interface ModalAddContactProps {
  visible: boolean;
  onDismiss: Function;
}

export default function ModalAddContact(props: ModalAddContactProps) {
  return (
    <Portal>
      <Modal visible={props.visible} onDismiss={() => props.onDismiss()}>
        <View style={styles.modalAddContact}>
          <Text>Hello World</Text>
        </View>
      </Modal>
    </Portal>
  );
}

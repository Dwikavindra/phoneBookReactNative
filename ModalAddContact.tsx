import {Modal, Portal} from 'react-native-paper';
import styles from './styles';
import {Text, View} from 'react-native';
import React from 'react';
import {useEffect, useState} from 'react';

interface ModalAddContactProps {
  visible: boolean;
  onDismiss: () => void;
  setVisible: Function;
}

export default function ModalAddContact(props: ModalAddContactProps) {
  const [visible, setVisible] = useState(props.visible);

  useEffect(() => {
    () => {
      props.setVisible(props.visible);
    };
  }, []);
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

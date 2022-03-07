import {StyleSheet} from 'react-native';
import {Colors} from 'react-native-paper';

export default StyleSheet.create({
  container: {
    flex: 1,
  },

  title: {
    marginLeft: 7,
    marginTop: 24,
    fontSize: 24,
    fontWeight: '600',
  },

  textInput: {
    height: 20,
    width: 350,
    marginTop: 30,
    alignSelf: 'center',
  },
  textInputPadding: {
    paddingHorizontal: 10,
    paddingEnd: 10,
  },

  floatingActionButton: {
    backgroundColor: Colors.blue500,
    position: 'absolute',
    bottom: 30,
    alignSelf: 'flex-end',
    right: 20,
  },
  modalAddContact: {
    flex: 1,
    backgroundColor: Colors.white,
    alignSelf: 'center',
    alignItems: 'center',
    height: 700,
    width: 350,
    margin: 50,
  },
  modalAddContactHeader: {
    flexDirection: 'row',
    height: 40,
    borderColor: 'green',
  },
  modalAddContactHeaderText: {
    justifyContent: 'center',
    alignItems: `center`,
    left: 20,
    fontSize: 24,
    fontWeight: '600',
  },
  modalAddContactProfile: {
    top: 0,
  },
  textInputName: {
    height: 50,
    width: 300,
    marginTop: 30,
    alignSelf: 'center',
  },
  textInputPhoneNumber: {
    height: 50,
    width: 300,
    marginTop: 30,
    alignSelf: 'center',
  },
  addProfilePictureButton: {
    marginTop: 10,
    alignSelf: 'center',
  },
  addContactButton: {
    marginTop: 100,
    alignSelf: 'center',
  },
  modalCloseButton: {
    left: 110,
    bottom: 10,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
});

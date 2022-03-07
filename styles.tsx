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
});

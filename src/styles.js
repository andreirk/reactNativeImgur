import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#abcdef',
    alignItems: 'center',
    justifyContent: 'center',
  },
  fullscreen: {
    flex: 1,
    width: null,
    height: null
  },
  backgroundImage: {
    flex: 1,
    justifyContent: 'flex-end',
    width: null,
    height: null
  },
  portrait: {
    resizeMode: 'contain'
  },
  landscape: {
    resizeMode: 'cover'
  },
  imageLabel: {
    textAlign: 'center',
    backgroundColor: 'rgba(100, 100, 100, 0.5)',
    color: 'white',
    padding: 10
  },
});
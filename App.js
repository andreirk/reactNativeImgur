import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
  ScrollView
} from 'react-native';



export default class App extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.empty} />
        <Text>My new text remove styles changes </Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
      </View>
    );
  }


}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#abcdef',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

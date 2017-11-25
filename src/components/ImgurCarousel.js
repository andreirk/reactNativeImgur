import React, {Component} from 'react';
import {toJS} from 'mobx';
import {inject, observer} from 'mobx-react/native';
import TouchableImage from "./TouchableImage";
import {Text, View} from "react-native";
import {styles} from "../styles";


@inject('store') @observer
class ImageCarousel extends Component {
  render() {
    const { store } = this.props;

    if (!store.currentImage) {
      return null;
    }

    return (
        <View style={styles.container}>
          <Text>Hello from carusel</Text>
        <TouchableImage image={store.currentImage}
                        orientation={store.orientation} />
        </View>
    );
  }
}


export default ImageCarousel;
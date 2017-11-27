import React, {Component} from 'react';
import {toJS} from 'mobx';
import {inject, observer} from 'mobx-react/native';
import TouchableImage from "./TouchableImage";
import Album from "./Album";
import {Text, View} from "react-native";
import {styles} from "../styles";
import Spinner from "./Spiner";


@inject('store') @observer
class ImageCarousel extends Component {

  render() {
    const { store } = this.props;

    if (!store.currentImage) {
      return <Spinner/>;
    }


    if (store.currentImage.is_album) {
      return (
          <Album albumID={store.currentImage.id}
                 orientation={store.orientation} />
      )
    } else {
        return (
            <View style={styles.container}>
              <Text>Hello from carusel</Text>
            <TouchableImage image={store.currentImage}
                            orientation={store.orientation} />
            </View>
        );
      }
  }
}


export default ImageCarousel;
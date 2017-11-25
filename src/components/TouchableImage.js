import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableHighlight
} from 'react-native';
import { toJS } from 'mobx';
import { inject, observer } from 'mobx-react/native';
import {styles} from "../styles";


@inject('store') @observer
class TouchableImage extends Component {
  state = {
    width: null
  }

  onPress(event) {
    const { width } = this.state,
        { store } = this.props,
        X = event.nativeEvent.locationX;

    if (X < width/2) {
      store.prevImage();
    }else{
      store.nextImage();
    }
  }

  onImageLayout(event) {
    this.setState({
      width: event.nativeEvent.layout.width
    });
  }

  render() {
    const { image, orientation } = this.props;

    const uri = image.link.replace('http://', 'https://');

    console.log(toJS(image));

    return (
        <TouchableHighlight onPress={this.onPress.bind(this)}
                            style={styles.fullscreen}>
          <Image source={{uri: uri}}
                 style={[styles.backgroundImage, styles[orientation.toLowerCase()]]}
                 onLayout={this.onImageLayout.bind(this)}>
            <Text style={styles.imageLabel}>{image.title}</Text>
          </Image>
        </TouchableHighlight>
    );
  }
}

export default TouchableImage
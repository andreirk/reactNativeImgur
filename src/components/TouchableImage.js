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

  get caption() {
    let { caption, image } = this.props;
    return image.title || image.description || caption;
  }

  render() {
    const { image, orientation, height  } = this.props;

    const uri = image.link.replace('http://', 'https://');

    console.log('----- to JS IMAGE',toJS(image));

    return (
        <TouchableHighlight onPress={this.onPress.bind(this)}
                            style={styles.fullscreen}>
          <Image source={{uri: uri}}
                 style={[styles.backgroundImage,
                         styles[orientation.toLowerCase()],
                         {height: height || null}
                 ]}
                 onLayout={this.onImageLayout.bind(this)}>
            <Text style={styles.imageLabel}>{this.caption}</Text>
          </Image>
        </TouchableHighlight>
    );
  }
}

export default TouchableImage
import React from 'react'
import {Text, View, ListView} from "react-native";
import {inject, observer} from "mobx-react";
import {toJS} from 'mobx';
import TouchableImage from "./TouchableImage";
import {styles} from "../styles";


@inject('store') @observer
export default class Album extends React.Component {
  componentWillMount() {
    const {store, albumID} = this.props;

    store.fetchAlbum(albumID);
  }

  componentWillReceiveProps(newProps) {
    const {store, albumID} = newProps;

    store.fetchAlbum(albumID);
  }


  get dataSource() {
    const { store, albumID } = this.props,
        ds = new ListView.DataSource({
          rowHasChanged: (r1, r2) => r1.id !== r2.id
        });

    return ds.cloneWithRows(toJS(this.album.images));
  }

  get album() {
    const { store, albumID } = this.props;

    return store.albums.get(albumID);
  }

  renderRow(img, caption) {
    const { store, orientation } = this.props;

    let height = store.screenSize.height;

    if (img.height < height) {
      height = img.height;
    }

    return (
        <TouchableImage image={img}
                        height={height}
                        caption={caption}
                        orientation={orientation}
        />
    )
  }

  renderHeader() {
    return (
        <Text style={styles.header}>{this.album.title}</Text>
    );
  }

  render () {
    const { store, albumID } = this.props,
        album = this.album;

    if (album) {
      if (album.images.length > 1) {
        return (
            <View style={styles.fullscreen}>
              <ListView dataSource={this.dataSource}
                        renderRow={img => this.renderRow(img)}
                        renderHeader={this.renderHeader.bind(this)}
                        style={styles.fullscreen} />
            </View>
        );
      }else{
        return this.renderRow(album.images[0], album.title);
      }
    }else{
      return null;
    }
  }


}
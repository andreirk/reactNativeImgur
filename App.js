import React from 'react'
import {Provider  as MobXProvider, observer} from 'mobx-react'
import {Text, View} from "react-native";
import {LANDSCAPE, PORTRAIT} from "./Constants";
import Store from './Store'
import {styles} from "./src/styles"
import ImgurCarousel from "./src/components/ImgurCarousel";

@observer
export default class App extends React.Component {

  componentWillMount() {
    Store.fetchImages();
  }

  onLayout(event) {
    const { width, height } = event.nativeEvent.layout;
    const orientation = ( width > height ) ? LANDSCAPE : PORTRAIT;

    Store.changeOrientation(orientation);
    Store.updateScreenSize(width, height);

    // Store.changeImage();
  }

  render() {
    return (
        <MobXProvider store={Store}>
          <View style={styles.container}
                onLayout={this.onLayout.bind(this)}>
            <ImgurCarousel/>

          </View>
        </MobXProvider>
    );
  }
}



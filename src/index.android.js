import React from 'react'
import {Provider  as MobXProvider, observer} from 'mobx-react'
import {LANDSCAPE, PORTRAIT} from "../Constants";
import ImgurCarousel from "./components/ImgurCarousel";
import Store from "../Store";
import {Text, View} from "react-native";
import {styles} from './styles'

@observer
class ImgurApp extends React.Component {

  onLayout(event) {
    const { width, height } = event.nativeEvent.layout;
    const orientation = ( width > height ) ? LANDSCAPE : PORTRAIT;

    Store.changeOrientation(orientation);
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

export default ImgurApp
import React from 'react'
import {Provider  as MobXProvider, observer} from 'mobx-react'
import {Text, View} from "react-native";
import {LANDSCAPE, PORTRAIT} from "./Constants";
import Store from './Store'
import {styles} from "./src/styles"
import ImgurCarousel from "./src/components/ImgurCarousel";

@observer
export default class App extends React.Component {

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
            <Text>Hello fffgdfvcx</Text>
          </View>
        </MobXProvider>
    );
  }
}
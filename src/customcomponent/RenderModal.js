import { Text, View ,Modal ,ActivityIndicator} from 'react-native'
import React, { Component } from 'react'
import Spinner from "react-native-loading-spinner-overlay"

export default class RenderModal extends Component {
  render() {
    return (
      <View>
        <Modal
         animationType="slide"
         transparent={true}
         visible={this.props.visible}>
          <Spinner color='rgb(200, 104, 200)' visible={true}  />
        </Modal>
     </View>
    )
  }
}
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
          <Spinner color='#ad29f9' visible={true}  />
        </Modal>
     </View>
    )
  }
}
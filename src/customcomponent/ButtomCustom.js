import React, { Component } from 'react'
import { Text, TouchableOpacity } from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign'
import CustomeFont from '../CustomeFont'
import { normalize } from '../services/api.function'

export default class ButtomCustom extends Component {
  render() {
    return (
      <TouchableOpacity
        onPress={this.props.onPress}
        style={{
          backgroundColor: this.props.backgroundColor, //"#3D265E",
          paddingHorizontal: 10,
          justifyContent: 'center',
          alignItems: 'center',
          marginHorizontal: this.props.margin ? null : 20,
          borderRadius: 10,
          flexDirection: 'row',
          height:40,
          marginBottom: this.props.marginBottom,
          marginTop:this.props.margintop ? 0: 25
        }}
      >
        <AntDesign name={this.props.name} size={25} color='#FFF' />
        <Text
          allowFontScaling={false}
          style={{ color: '#fff', fontSize: 17, fontFamily:CustomeFont.Poppins_SemiBold }}
        >
          {this.props.title}
        </Text>
      </TouchableOpacity>
    )
  }
}

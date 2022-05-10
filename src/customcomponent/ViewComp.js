import React, { Component } from "react"
import { Text, View, Image, TouchableOpacity } from "react-native"
import AntDesign from "react-native-vector-icons/AntDesign"
import CustomeFont from "../CustomeFont"
export default class ViewComp extends Component {
  render() {
    return (
      <TouchableOpacity
        onPress={this.props.onPress}
        style={{
          width: "100%",
          justifyContent: "center",
          marginTop: 25,
          height: 90,
          backgroundColor: "rgba(100,100,100,0.1)",
          borderRadius: 10
        }}
        activeOpacity={1}
      >
        <View style={{ position: "absolute", zIndex: 1, marginLeft: "40%" }}>
          <Text
            style={{
              fontSize: 16,
              color: "#fff",
              fontFamily: CustomeFont.Poppins_Medium
            }}
          >
            {this.props.title}
          </Text>
        </View>
        <View
          style={{
            position: "absolute",
            zIndex: 1
            // backgroundColor: "rgba(234, 104, 253,0.4)"
          }}
        >
          <Image
            resizeMode="contain"
            style={{
              width: 60,
              height: 60,
              marginLeft: "20%"
            }}
            source={this.props.iconpath}
          />
        </View>
        <View style={{ position: "absolute", zIndex: 1, marginLeft: "87%" }}>
          <AntDesign name={"right"} size={25} color="#bcbcbc" />
        </View>
        {/* <Image
          resizeMode='stretch'
          style={{ width: '100%', height: 90, borderRadius: 12 }}
          source={require('../assets/item-1.jpeg')}
        /> */}
      </TouchableOpacity>
    )
  }
}

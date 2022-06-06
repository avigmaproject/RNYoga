import React, { Component } from "react"
import { Text, View, TouchableOpacity, Image } from "react-native"
import { normalize } from "../services/api.function"
import LinearGradient from 'react-native-linear-gradient';
import CustomeFont from "../CustomeFont";

export default class Header extends Component {
  render() {
    return (
<View>
{/* <LinearGradient start={{x: 0.1, y: 0.2}} end={{  x: 0.1, y: 1  }} colors={['#3e265f','#663b89', ]} style={{
        width: "100%",
        justifyContent: "center",
        height: 100,
        paddingTop:40.
      }} > */}
          {/* <Image
                resizeMode="stretch"
                style={{ width: "270%", height: 150,marginLeft:"-94%",position:"absolute",zIndex:1111,marginTop:"-8%"}}
                source={require('../assets/hover.png')}/> */}
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          height:50       

        }}
      >
        <View
          style={{
            justifyContent: "flex-start",
            flexDirection: "row",
            alignItems: "center"
          }}
        >
          <View>
            <TouchableOpacity
              onPress={() => this.props.navigation.goBack()}
              style={{
                justifyContent: "center",
                alignItems: "center",
                marginHorizontal: 20
              }}
            >
              <Image
                resizeMode="contain"
                style={{ height: 38, width: 38, borderRadius: 10 }}
                source={require("../assets/backarrow.png")}
              />
            </TouchableOpacity>
          </View>
          <View>
            <Text allowFontScaling={false}style={{    color: "rgba(255,255,255,0.8)",fontSize:27,fontFamily: CustomeFont.Poppins_Medium, textTransform: "capitalize",}}>
              {this.props.title}
            </Text>
          </View>
        </View>
        <View
          style={{ alignItems: "center", justifyContent: "center", flex: 1 }}
        >
          <Text allowFontScaling={false} style={{  color: "rgba(255,255,255,0.8)",   fontFamily: CustomeFont.Poppins_Light, fontSize: 20 }}>
            {this.props.title2}
          </Text>
        </View>
        <View>
          <TouchableOpacity onPress={this.props.onPress}>
            <Text allowFontScaling={false} style={{ color: "#fff" }}>{this.props.title3}</Text>
          </TouchableOpacity>
        </View>
      </View>
{/* // </LinearGradient> */}
</View>
    )
  }
}

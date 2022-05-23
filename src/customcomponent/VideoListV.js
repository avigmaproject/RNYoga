import React, { Component } from "react"
import { Text, View, Image, TouchableOpacity ,StyleSheet} from "react-native"
import LinearGradient from "react-native-linear-gradient"
import CustomeFont from "../CustomeFont"
import HTMLView from "react-native-htmlview";

export default class VideoListV extends Component {
  render() {
    return (
      <TouchableOpacity
        onPress={() => {
          this.props.onPress()
        }}
      >
        <View>
          <View
            style={{
              marginHorizontal: 15,
              justifyContent: "center",
              alignContent: "center"
            }}
          >
            <Image
              source={require("../assets/yoga.jpg")}
              resizeMethod={"resize"}
              resizeMode={"cover"}
              style={{ width: "100%", height: 200, borderRadius: 10 }}
            />
          </View>
          <LinearGradient
            start={{ x: 0.0, y: 0.0 }}
            end={{ x: 0, y: 1.2 }}
            colors={["#D970F5", "#A33AF3"]}
            style={{
              position: "absolute",
              bottom: 10,
              left: 30,
              paddingHorizontal: 10,
              paddingHorizontal:10,
              borderRadius: 20
            }}
          >
            <Text
              style={{
                fontFamily: CustomeFont.Poppins_Regular,
                fontSize: 12,
                color: "white",
                textAlign: "center"
              }}
            >
            {this.props.data.YG_Timer}{".00 "}
            </Text>
          </LinearGradient>
        </View>
        <Text
          style={{
            fontSize: 15,
            fontFamily: CustomeFont.Poppins_Medium,
            color: "white",
            marginHorizontal: 25,
            marginTop: 15
          }}
        >
          {this.props.data.YG_Name}
        </Text>
      <View style={{marginHorizontal: 25,marginTop:5,margin:20}}>
       <HTMLView
          value={this.props.data.YG_Description}
          stylesheet={styles}
          />
      </View>
        {/* <Text
          style={{
            fontSize: 12,
            fontFamily: CustomeFont.Poppins_Light,
            color: "white",
            marginHorizontal: 25,
            marginTop: 15,
            marginBottom: 30
          }}
        >
         {this.props.data.YG_Description}
        </Text> */}
      </TouchableOpacity>
    )
  }
}
const styles = StyleSheet.create({
  text: {
    fontSize: 20,
color:"white"
  },
  a: {
    fontWeight: "300",
    color: "blue", // make links coloured pink
  },
p:{
color:"white",  fontFamily: CustomeFont.Poppins_Light,
},ol:{
color:"white"
},
ul:{
color:"white"
}
});
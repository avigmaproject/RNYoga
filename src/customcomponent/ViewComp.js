import React, { Component } from "react"
import { Text, View, Image, TouchableOpacity } from "react-native"
import AntDesign from "react-native-vector-icons/AntDesign"
import CustomeFont from "../CustomeFont"
import Meditationicon from "../assets/Meditationicon.svg"
import Nutritionicon from "../assets/Nutrition-icon.svg";
import Yogaiconn from "../assets/Yogaiconn.svg";
import Chatboxicon from "../assets/Chatboxicon.svg"
import Iconguide from "../assets/Iconguide.svg";
import Icondiettips from "../assets/Icondiettips.svg";
import Iconbadfood from "../assets/Iconbadfood.svg";
import Iconbrainfood from "../assets/Iconbrainfood.svg";
import Iconrecipes from "../assets/Iconrecipes.svg";
import Icongroceryiist from "../assets/Icongroceryiist.svg"

import LinearGradient from "react-native-linear-gradient"


export default class ViewComp extends Component {
  render() {
    return (
      <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={['#663b89', '#3e265f', '#3d265e']} style={{
        width: "100%",
        justifyContent: "center",
        marginTop: 25,
        height: 90,
        // backgroundColor: "rgba(200, 104, 200,0.4)",
              borderRadius: 10,
              borderColor:"rgba(100,100,100,0.3)",
              borderWidth:1.5,
      }} >
        <TouchableOpacity
          onPress={this.props.onPress}
            style={{
          //   backgroundColor: "rgba(100,100,100,0.1)",
              width: "100%",
          //     marginTop: 20,
          //     height: 100,
             flexDirection:"row",
              alignItems:"center",
          }}>
          <View style={{ width:this.props.recipes ? "30%": "45%", height: 100,justifyContent:"center",paddingLeft:30}}>
          {this.props.recipes && this.props.filepath ? ( 
              <Image
               source={{uri :this.props.filepath}}
              resizeMode="contain"
              style={{
              width: 60,
              height: 60,
              borderRadius:30,
              // marginLeft: "10%"
               }}
              />):(  
            <Text> 
              {this.props.iconpath === "Meditation" ? <Meditationicon height={"60"} width={"60"} /> : null}
              {this.props.iconpath === "Nutrition" ? <Nutritionicon height={"60"} width={"60"}  /> : null}   
              {this.props.iconpath === "Yoga" ? <View style={{paddingTop:15}}><Yogaiconn height={"60"} width={"60"}/></View> : null}
              {this.props.iconpath === "Onlinetherapy" ? <Chatboxicon height={"60"} width={"60"}  /> : null}
              {this.props.iconpath === "Guide" ? <Iconguide height={"60"} width={"60"} /> : null}
              {this.props.iconpath === "Diettips" ? <Icondiettips height={"60"} width={"60"} /> : null}
              {this.props.iconpath === "Badfood" ? <Iconbadfood height={"60"} width={"60"} /> : null}
              {this.props.iconpath === "Brainfood" ? <Iconbrainfood height={"60"} width={"60"} /> : null}
              {this.props.iconpath === "Recipes" ? <Iconrecipes height={"60"} width={"60"} /> : null}
              {this.props.iconpath === "Grocery" ? <Icongroceryiist height={"60"} width={"60"} /> : null}
            </Text>)}
           
           </View>
           {/* <View style={{position:"absolute",marginLeft:this.props.recipes ? "5%":"9%"}}>
           
          
          </View> */}
          <View style={{width:this.props.recipes ? "60%":"35%"}}>
            <Text allowFontScaling={false}
              ellipsizeMode="tail"
              numberOfLines={2}
              style={{
                fontSize: 17,
                color: "rgba(255,255,255,0.8)",
                fontFamily: CustomeFont.Poppins_Medium,
                // fontWeight:"400"
              }}
            >
              {this.props.title}
            </Text>
              {/* {this.props.recipes && ( <Text
              style={{
               fontSize: 12,
                 color: "rgba(255,255,255,0.8)",
                fontFamily: CustomeFont.Poppins_Medium
              }}>30 minutes</Text>)}
            */}
          </View>
          <View style={{width:"10%" ,justifyContent:"center",alignItems:"center"}}>
            <AntDesign name={"right"} size={18}  color= "rgba(255,255,255,0.5)" />
          </View>
          {/* <Image
          resizeMode='stretch'
          style={{ width: '100%', height: 90, borderRadius: 12 }}
          source={require('../assets/item-1.jpeg')}
        /> */}
        </TouchableOpacity>
       </LinearGradient>
    )
  }
}

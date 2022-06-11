import React, { Component } from "react"
import { Text, View, Image, TouchableOpacity,ActivityIndicator } from "react-native"
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
constructor(props) {
        super(props)
        this.state = {
            isLoading:false
        }
    }
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
          <View style={{ width:this.props.recipes ? "30%": "30%", height: 100,justifyContent:"center",paddingLeft:30}}>
          {this.state.isLoading &&  <View style={{ position:"absolute",zIndex:111, height: 60,width:100}}>
          <View style={{width: 130,height: 60,justifyContent:"center",alignItems:"center"}}><ActivityIndicator color={"#2d1350"} /></View>
         </View> }
            {this.props.nutrition && this.props.filepath && ( 
            <Image
              onLoadStart={()=>this.setState({isLoading:true})}
              onLoadEnd={()=>this.setState({isLoading:false})}
              source={this.props.filepath}
              resizeMode="contain"
              style={{
              width: 60,
              height: 60,
              borderRadius:10,
              marginTop:12
              // marginLeft: "10%"
               }}
              />)}
          {this.props.recipes && this.props.filepath ? ( 
              <Image
              onLoadStart={()=>this.setState({isLoading:true})}
              onLoadEnd={()=>this.setState({isLoading:false})}
              source={{uri :this.props.filepath}}
              resizeMode="contain"
              style={{
              width: 60,
              height: 60,
              borderRadius:10,
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
          <View style={{width:this.props.recipes || this.props.home ?"65%":"50%"}}>
            <Text allowFontScaling={false}
              ellipsizeMode="tail"
              numberOfLines={2}
              style={{
                fontSize: 17,
                color: "rgba(255,255,255,0.8)",
                fontFamily: CustomeFont.Poppins_Medium,
                // alignSelf:"center",
                marginLeft:this.props.recipes  ?"20%":this.props.home ? "20%" : "25%"
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
{!this.props.recipes && ( <View style={{width:"20%" ,justifyContent:"center", marginLeft:this.props.home ? -30 :20}}>
            <AntDesign name={"right"} size={18}  color= "rgba(255,255,255,0.5)" />
          </View>)}
         
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

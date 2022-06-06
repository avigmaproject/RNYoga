import { Text, View ,TouchableOpacity} from 'react-native'
import React, { Component } from 'react'
import LinearGradient from 'react-native-linear-gradient';
import CustomeFont from "../CustomeFont";

export default class RecipeButton extends Component {
  render() {
    return (
     <LinearGradient style={{ borderRadius: 6 }} start={{ x: 0.0, y: 0.0 }}
        end={{ x: 0, y: 1.2 }} colors={this.props.statue ? ['#cc47d8','#bd00ff']: ["rgba(0,0,0,0)", "rgba(0,0,0,0)"]}>
         <TouchableOpacity style={{ height:40,width:80,justifyContent:"center",alignItems:"center" }} 
            onPress={this.props.onPress}>
            <Text allowFontScaling={false}style={{ color:this.props.statue ? 'white' : "rgba(255,255,255,0.5)", fontFamily: CustomeFont.Poppins_Medium, fontSize: 14 }}>{this.props.title}</Text>
        </TouchableOpacity>
    </LinearGradient>
    )
  }
}
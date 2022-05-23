import { Text, View ,TouchableOpacity} from 'react-native'
import React, { Component } from 'react'
import LinearGradient from 'react-native-linear-gradient';
import CustomeFont from "../CustomeFont";

export default class RecipeButton extends Component {
  render() {
    return (
     <LinearGradient style={{ borderRadius: 6 }} start={{ x: 0.0, y: 0.0 }}
        end={{ x: 0, y: 1.2 }} colors={this.props.statue ? ['#D970F5', '#A33AF3'] : ["rgba(0,0,0,0)", "rgba(0,0,0,0)"]}>
         <TouchableOpacity style={{ padding: 10 }} 
            onPress={this.props.onPress}>
            <Text style={{ color: 'white', fontFamily: CustomeFont.Poppins_Medium, fontSize: 14 }}>{this.props.title}</Text>
        </TouchableOpacity>
    </LinearGradient>
    )
  }
}
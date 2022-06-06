import { Text, View ,ImageBackground,ActivityIndicator,ScrollView,Image,StyleSheet,Alert,BackHandler} from 'react-native'
import React, { Component } from 'react'
import Header from "../customcomponent/Header";
import CustomeFont from "../CustomeFont"
import HTMLView from "react-native-htmlview";
import Spinner from "react-native-loading-spinner-overlay"

export default class RecipeDetail extends Component {
 constructor(props) {
        super(props)
        this.state = {
            UserRecipes: this.props.route.params.item,
            isLoading:false
        }
    }
 _onLoadEnd = () => {
    this.setState({
      isLoading: false,
    })
  }
_onLoadStart = () => {
    this.setState({
      isLoading: true,
    })
  }

  render() {
const {UserRecipes} = this.state
    return (
       <ImageBackground
            source={require("../assets/background.png")}
            resizeMode="stretch"
            style={{ height: "100%", flex: 1 }}>
        {this.state.isLoading &&  <View style={{ position:"absolute",height: 300,width:"100%"}}>
          <View style={{ height: 300,width:"100%",justifyContent:"center",alignItems:"center"}}><ActivityIndicator color={"#D970F5"} /></View>
         </View> }
          <Spinner visible={this.state.isLoading}  />
              <View  style={{ height: 300, }}>
                <View style={{position:"absolute",top:"15%",zIndex:111}}>
                  <Header navigation={this.props.navigation}/>
                </View>
                <Image
                onLoadStart={() =>this._onLoadStart()}
                onLoadEnd={() => this._onLoadEnd()}
                resizeMode="cover"
                style={{ width: "100%", height: "100%",}}
                source={{uri:UserRecipes.UR_filePath}} />
              <Image
                resizeMode="stretch"
                style={{ width: "270%", height: "50%",marginLeft:"-90%",marginTop:"-8%"}}
                source={require('../assets/hover.png')}/>

          </View>
          <View style={{marginLeft:10,marginTop:20}}>
          <Text allowFontScaling={false}  style={{
                fontSize: 16,
                color: "#fff",
                fontFamily: CustomeFont.Poppins_Medium,
                fontWeight:"600"
              }}>{UserRecipes.UR_Name}</Text>
            
              </View>
        <ScrollView contentContainerStyle={{paddingBottom:100,paddingHorizontal:10}}>
           {/* <Text allowFontScaling={false}  style={{
                fontSize: 16,
                color: "#fff",
                fontFamily: CustomeFont.Poppins_Medium,
                fontWeight:"600"
              }}>{UserRecipes.UR_Description}</Text> */}
              
                <HTMLView
                    value={UserRecipes.UR_Description}
                    stylesheet={styles}
                  />
        </ScrollView>
    </ImageBackground>
    )
  }
}
const styles = StyleSheet.create({
  text: {
   color: "rgba(255,255,255,0.8)",fontFamily: CustomeFont.Poppins_Medium
  },
b: {
   color: "rgba(255,255,255,0.9)",fontFamily: CustomeFont.Poppins_Bold
  },
  a: {
    fontWeight: "300",
    color: "blue", // make links coloured pink
  },
p:{
color:"white",  fontFamily: CustomeFont.Poppins_Light,
},ol:{
color:"rgb(200, 104, 200)"
},
ul:{
color:"rgb(200, 104, 200)"
},
strong:{
color: "rgba(255,255,255,0.9)",fontFamily: CustomeFont.Poppins_Bold}
});

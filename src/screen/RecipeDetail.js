import { Text, View ,ImageBackground,ActivityIndicator,ScrollView,Image,StyleSheet,PixelRatio,Dimensions} from 'react-native'
import React, { Component } from 'react'
import Header from "../customcomponent/Header";
import CustomeFont from "../CustomeFont"
import HTMLView from "react-native-htmlview";
import Spinner from "react-native-loading-spinner-overlay"
const {
  width,
  height,
} = Dimensions.get('window');

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
  normalize(size, multiplier = 2) {
  const scale = (width / height) * multiplier;

  const newSize = size * scale;

  return Math.round(PixelRatio.roundToNearestPixel(newSize));
}


  render() {
const {UserRecipes} = this.state
    return (
       <View style={{flex:1,backgroundColor:"#2D1350"}}>
         <ImageBackground
            source={require("../assets/background2.png")}
            resizeMode="stretch"
            style={{ height: "100%", flex: 1 }}>
        {this.state.isLoading &&  <View style={{ position:"absolute",height: 300,width:"100%"}}>
          <View style={{ height: 300,width:"100%",justifyContent:"center",alignItems:"center"}}><ActivityIndicator color={"#ad29f9"} /></View>
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
          <Text   style={{
                fontSize: 16,
                color: "#fff",
                fontFamily: CustomeFont.Poppins_Medium,
                fontWeight:"600"
              }}>{UserRecipes.UR_Name}</Text>
              <Text   style={{
                    color: "rgba(255,255,255,0.5)",
                    fontFamily: CustomeFont.Poppins_Light,
                    fontSize: this.normalize(14),
                    marginTop: 10,   
                  
              }}>{"Breakfast"}</Text>
              </View>
                <View
                  style={{
                  marginHorizontal: 10,
                  borderBottomColor: "#472f67",
                  borderBottomWidth: 1,marginTop:20
                  }}/>
        <ScrollView contentContainerStyle={{paddingBottom:100,paddingHorizontal:10}}>
          <HTMLView
            value={UserRecipes.UR_Description}
            stylesheet={styles}
            />
        </ScrollView>
    </ImageBackground>
</View>
    )
  }
}
const styles = StyleSheet.create({

text:{ color: "rgba(255,255,255,0.8)",fontFamily: CustomeFont.Poppins_Medium,fontSize: 13,textAlign:"justify"},
b: {
   color: "#ad29f9",fontFamily: CustomeFont.Poppins_Bold
  },
  a: {
    fontWeight: "300",
    color: "blue",
  },
p:{
 color: "rgba(255,255,255,0.8)",fontFamily: CustomeFont.Poppins_Medium,fontSize: 13,textAlign:"justify",
},ol:{
color:"#ad29f9"
},
ul:{
color:"#ad29f9"
},
strong:{
color: "#ad29f9",fontFamily: CustomeFont.Poppins_Bold}
});

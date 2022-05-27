import { Text, View ,ImageBackground,ActivityIndicator,ScrollView,Image,StyleSheet} from 'react-native'
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
      isLoading: false
    })
  }
_onLoadStart = () => {
    this.setState({
      isLoading: true
    })
  }
  render() {
const {UserRecipes} = this.state
    return (
       <ImageBackground
            source={require("../assets/background.png")}
            resizeMode="stretch"
            style={{ height: "100%", flex: 1 }}>
        <ScrollView contentContainerStyle={{paddingBottom:100}}>
        {this.state.isLoading &&  <View style={{ position:"absolute",height: 300,width:"100%"}}>
          <View style={{ height: 300,width:"100%",justifyContent:"center",alignItems:"center"}}><ActivityIndicator color={"#D970F5"} /></View>
         </View> }
          <Spinner visible={this.state.isLoading}  />
              <View  style={{ height: 300,  flex: 1 }}>
                <Image
                onLoadStart={() =>this._onLoadStart() }
                onLoadEnd={() => this._onLoadEnd()}
                resizeMode="cover"
                style={{ width: "100%", height: "100%",}}
                source={{uri:UserRecipes.UR_filePath}} />
            <View style={{position:"absolute",top:"20%"}}>
               <Header navigation={this.props.navigation}/>
            </View>
          </View>
          <View style={{marginLeft:10,marginTop:20}}>
          <Text allowFontScaling={false}  style={{
                fontSize: 16,
                color: "#fff",
                fontFamily: CustomeFont.Poppins_Medium,
                fontWeight:"600"
              }}>{UserRecipes.UR_Name}</Text>
              <Text allowFontScaling={false}  style={{
                fontSize: 16,
                color: "#fff",
                fontFamily: CustomeFont.Poppins_Medium,
                fontWeight:"600"
              }}>Ingredients</Text>
              <HTMLView
                    onLinkPress={(url) =>
                      this.props.navigation.navigate("Faq", {
                        url,
                        title: "Product",
                        routes: "quiz",
                      })
                    }
                    value={UserRecipes.UR_Description}
                    stylesheet={styles}
                  />
              </View>
        </ScrollView>
    </ImageBackground>
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
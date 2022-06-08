import React, { Component } from "react";
import {
  Text,
  View,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Dimensions, PixelRatio 
} from "react-native";
import ViewComp from "../customcomponent/ViewComp";
import Header from "../customcomponent/Header";
import Svg, {
  Use,
  Image,
} from 'react-native-svg';
import GradientButton from "../customcomponent/GradientButton";
import Background from "../assets/Background.svg"
import CustomeFont from "../CustomeFont"
const {
  width,
  height,
} = Dimensions.get('window');

export default class Nutrition extends Component {

  constructor() {
    super();
    this.state = {
    };
  }
  normalize(size, multiplier = 2) {
  const scale = (width / height) * multiplier;

  const newSize = size * scale;

  return Math.round(PixelRatio.roundToNearestPixel(newSize));
}

  render() {
    return (
    <View style={{flex:1,backgroundColor:"#2D1350"}}>
      <ImageBackground
        source={require("../assets/background1.png")}
        resizeMode="stretch"
        style={{ height: "100%" }}
      >
        <SafeAreaView>
        <Header title={"Nutrition"} navigation={this.props.navigation} />
          <ScrollView contentContainerStyle={{paddingBottom:50}}>
             <View
              style={{
                marginHorizontal: 10,
                paddingBottom: 20,
              }}
            >
              <ViewComp
                onPress={() =>
                  this.props.navigation.navigate("DetailGuide", {
                    title: "Introductory Guide",
                  })
                }
                title={"Introductory Guide"}
                iconpath={"Guide"}
              />
              <ViewComp
                onPress={() =>
                  this.props.navigation.navigate("Detaildiet", {
                    title: "Food Facts",
                  })
                }
                title={"Food Facts"}
                iconpath={"Diettips"}/>
              <ViewComp
                onPress={() =>
                  this.props.navigation.navigate("Detailbadfood", {
                    title: "Unhealthy Food",
                  })
                }
                title={"Unhealthy Food"}
                iconpath={"Badfood"} />
              <ViewComp
                onPress={() =>
                  this.props.navigation.navigate("Detailbrainfood", {
                    title: "Brain Food",
                  })
                }
                title={"Brain Food"}
                iconpath={"Brainfood"} />
              <ViewComp
                onPress={() =>
                  this.props.navigation.navigate("DetailRecipes", {
                    title: "Recipes",
                  })
                }
                title={"Recipes"}
                iconpath={"Recipes"} />
              <ViewComp
                onPress={() =>
                  this.props.navigation.navigate("DetailGroceryList", {
                    title: "Grocery List",
                  })
                }
                title={"Grocery List"}
                iconpath={"Grocery"} />

            </View> 
            <View style={{  }}>
              <View style={{ alignItems: 'center', marginTop: 15 }}>
                <Background height={"120"} width={"90%"} />
              </View>

              <View style={{ marginTop: 25 ,padding:20}}>
                <Text allowFontScaling={false} style={styles.calltext}>Do you want to make</Text>
                <Text allowFontScaling={false} style={styles.calltext}>a call with our dietician?</Text>
              </View>

              <View style={{ width: '95%',alignSelf:"center"}}>
                <GradientButton
                  margin={true}
                  backgroundColor={'#C441FD'}
                  title={'Schedule a call'}
                  onPress={() =>
                    this.props.navigation.navigate('ChatofflineScreen')
                  }
                />
              </View>
              <View style={{marginTop:20,padding:20}}>
                <Text allowFontScaling={false}  style={{...styles.calltext2,fontSize: this.normalize(17)}}>

                  You cannot book an appointment with our
                </Text>
                <Text allowFontScaling={false}  style={{...styles.calltext2,fontSize: this.normalize(17),textAlign:"justify"}}>
                  dietician beacause you did not activate the subscription.
                </Text>

               <View style={{marginTop:12}}>
               <Text allowFontScaling={false}  style={{...styles.calltext2,fontSize: this.normalize(17)}}>
                  if you want, you can do it{" "}<Text onPress={()=>alert("Under construction..")} style={{textDecorationLine: 'underline',color:'#fff',marginLeft:10,fontSize: this.normalize(16),marginTop:20,fontFamily: CustomeFont.Poppins_Light,}}>right here.</Text>
                </Text>
               </View>

              </View>
            </View>
          </ScrollView>
        </SafeAreaView>
      </ImageBackground>
    </View>
    );
  }
}
const styles = StyleSheet.create({

  calltext: { color: "rgba(255,255,255,0.8)", fontSize:27, fontFamily: CustomeFont.Poppins_Medium },
  calltext2: { color: "rgba(255,255,255,0.5)", fontFamily: CustomeFont.Poppins_Light,}

})

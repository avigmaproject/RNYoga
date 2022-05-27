import React, { Component } from "react";
import {
  Text,
  View,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  StyleSheet,

} from "react-native";
import ViewComp from "../customcomponent/ViewComp";
import Header from "../customcomponent/Header";
import { getnutrition } from "../services/api.function";
import Svg, {
  Use,
  Image,
} from 'react-native-svg';
import GradientButton from "../customcomponent/GradientButton";
import Background from "../assets/Background.svg"
import LinearGradient from 'react-native-linear-gradient';
import CustomeFont from "../CustomeFont"


export default class Nutrition extends Component {

  constructor() {
    super();
    this.state = {
      nutrition: []
    };
  }
  componentDidMount() {
    this.onHandlegetnutrition()
  }

  onHandlegetnutrition = async () => {
    let data = {
      NU_PKeyID: 1,
      Type: 1,
    }
    this.setState({ isLoading: true })
    await getnutrition(data)
      .then((res) => {
        console.log('res', JSON.stringify(res))
        console.log('resUSRDATA', res)
        this.setState({ nutrition: res, isLoading: false })
      })
      .catch((error) => {
        if (error.response) {
          console.log('responce_error', error.response)
          this.setState({
            isLoading: false,
            color: 'red',
            visible: true,
            message: 'Some Response Error'
          })
        } else if (error.request) {
          this.setState({
            isLoading: false,
            color: 'red',
            visible: true,
            message: 'Some Request Error'
          })
          console.log('request error', error.request)
        }
      })
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
        {/* <Header title={"Nutrition"} navigation={this.props.navigation} /> */}
       
     
        {/* <View style={{height:10,width:"100%", backgroundColor:"rgba(255,255,255,0)"}}/> */}
          <ScrollView>
            <View
              style={{
                marginHorizontal: 10,
                paddingBottom: 20,marginTop:70
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
              <View style={{ alignItems: 'center', marginTop: 20 }}>
                <Background height={"120"} width={"90%"} />
              </View>

              <View style={{ marginTop: 30 ,padding:20}}>
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
                <Text allowFontScaling={false}  style={styles.calltext2}>
                  You cannot book an appointment with our
                </Text>
                <Text allowFontScaling={false}  style={styles.calltext2}>
                  dietician beacause you are not a member of our
                </Text>
                <Text allowFontScaling={false}  style={styles.calltext2}>
                  membership
                </Text>

               <View style={{marginTop:15}}>
               <Text allowFontScaling={false}  style={styles.calltext2}>
                  if you want,you can do it right{" "}<Text style={{textDecorationLine: 'underline',color:'#fff',marginLeft:10,fontSize:12,marginTop:20}}>here.</Text>
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

  calltext: { color: "#fff", fontWeight: "bold", fontSize: 25, fontFamily: CustomeFont.Poppins_Bold, },
  calltext2: { fontSize:12,color: "rgba(255,255,255,0.5)",fontFamily: 'Poppins-Medium' }

})

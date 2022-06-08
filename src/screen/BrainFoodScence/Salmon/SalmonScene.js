import React, { Component } from 'react'
import { Text, View, ImageBackground, SafeAreaView,ActivityIndicator,Image ,StyleSheet} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Header from "../../../customcomponent/Header";
import CustomeFont from "../../../CustomeFont";

export default class SalmonScene extends Component {
   constructor(props) {
        super(props)
        this.state = {
            isLoading:false,
            isLoading1:false
        }
  }
  render() {
    return (
          <ImageBackground
                source={require("../../../assets/background.png")}
                resizeMode="stretch"
                style={{ height: "100%", flex: 1 }}
            >
                <SafeAreaView>
                    <Header
                        title={`${this.props.route.params.title}`}
                        navigation={this.props.navigation}
                    />
              <ScrollView>
              <View style={{paddingHorizontal:15,paddingTop:20,paddingBottom:100}}>
                <Text   style={styles.text}>Salmon, tuna, herring, and sardines are rich in omega-3 fatty acids, which
                    have been shown to soothe anxiety. A 2014 study found that women who
                    ate Atlantic salmon three times a week showed a reduction in self-
                    reported anxiety. In a survey conducted on Brain, Behavior, and Immunity,
                    medical students who supplemented their diet with omega-3 experienced
                    a 20% reduction in anxiety symptoms.</Text>
                <View>
                {this.state.isLoading &&  <View style={{ position:"absolute",zIndex:111, height: 160,width:160,marginLeft:100}}>
                  <View style={{width: 150,height: 150,justifyContent:"center",alignItems:"center"}}><ActivityIndicator color={"#2d1350"} /></View>
                </View> }
                <Image
                  onLoadStart={()=>this.setState({isLoading:true})}
                  onLoadEnd={()=>this.setState({isLoading:false})}
                  source={require("./1.jpg")}
                  resizeMode="contain"
                  style={{
                  width: 300,
                  height: 300,
                  borderRadius:10,
                  alignSelf:"center",marginVertical:10
                  }}
                  /></View>
                   <Text   style={styles.text}>
                     Salmon is a superfood offering several impressive health benefits. Salmon
                      is one of the best sources of EPA and DHA long-chain omega-3 fatty acids.
                      A 100-gram serving of farmed salmon contains 2.3 grams of long-chain
                      omega-3 fatty acids, while the same portion of wild salmon contains 2.6
                      grams.{"\n\n"}
                      Omega-3 rich salmon is an excellent food for the body and brain. Omega 3
                      fatty acids have been shown to balance inflammatory polyunsaturated
                      fats and reduce excessive cortisol levels. Unlike most other fats, omega 3
                      fats are considered &quot;essential&quot;. You need to get them out of your diet
                      because your body can&#39;t create them.
                      Cortisol is a hormone associated with physical and psychological stress,
                      but a good intake of omega-3 fats can help maintain control. Salmon is
                      also a good source of vitamin D to improve mood and stress
                      management.{"\n\n"}
                      High levels of anxiety will drastically reduce vitamin D stores in the body. A
                      significant percentage of people are deficient in this vital nutrient,
                      especially in winter.{"\n\n"}
                      An increasing number of studies suggest that including salmon in the diet
                      may improve brain function.{"\n\n"}
                      Both fatty fish and fish oil have been shown to reduce depressive
                      symptoms, protect fetal brain health during pregnancy, reduce anxiety,
                      slow down age-related memory loss and reduce the risk of dementia.
                    </Text>
                  
                  <View>
                {this.state.isLoading1 &&  <View style={{ position:"absolute",zIndex:111, height: 160,width:160,marginLeft:100}}>
                  <View style={{width: 150,height: 150,justifyContent:"center",alignItems:"center"}}><ActivityIndicator color={"#2d1350"} /></View>
                </View> }
                <Image
                  onLoadStart={()=>this.setState({isLoading1:true})}
                  onLoadEnd={()=>this.setState({isLoading1:false})}
                  source={require("./2.jpg")}
                  resizeMode="contain"
                  style={{
                 width: 300,
                  height: 300,
                  borderRadius:10,
                  alignSelf:"center",marginVertical:10
                  }}
                  /></View>
                <Text   style={styles.text1}>How to consume</Text>
                <Text   style={styles.text}>
                  Salmon is a fish that can be eaten for lunch or dinner and breakfast. Pan-
                  fried or baked with vegetables or salad, this fish is easy to prepare and eat.
                  Salmon goes well with freshly ground pepper mix, rosemary, coriander,
                  oregano, mint, sage, turmeric, curry, but used sparingly so that you can
                  enjoy its pleasant aroma!{"\n\n"}
                  A healthy breakfast idea is a slice of toast with avocado and salmon. In the
                  evening you can choose a salad to add pieces of salmon.
                </Text>         
              </View>
              </ScrollView>
                </SafeAreaView>
            </ImageBackground>
    )
  }
}
const styles = StyleSheet.create({
text:{ color: "rgba(255,255,255,0.8)",fontFamily: CustomeFont.Poppins_Medium,fontSize: 13,marginTop:10},
textcolor:{color:"#ad29f9"},
text1: {
   color: "#ad29f9",fontFamily: CustomeFont.Poppins_Bold,fontSize: 13,alignSelf:"center"
  },
})
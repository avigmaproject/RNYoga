import React, { Component } from 'react'
import { Text, View, ImageBackground, SafeAreaView,ActivityIndicator,Image ,StyleSheet} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Header from "../../../customcomponent/Header";
import CustomeFont from "../../../CustomeFont";

export default class DarkLeafyGreensScene extends Component {
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
                <Text allowFontScaling={false}style={styles.text}>Vegetables are your brain’s best friend. There are no ifs, and, or buts about
              it, especially when talking about the non-starchy varieties, including
              spinach and romaine lettuce, and the cruciferous veggies cabbage, kale,
              mustard greens, arugula, and bok choy. These dark leafy greens are low in
              sugar and packed with vitamins, minerals, and other phytonutrients
              needed by the brain to function correctly.</Text>
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
                  width: 150,
                  height: 150,
                  borderRadius:10,
                  alignSelf:"center",marginVertical:10
                  }}
                  /></View>
                   <Text allowFontScaling={false}style={styles.text}>
                      These dark green leaves are great for improving your body&#39;s response to
                      stress and for helping your internal systems function optimally. Not to
                      mention, they are rich in vitamins (vitamins A, C, E, and K) and the content
                      of minerals (magnesium, calcium, potassium, and iron), and you have a
                      potent food that fights stress.{"\n\n"}
                      One of the healthiest ways is to use greens such as beets, spinach, or
                      arugula to reduce anxiety by preparing your lunch as a base, rather than
                      cereal-containing products that raise insulin levels, such as bread or
                      Easter.{"\n\n"}
                      On a bed of fresh greens, add turkey or chicken, beef, or wild salmon. Add a
                      few pumpkin seeds or walnuts, chop some avocados or tomatoes, and
                      add a little avocado oil and apple cider vinegar dressing.{"\n\n"}
                      It tastes great, keeps you going all afternoon, and there is no better meal to
                      deal with anxiety.
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
                  width: 150,
                  height: 150,
                  borderRadius:10,
                  alignSelf:"center",marginVertical:10
                  }}
                  /></View>
                <Text allowFontScaling={false}style={{...styles.text,fontFamily: CustomeFont.Poppins_Bold,fontSize: 20,alignSelf:"center"}}>How to consume</Text>
                <Text allowFontScaling={false}style={styles.text}>
                Eat one huge “fatty salad” daily, a salad filled with organic dark leafy
                greens like kale, arugula, romaine lettuce, or spinach, and doused with
                extra-virgin olive oil. Avoid nutrient-poor varieties like iceberg lettuce,
                essentially just water and fiber.
                </Text>         
              </View>
              </ScrollView>
                </SafeAreaView>
            </ImageBackground>
    )
  }
}const styles = StyleSheet.create({
text:{ color: "rgba(255,255,255,0.8)",fontFamily: CustomeFont.Poppins_Medium,fontSize: 15,marginTop:10},
textcolor:{color:"rgb(200, 104, 200)"}
})
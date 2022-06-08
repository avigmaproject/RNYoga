import React, { Component } from 'react'
import { Text, View, ImageBackground, SafeAreaView,ActivityIndicator,Image ,StyleSheet} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Header from "../../../customcomponent/Header";
import CustomeFont from "../../../CustomeFont";

export default class EggsScene extends Component {
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
                <Text   style={styles.text}>The egg is a complete food, containing all the necessary substances for
                  the body. It is rich in high biological value proteins, fats, vitamins, and
                  minerals. In addition, the ratio between bad and good cholesterol in eggs
                  is perfectly balanced.</Text>
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
                     With only 70 calories, an egg provides 12% of the daily value of protein. Eggs
                    have one of the highest biological values, 93.8%. This means that it
                    provides amino acids in a pattern that is almost precisely what the body
                    needs.{"\n\n"}
                    Moreover, eggs are rich in riboflavin, biotin, vitamin B12, iodine, selenium,
                    and choline. Eggs also provide vitamin D, vitamin A, folate, phosphorus,
                    omega-3 fats, lutein, and zeaxanthin. Egg yolks are rich in vitamin D and
                    tryptophan, an amino acid that helps create serotonin, a neurotransmitter
                    that helps regulate mood, sleep, memory, and behavior. Serotonin
                    improves brain function and alleviates episodes of anxiety.
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
                  A single chicken egg contains 140-170 mg of choline, making them one of
                  the richest sources of this nutrient. Choline belongs to nutraceuticals -
                  substances that improve cognitive function. Acetylcholine is a key element
                  essential for maintaining psychomotor memory skills and influencing
                  mood. The human body can produce it, but only in small quantities that
                  cover its needs entirely. It is, therefore, necessary to supplement the
                  choline with appropriate foods or supplements. A single hen&#39;s egg covers
                  about 30% of the recommended daily allowance.{"\n\n"}
                  Without much argument, it might not be a good idea to start our day with
                  a soft-boiled egg at least twice a week.
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
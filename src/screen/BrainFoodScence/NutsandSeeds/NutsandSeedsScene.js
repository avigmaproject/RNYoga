import React, { Component } from 'react'
import { Text, View, ImageBackground, SafeAreaView,ActivityIndicator,Image ,StyleSheet} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Header from "../../../customcomponent/Header";
import CustomeFont from "../../../CustomeFont";

export default class NutsandSeedsScene extends Component {
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
                <Text   style={styles.text}>Walnuts, hazelnuts, and almonds, in turn, help fight depression, especially
                  with the high amount of vitamin E in these foods. Researchers have found a
                  decrease in depression in people on a Mediterranean diet, which adds 30
                  grams of nuts, hazelnuts, or almonds per day. Nuts are omega-3 rich food,
                  making them an excellent and nutritious snack.</Text>
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
                     Especially good for brain health, nuts and foods high in vitamin E, alpha-
                      linolenic acid, and phenolic compounds help prevent mental decline as
                      you age and are even recommended as an adjunct in treating mild
                      depression.{"\n\n"}
                      Walnuts are also a source of melatonin that helps regulate natural sleep
                      patterns. Obviously, good sleep will significantly impact how much stress
                      and anxiety you feel the next day.{"\n\n"}
                      Chia seeds have rich nutritional content. They are rich in Omega-3 and
                      Omega-6 essential fatty acids and contain more protein than soy. They
                      have a low glycemic index, which makes them ideal for diabetes. A single
                      tablespoon of chia seeds provides a person with the nutrients they need
                      for a day.{"\n\n"}
                      High in fiber, chia seeds support digestion and help detoxify the body.
                      Although very rich in nutrients, these seeds have an almost zero caloric
                      intake, making them ideal for losing weight.{"\n\n"}
                      They contain tryptophan, an amino acid that promotes relaxation of the
                      body and the appearance of sleep by increasing serotonin and melatonin
                      levels. Also, due to the high content of antioxidants, chia seeds help
                      maintain youth and improve cognitive function.{"\n\n"}
                      All nuts are healthy. While almonds are a great go-to choice, macadamias,
                      Brazil nuts, and pistachios are excellent options. Pistachios contain more
                      lutein and zeaxanthin (two carotenoids that can boost brain speed) than
                      any other nut. They also contain resveratrol, a powerful antioxidant that
                      has been shown to protect and enhance memory function.
                    </Text>
                  
                  <View>
                {this.state.isLoading1 &&  <View style={{ position:"absolute",zIndex:111, height: 300,width:300,marginLeft:100}}>
                  <View style={{width: 300,height: 300,justifyContent:"center",alignItems:"center"}}><ActivityIndicator color={"#2d1350"} /></View>
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
                Eat raw as a snack, combine dark chocolate or berries for a nice “trail mix,”
                or throw in a salad. Just be mindful that nuts contain many calories
                because of their fat content, which can add up fast. Try to stick to a handful
                or two a day, tops.{"\n\n"}
                In contact with water, Chia seeds triple in volume in just 2-3 minutes and
                become gelatinous. At the same time, soaking activates all the nutrients
                they contain, especially the antioxidants. But they can be consumed dry,
                without problems, because they activate quickly even in contact with
                gastric juices.{"\n\n"}
                An ideal breakfast can be a fruit smoothie - and you can use more fruits
                such as apples, pears, pineapples, berries, to which 2 tablespoons of chia
                seeds are added. These will soon increase in volume and become
                gelatinous but very easy to consume. This breakfast is ideal for those on
                the run or who don&#39;t even get used to eating in the morning. It is easy to
                eat, very good in taste, and very satisfying!
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
import React, { Component } from 'react'
import { Text, View, ImageBackground, SafeAreaView,ActivityIndicator,Image ,StyleSheet} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Header from "../../../customcomponent/Header";
import CustomeFont from "../../../CustomeFont";

export default class DarkChocolateScene extends Component {
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
                <Text allowFontScaling={false}style={styles.text}>Dark chocolate and cocoa powder contain several brain-stimulating
                  compounds, including flavonoids, caffeine, and antioxidants.</Text>
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
                        Chocolate flavonoids accumulate in areas of the brain that deal with
                        learning and memory. Researchers say that these compounds can
                        improve memory and help slow down age-related mental decline.{"\n\n"}
                        Rich in polyphenols, especially flavonoids, dark chocolate stimulates
                        attention and reduces perceived stress levels. It is also a source of
                        magnesium, which can reduce anxiety symptoms. Dark chocolate also has
                        a high tryptophan content, which the body uses to form mood-enhancing
                        neurotransmitters such as serotonin in the brain. Serotonin also reduces
                        the stress that leads to anxiety. {"\n\n"}
                        In addition to bringing an exceptionally high intake of magnesium (which
                        reduces stress), dark chocolate contains l-theanine, a natural physical and
                        mental relaxant that leads to alertness without drowsiness.
                        The idea of ​​how healthy the chocolate you eat is directly related to the
                        amount of sugar. Ordinary milk chocolate is so full of unhealthy sugars,
                        and vegetable oils that chocolate&#39;s recently praised health benefits are
                        almost certainly overwhelmed by the harmful effects of these additives. On
                        the other hand, real dark chocolate (at least 70%) can be good for you and
                        especially for your mood if you eat it in moderation. {"\n\n"}
                        Some research suggests that the role of dark chocolate in brain health is
                        given only by its taste, a comforting taste for those with mood disorders. In
                        one study, those who ate dark chocolate twice a day for two weeks had
                        lower levels of hormones that are usually associated with anxiety.
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
                <Text allowFontScaling={false}style={{...styles.text,fontFamily: CustomeFont.Poppins_Bold,fontSize: 20,alignSelf:"center"}}>How to buy and consume</Text>
                <Text allowFontScaling={false}style={styles.text}>
                The sweet-bitter taste is comforting and has a positive effect on your
                mood. Focus on chocolate with a minimum of 70% cocoa content and as
                little added sugar as possible. However, it should be noted that high
                consumption of dark chocolate means a high caloric intake.
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
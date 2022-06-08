import React, { Component } from 'react'
import { Text, View, ImageBackground, SafeAreaView,ActivityIndicator,Image ,StyleSheet} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Header from "../../../customcomponent/Header";
import CustomeFont from "../../../CustomeFont";

export default class AvocadoScene extends Component {
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
                <Text   style={styles.text}>The delicious avocado is surprisingly good for you and has valuable
                  nutritional properties for reducing stress, anxiety and fighting against
                  depression.</Text>
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
                   <Text   style={styles.text}>The delicious avocado is surprisingly good for you and has valuable nutritional properties for reducing stress, anxiety and fighting against depression.</Text>
                  <Text   style={styles.text}>With antioxidants such as vitamins E and C, which help reduce inflammation, folate, and other B vitamins for proper brain function, and good levels of dietary fiber for the digestive system, avocado is one of the best foods for relieving stress and anxiety.</Text>
                  <Text   style={styles.text}>Here are some of the most important benefits of this superfood:</Text>
                  <Text   style={styles.text}><Text style={styles.textcolor}>{'\u25CF'}</Text>{" "}Avocado contains vitamins A, C, B6, B12, and K. They protect the immune, cognitive and nervous systems.</Text>
                  <Text   style={styles.text}><Text style={styles.textcolor}>{'\u25CF'}</Text>{" "}It contains large amounts of vitamin D, essential for bone health.</Text>
                  <Text   style={styles.text}><Text style={styles.textcolor}>{'\u25CF'}</Text>{" "}It contains vitamin E, which is essential for the proper functioning of thenervous system.</Text>
                  <Text   style={styles.text}><Text style={styles.textcolor}>{'\u25CF'}</Text>{" "}It contains large amounts of vitamin D, essential for bone health. </Text>
                  <Text   style={styles.text}><Text style={styles.textcolor}>{'\u25CF'}</Text>{" "}Controls cholesterol levels by regulating triglyceride levels. It alsocontains Omega 3, which lowers harmful cholesterol levels. Omega 3 is very beneficial for the eyes and brain.</Text>
                  <Text   style={styles.text}><Text style={styles.textcolor}>{'\u25CF'}</Text>{" "}Due to the vitamins in its composition, avocado fruit is one of the foods that prevent the development of cancer cells. </Text>
                  <Text   style={styles.text}><Text style={styles.textcolor}>{'\u25CF'}</Text>{" "}Improves memory due to fatty acids that benefit the brain. </Text>
                  <Text   style={styles.text}><Text style={styles.textcolor}>{'\u25CF'}</Text>{" "}Eating avocados is also good for the eyes, as vitamin E absorbs the sun&#39;s ultraviolet rays, protecting the retina. This fruit also protects the eyes from the effects of degenerative diseases. </Text>
                  <Text   style={styles.text}><Text style={styles.textcolor}>{'\u25CF'}</Text>{" "} Avocado is also suitable for weight loss. This can be achieved through moderate consumption, which speeds up the metabolism and keeps the fat level in the blood under control. However, excessive consumption of avocados can have a fattening effect on some people. Do not overeat!</Text>

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
                <Text   style={styles.text1}>How to buy and consume</Text>
                <Text   style={styles.text}>You can&#39;t tell much about an avocado by its tough exterior or color, but you
                can tell whether it&#39;s ripe by gently squeezing. Slightly touch the avocado to
                check if it is ripe or not. If it&#39;s too soft, you won&#39;t be able to slice it, but you
                can still mash it for use in guacamole or other recipes.</Text>
                <Text   style={styles.text}>Avocado that is firm to the touch can be ripened at home. Place them in a
                brown paper bag and keep them at room temperature for up to five days.
                The avocado will ripen faster if you place an apple in the bag. Once ripe,
                you can keep it in the refrigerator for two or three days.</Text>
                <Text   style={styles.text}>Avocado can be used in the preparation of salads, or you can simply
                smash it and transform it into delicious guacamole. Spread it on a whole-
                wheat bread slice, and you have a quick and nutritious meal in
                seconds! Holy guacamoly!</Text>
              </View>
              </ScrollView>
                </SafeAreaView>
            </ImageBackground>
    )
  }
}
const styles = StyleSheet.create({
text:{ color: "rgba(255,255,255,0.8)",fontFamily: CustomeFont.Poppins_Medium,fontSize: 13,marginTop:10,textAlign:"justify"},
textcolor:{color:"#ad29f9"},
text1: {
   color: "#ad29f9",fontFamily: CustomeFont.Poppins_Bold,fontSize: 13,alignSelf:"center"
  },
})
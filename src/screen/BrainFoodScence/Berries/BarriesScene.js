import { Text, View, ImageBackground, SafeAreaView,ActivityIndicator,Image ,StyleSheet} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Header from "../../../customcomponent/Header";
import CustomeFont from "../../../CustomeFont";
import React, { Component } from 'react'

export default class BarriesScene extends Component {
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
                <Text allowFontScaling={false}style={styles.text}>Berries stimulate the production of serotonin, also known as the &quot;happiness
                    hormone,&quot; and they are effectively fighting depression. In addition, they are
                    full of antioxidants, which help the brain function properly. Their antioxidant
                    content is explained by the abundant compounds called flavonoids.
                    Flavonoids are a class of polyphenol compounds that are found in many of
                    the Brain Superfoods.</Text>
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
                   <Text allowFontScaling={false}style={styles.text}>Blueberries are a real treasure in mental health. Still, currants, raspberries,
                        blackberries, strawberries, strawberries contain impressive amounts of vital
                        nutrients: vitamin C, polyphenols, flavonoids, potassium, water-soluble
                        fiber, extremely useful when fighting against anxiety and depression. {"\n\n"}
                        Studies have shown a link between anxiety and low levels of antioxidants in
                        the body. Antioxidants from blueberries work against oxidative stress and
                        inflammation, improve visual acuity at night, protect against cataracts and
                        glaucoma, and have good results in treating varicose veins and
                        hemorrhoids. The inclusion of foods rich in these substances in the diet can
                        alleviate some anxiety symptoms. {"\n\n"}
                        Berries can prevent various diseases, from multiple sclerosis dementia to
                        heart disease, influence the production of Dopamine, i.e., the
                        neurotransmitter responsible for coordinating memory and well-being of
                        the body, given that Dopamine in the Brain decreases with age. Free
                        radicals and oxidative damage are the leading causes of aging of the
                        body, being associated with the development of Alzheimer&#39;s disease,
                        Parkinson&#39;s, arthritis, cancer, heart disease, and all chronic degenerative
                        diseases.{"\n\n"}
                        Blueberries contain vitamins: A, B6, C, E, K, calcium, magnesium, and
                        potassium in large quantities. However, what makes them valuable are the
                        antioxidants in the composition. Blueberries contain anthocyanins, coloring
                        antioxidants, resveratrol, and quercitin. In addition, blueberries contain
                        healthy protein, fiber, and carbohydrates.</Text>
                  
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
                <Text allowFontScaling={false}style={{...styles.text,fontFamily: CustomeFont.Poppins_Bold,fontSize: 20,alignSelf:"center"}}>{" "} How to buy and eat</Text>
                <Text allowFontScaling={false}style={styles.text}>Fresh blueberries are great, but you don&#39;t have to be afraid to buy frozen
                    blueberries. They are much cheaper (and more widely available) than the
                    fresh ones. Blueberries are great in smoothies and salads or eaten as a
                    snack.</Text>
                <Text allowFontScaling={false}style={styles.text}><Text style={{...styles.text,fontFamily: CustomeFont.Poppins_Bold,fontSize: 18,}}>Pro tip: </Text>All berries are likely helpful to the Brain, though they vary in terms
                  of the specific beneficial compounds found in each. When mixing things
                  up, choose blackberries, raspberries, and strawberries to replace
                  blueberries.</Text>
              </View>
              </ScrollView>
                </SafeAreaView>
            </ImageBackground>
    )
  }
}
const styles = StyleSheet.create({
text:{ color: "rgba(255,255,255,0.8)",fontFamily: CustomeFont.Poppins_Medium,fontSize: 15,marginTop:10},
textcolor:{color:"rgb(200, 104, 200)"}
})
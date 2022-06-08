import React, { Component } from 'react'
import { Text, View, ImageBackground, SafeAreaView,ActivityIndicator,Image ,StyleSheet} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Header from "../../../customcomponent/Header";
import CustomeFont from "../../../CustomeFont";

export default class ChamomileScene extends Component {
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
                <Text   style={styles.text}>Chamomile is a plant that can have extraordinary effects on anxiety
                  symptoms. It contains a generous amount of antioxidants that have been
                  shown to help reduce inflammation, which could lower the risk of anxiety.</Text>
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
                   <Text   style={styles.text}>Although traditional healers have long recommended chamomile as a
              remedy for anxiety, researchers at the University of Pennsylvania have
              been the first to examine this relationship scientifically. In a 2009 study, the
              authors compared dozens of standardized tests designed to measure
              generalized anxiety disorder or GAD. Over eight weeks, one group received
              a placebo, while another group took pharmaceutical-grade chamomile
              capsules. Subjects were then tested to measure changes in anxiety
              symptoms throughout this time. Those who took chamomile enjoyed
              reduced anxiety symptoms, and the changes were characterized as
              &quot;clinically and statistically significant.&quot;{"\n\n"}
              Most of us are familiar with chamomile as a soothing tea that promotes
              relaxation and drowsiness at bedtime; its effectiveness is possible due to
              its mild sedative action. Although researchers have not confirmed a link
              between chamomile and human sleep, animal studies support a
              relationship. For example, a Japanese study that used guinea pigs with
              sleep disorders found that chamomile was as effective as a sedative to
              help them fall asleep.{"\n\n"}
              Chamomile also has anti-inflammatory properties and may promote
              sleep by helping to reduce the swelling caused by allergies.{"\n\n"}
              In an article on depression and insomnia that appeared in the Journal of
              Affective Disorders, the authors concluded that if you are diagnosed with
              insomnia, the risk of also being diagnosed with depression in one of the
              next three years is very high.{"\n\n"}
              Of course, anxiety is also strongly linked to depression. About 85 percent of
              the depressed were found to be suffering from anxiety, according to a
              study on the mental health site Healthyplace.com. The frequency of anxiety
              and insomnia during depression suggests that chamomile may help
              relieve some of the symptoms of these disorders.</Text>
                  
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
                <Text   style={styles.text}>Drinking 1-2 cups of chamomile tea every day is completely safe. In fact,
                  studies have shown that it is OK to drink up to 4 cups of chamomile tea a
                  day.</Text>         
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
  }})
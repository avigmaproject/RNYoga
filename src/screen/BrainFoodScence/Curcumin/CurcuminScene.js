import React, { Component } from 'react'
import { Text, View, ImageBackground, SafeAreaView,ActivityIndicator,Image ,StyleSheet} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Header from "../../../customcomponent/Header";
import CustomeFont from "../../../CustomeFont";

export default class CurcuminScene extends Component {
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
                <Text allowFontScaling={false}style={styles.text}>Curcumin is a spice containing curcumin, a component designed to
                    promote brain health and prevent anxiety disorders.</Text>
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
                    Curcumin has shown promising efficacy in studies of major depression.
                    Being one of the most powerful natural antioxidants - according to
                    medical research - and the most potent natural anti-inflammatory,
                    Curcumin can reduce DNA damage in the brain and counteract the effects
                    of stress and depression.{"\n\n"}
                    Although the mechanism of the antidepressant effect of Curcumin is not
                    fully understood, there is a hypothesis that it works by inhibiting the
                    enzyme monoamine oxidase. In addition, researchers believe that the
                    success of the antidepressant activity of Curcumin is because it would
                    cause a natural increase in the levels of serotonin, norepinephrine, and
                    dopamine in the brain.{"\n\n"}
                    Research also indicates that it stimulates the formation of brain cells
                    (neurogenesis), especially in the frontal cortex and hippocampus, which
                    means that this extract could be a state-of-the-art physiological
                    treatment for depression.{"\n\n"}
                    A study of 60 patients with depression showed that the effectiveness of
                    Curcumin in alleviating the symptoms of depression was equivalent to that
                    of Prozac!{"\n\n"}
                    This study aims to analyze the effectiveness and safety of Curcumin
                    compared to fluoxetine (a brand name is Prozac), used in patients with
                    major depressive disorder. Sixty patients diagnosed with major depressive
                    disorder were randomized in a 1: 1: 1 ratio and treated with fluoxetine (20
                    mg) and Curcumin (1000 mg) individually or in combination for six weeks.
                    The primary efficacy variable was the response rate according to the
                    Hamilton Scale for depression. It was observed that turmeric extract - All
                    patients well-tolerated curcumin.{"\n\n"}
                    A study aimed at quantifying the antidepressant potential of the extract
                    compared to two commonly prescribed drugs
                    {"\n"} - fluoxetine (Prozac) and imipramine (Tofranil)
                    {"\n"}- found that turmeric extract, Curcumin, would have comparable effects.{"\n\n"}
                    Thus, clinical evidence has been provided that turmeric extract, Curcumin,
                    can be used as an effective way not only to prevent depression but also to
                    support the treatment of patients with major depression without other
                    psychotic disorders.</Text>
                  
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
                  You can buy turmeric alone or in curry powder in the baking section of your
                  grocery store. Curry powders are popular in Asian and Indian cooking.{"\n\n"}
                  Different curries vary in ingredients. All curries are well-seasoned, and
                  some are downright hot. Store curry powder in an air-tight container at
                  room temperature for up to two months.{"\n\n"}
                  Try sprinkling some curry powder instead of salt and pepper on your
                  poultry, rice, and vegetable dishes. Turmeric goes well with chicken, turkey,
                  and vegetable dishes.</Text>         
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
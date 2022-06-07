import React, { Component } from "react";
import { Text, View, ImageBackground, SafeAreaView, Image ,Alert,BackHandler,StyleSheet, ScrollView,ActivityIndicator} from "react-native";
import Header from "../customcomponent/Header";
import { getUserGuide } from "../services/api.function";
import HTMLView from "react-native-htmlview";
import CustomeFont from "../CustomeFont"

export default class DetailGuide extends Component {
  constructor(props) {
    super(props)
    this.state = {
      userDetails: [],
      userTitle: this.props.route.params.title,
isLoading:false
    }
  }

  
ViewRender = (number,status,boldtext,text) =>{
  return(
  <View style={{flexDirection:"row"}}>  
    <View style={{paddingTop:1}}><Text allowFontScaling={false}style={styles.text}>{number}</Text></View>
      <View style={{paddingLeft:20,width:"95%"}}><Text allowFontScaling={false}style={styles.text}>
        <Text style={styles.text1}>{boldtext}{"  "}</Text>{text}{"\n"}</Text></View>
  </View>
  )}
// <Text><Text> Florentina, our certified nutritionist, who will help you understand your situation and provide you with valuable dietary advice.</Text></Text>

  onrender = ({ item }) => {
    console.log('itemitem', item);
    return (
      <View style={{ padding: 15 }}>
        <Text allowFontScaling={false} style={{
          fontWeight: "600",
          fontSize: 18,
          color: "#fff",
          lineHeight:30,
          textTransform:"capitalize"
        }}>{item.GU_Name}</Text>
<HTMLView
                    value={item.GU_Description}
                    stylesheet={styles}
                  />
        {/* <Text allowFontScaling={false}style={{ marginTop: 20,color: '#ccc',fontSize:13,lineHeight:20,  textTransform:"capitalize"}}>{item.GU_Description}</Text> */}
      </View>
    )
  }
  render() {
    return (
      <ImageBackground
        source={require("../assets/background.png")}
        resizeMode="stretch"
        style={{ height: "100%", flex: 1 }}
      >
        <SafeAreaView>
          <Header
            title={`${this.props.route.params.title}`}
            navigation={this.props.navigation}
          />
            <ScrollView contentContainerStyle={{paddingHorizontal:15,paddingTop:20,paddingBottom:100}}>
                <Text allowFontScaling={false}style={{...styles.text,fontFamily: CustomeFont.Poppins_Bold,fontSize: 20,}}>Why Nutrition is good for relieve anxiety?</Text>
                  <Text allowFontScaling={false}style={styles.text}>
                  Daily habits, especially eating habits, cause mood, thinking, and mental health changes. 
                  There is no specific diet for treating depression, but eating certain foods should be avoided if you want to relieve the symptoms of depression and anxiety.{"\n\n"}
                  For example, there is a clear link between alcohol and mental health issues. A person may drink to cope with depression, but alcohol can aggravate or trigger new bouts of depression and anxiety. Fast food is high in calories and low in nutrients. Studies have suggested that people who eat fast 
                  food regularly are more prone to depression than those who eat mostly fresh foods or home-cooked meals. Processed foods, especially those high in sugar and refined carbohydrates, can contribute to an increased risk of depression. When a person eats refined carbohydrates, the body's energy levels rise rapidly, but then they collapse. 
                  Refined and saturated fats can trigger inflammation of the reliable source and can also affect brain function and aggravate the symptoms of depression.{"\n\n"}
                  A recent study in the American Journal of Psychiatry compared a whole diet of fruits, vegetables, grains, and fish to a diet rich in processed meat, grains, and fast food. The researchers found that study participants who ate whole foods had a three-fold lower risk of developing depression.{"\n\n"}</Text>
               <View>
                {this.state.isLoading &&  <View style={{ position:"absolute",zIndex:111, height: 200,width:300,marginLeft:25}}>
                  <View style={{ width: 300,height: 200,justifyContent:"center",alignItems:"center"}}><ActivityIndicator color={"#2d1350"} /></View>
                </View> }
                    <Image
                      onLoadStart={()=>this.state.isLoading}
                      onLoadEnd={()=>this.state.isLoading}
                      source={require("../assets/Imagesfoodfacts/Introductoryguideimage.png")}
                      resizeMode="stretch"
                      style={{
                      width: 300,
                      height: 200,
                      borderRadius:10,
                      marginBottom:20,alignSelf:"center"
                      }}
                      />
                    </View> 

                  {this.ViewRender("1)",false,"Food Facts:","You will find out what are the top 5 tips that science has shown to be effective for a healthy eating pattern.")}
                  {this.ViewRender("2)",false,"Unhealthy Food:","A detailed list of foods that drastically worsen anxiety and depression (and which you should trash right away if you want to get more positive energy throughout the day).")}
                  {this.ViewRender("3)",false,"Brain Food:","Nine comprehensive articles presenting the benefits on mental health for each type of food(including pictures).")}
                  {this.ViewRender("4)",false,"Recipes:","Tasty recipes with step-by-step explanations containing the brain foods to live better and reduce anxiety and depression (each recipe includes: detailed instructions, pictures and nutritional calculations).")}
                  {this.ViewRender("5)",false,"Grocery List:","Quickly open this category and take a look at the list while you are doing groceries. You have everything you need at your fingertips to feed yourself properly (this list will save you lots of time!).")}
                  {this.ViewRender("",true,"BONUS:","We know how important it is to have an experienced nutritionist who can guide you step by step in implementing your personalized meal plan (as in the case if you are allergic to certain foods). That's why at the end of this section you have the opportunity to schedule a 10-15 minute video call with Florentina, our certified nutritionist, who will help you understand your situation and provide you with valuable dietary advice.")}

                  {/* Here is a small sneak peek of what you will find in the next categories:{"\n\n"}
                  1)            Food Facts: You will find out what are the top 5 tips that science has shown to be effective for a healthy eating pattern.{"\n\n"}
                  2)           Unhealthy Food: A detailed list of foods that drastically worsen anxiety and depression (eliminating these foods will begin to have more confidence in yourself){"\n\n"}
                  3)          Brain Food: Detailed articles presenting the benefits on mental health for each type of food (including pictures).{"\n\n"}
                  4)          Recipes: Tasty recipes with step-by-step explanations containing the brain foods to live better and reduce anxiety and depression (each recipe includes: detailed instructions, pictures and nutritional calculations).{"\n\n"}
                  5)          Grocery List: Quickly open this category and take a look at the list while you are doing groceries. You have everything you need at your fingertips to feed yourself properly (this list will save you lots of time!).{"\n\n"}
                 <Text style={{...styles.text,fontFamily: CustomeFont.Poppins_Bold,fontSize: 18,}}> BONUS:</Text> We know how important it is to have an experienced nutritionist who can guide you step by step in the implementation of your personalized meal plan. That's why at the end of this section you have the opportunity to schedule a 10-15 minute video call with Florentina, our certified nutritionist, who will help you understand your situation and provide you with valuable dietary advice. */}
                  
            </ScrollView> 
         
        </SafeAreaView>
      </ImageBackground>
    );
  }
}
const styles = StyleSheet.create({
text: {
   color: "rgba(255,255,255,0.8)",fontFamily: CustomeFont.Poppins_Medium,fontSize: 13,
  },
text1: {
   color: "rgb(200, 104, 200)",fontFamily: CustomeFont.Poppins_Bold,fontSize: 15,
  },
img:
{
height:400,width:400
},
textcolor:{color:"rgb(200, 104, 200)"}

});

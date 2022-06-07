import React, { Component } from "react";
import { Text, View, ImageBackground, SafeAreaView, ScrollView,StyleSheet,Alert,BackHandler } from "react-native";
import Header from "../customcomponent/Header";
import { GetBadFood } from "../services/api.function";
import CustomeFont from "../CustomeFont"
import HTMLView from "react-native-htmlview";
import RenderModal from "../customcomponent/RenderModal"
import DiteView from "../customcomponent/DiteView"

export default class Detailbadfood extends Component {
    constructor(props) {
        super(props)
        this.state = {
            BadFood: [{ 1: 1 }],
            userTitle: this.props.route.params.title

        }
    }

 

    render() {
        return (
            <ImageBackground
                source={require("../assets/background.png")}
                resizeMode="stretch"
                style={{ height: "100%", flex: 1 }}>
                <SafeAreaView>
                    <Header
                    title={`${this.props.route.params.title}`}
                    navigation={this.props.navigation}
                        />
                     <ScrollView contentContainerStyle={{paddingHorizontal:15,paddingTop:20,paddingBottom:100}}>
                  <Text allowFontScaling={false}style={styles.text}>
                    Treatment for depression may include therapy, medication, exercise, and a proper diet. Studies have shown that food choices can exacerbate specific symptoms or minimize negative emotions.{"\n\n"}
                    Although you can't cure yourself only by using a specific diet, you can certainly keep the manifestations under control, reducing the frequency and duration of depressive episodes. In addition, as soon as you eliminate the foods that endanger your emotional balance, you will begin to have more confidence in yourself, and you will lay the foundations for quick reactions regardless of the situations you face.{"\n\n"}
                    Here's what you should avoid to prevent anxiety and depression from getting worse:{"\n\n"}
                    </Text>
                    <DiteView 
                     title2="Sugar:" 
                     text = {"Sugar has a negative impact on people diagnosed with depression. You feel very well when consuming it, but before you know it, you will be overwhelmed with exhaustion; feelings of sadness or guilt may arise. \n\nRefined sugar acts as a stimulant for the brain and body so that it can trigger or worsen anxiety symptoms. Anxious people should avoid consuming excess sugars, i.e., they should limit the consumption of sweets and sweet drinks. On the other hand, fruit sugar is not harmful, so that we can replace desserts with 1-2 servings of fruit a day.\n\nAccording to experts, anxiety, depression, and dementia are very common, and researchers believe high blood sugar levels reduce brain activity. Excess sugar causes a decrease in the production of proteins that encourage the development of neurons and synapses, and depression is only one of the possible negative consequences."}
                    />
                    <DiteView  
                    title2="Artificial sweeteners:" 
                    text={"Unfortunately, you can't replace sugar with artificial sweeteners. A direct link has been identified between frequent use of aspartame and a reduction in serotonin levels. When this happens, depression can occur, and insomnia or headaches, precisely due to the blockage of this hormone in the brain. No artificial sweetener is risk-free and could compromise your emotional balance. If you're craving something sweet, you can use honey or enjoy a fruit to avoid the negative effects."}
                    />
                    <DiteView  
                    title2="Fast food:" 
                    text={"You probably think you need a lot of time to cook your meals, and it is much easier for you to stop at a fast-food restaurant. The problem is that these foods will create a vicious circle of depressive symptoms, combined with an increased risk of eating disorders.\n\nStudies have shown that people who eat fast food often have a 51% higher risk of depression. Avoid fast food and choose healthier foods, such as nuts, fruits, avocado, wholemeal toast, or oatmeal."}
                    />
                    <DiteView  
                    title2="Alcoholic beverages:" 
                    text={'Many people use alcohol to forget about problems, but it is only a temporary remedy. Alcohol suppresses the functions of the central nervous system, which processes emotions. You will likely feel even more depressed after a few hours, or you may fall into the "trap", believing that you need alcohol all the time to feel "normal".'}
                    />   
                    <DiteView  
                    title2="Salty dishes:" 
                    text={"Too much sodium exacerbates depression and fatigue. It can also cause bloating, water retention, and fattening, and the negative image caused by weight gain will not help you be more optimistic. \n\nIf you eat foods that contain an excess of salt, the immune system can be suppressed, increasing the risk of getting sick."}
                    />
                    <DiteView  
                    title2="Gluten:" 
                    text={"Whether you have gluten intolerance or not, it has been established that this compound has an inflammatory effect on the body because it endangers the balance of the microbiome in the intestinal tract. Consumption of gluten-containing products has been identified as one of the triggers for depression. It is worth giving up gluten for 2-3 weeks to see if you feel better."}
                    />
                    <DiteView  
                    title2="Caffeine:" 
                    text={"It does not cause depression directly but may worsen the symptoms because it affects sleep quality. Rest is vital to avoid depressive episodes. It is recommended to eliminate coffee and cola juices after lunch. You should also avoid black tea or foods that contain caffeine-based ingredients."}
                    />
                    <DiteView  
                    title2="Dairy products:" 
                    text={"Some studies have shown casein, a dairy protein, as a trigger for inflammation and depression. It's not a generic issue, but you can eliminate dairy products for 30 days to see if you get a positive ef"}
                    />
            </ScrollView> 
        </SafeAreaView>
      </ImageBackground>
    );
  }
}
const styles = StyleSheet.create({
  text: {
   color: "rgba(255,255,255,0.8)",fontFamily: CustomeFont.Poppins_Medium
  },
text1: {
   color: "rgba(255,255,255,0.8)",fontFamily: CustomeFont.Poppins_Bold,fontSize: 18,
  },
img:
{
height:400,width:400
},
textcolor:{color:"rgb(200, 104, 200)"}

});


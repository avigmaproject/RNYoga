import React, { Component } from "react";
import { Text, View, ImageBackground, SafeAreaView, FlatList ,StyleSheet,Alert,BackHandler} from "react-native";
import Header from "../customcomponent/Header";
import { GetGroceryList } from "../services/api.function";
import CustomeFont from "../CustomeFont"
import HTMLView from "react-native-htmlview";
import { ScrollView } from "react-native-gesture-handler";
import RenderModal from "../customcomponent/RenderModal"
import DiteView from "../customcomponent/DiteView"

export default class DetailGroceryList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            GroceryList: [
            {
            "id":1,
            "title":"MEAT, POULTRY, SEAFOOD:",
            "data":["Salmon","Trout","Mackerel","Anchovies","Sardines","Albacore Tuna","Yellowfin Tuna","Cod","Clams","Chicken","Turkey","Grass-fed Beef (small amounts)","Grass-fed Lamb (small amounts)"]
            },
            {
            "id":2,
            "title":"DAIRY:",
            "data":["Eggs","Milk (Vitamin D fortifed)","Non-Processed chees"]
            },
             {
            "id":3,
            "title":"GRAINS:",
            "data":["Whole Oats/Whole Grain Oatmeal","Whole Grain Bread (Rye, Spelt or Whole-Wheat)","Quinoa","Brown Rice","Barley","Buckwheat","Bulgar","Unsweetened","Whole Grain","Breakfast Cereals (e.g. muesli)"]
            },
             {
            "id":4,
            "title":"BEANS AND LEGUMES:",
            "data":["Lentils","Chickpeas/Garbanzo Beans","Soybeans/Edamame","Kidney", "Beans","Peas","Black-eyed Peas","Lima Beans","Black Beans"]
            },
            {
            "id":5,
            "title":"NUTS AND SEEDS:",
            "data":["Walnuts","Almonds","Pistachios","Chia Seeds","Flax Seeds", "Sesame Seeds", "Pumpkin Seeds","Sunflower Seeds", "Peanuts",]
            },
             {
            "id":6,
            "title":"FRUITS:",
            "data":[,"Orange","Strawberries","Raspberries","Avocado","Bananas","Tomatoes","Apples","Mangos"]
            },
            {
            "id":7,
            "title":"VEGETABLES:",
            "data":["Spinach","Brussels Sprouts","Mustard Greens","Collard Greens","Kale","Chard","Cabbage","Pumpkin","Sweet Potatoes","Asparagus","Squash","Onions","Romaine Lettuce","Broccoli","Cauliflower","Celery"]
            },
             {
            "id":8,
            "title":"DRESSING/SEASONING:",
            "data":["Fresh Herbs","Extra Virgin Olive Oil" ,"Apple Cider Vinegar","Balsamic Vinegar","Garlic"]
            },
             {
            "id":9,
            "title":"PROBIOTICS:",
            "data":["Kombucha","Tempeh","Sauerkraut (unpasteurized)","Kimchi (unpasteurized)","Non-sweetened Yogurt"]
            }
            ],
            userTitle: this.props.route.params.title

        }
    }
    onrender = ({ item }) => {
        return (
            <View key ={item.id} style={{paddingTop:20}}>
                <Text allowFontScaling={false}style={styles.text1}>{item.title}</Text>
               {item.data.map((item)=>{
                    return(<Text style={styles.text}><Text style={styles.textcolor}>{'\u25CF'}</Text> {item}</Text>)
                })}
            </View>
        )
    }
    render() {
        return (
    <View style={{flex:1,backgroundColor:"#2D1350"}}>
 <ImageBackground
                source={require("../assets/background1.png")}
                resizeMode="stretch"
                style={{ height: "100%", flex: 1 }}
            >
                <SafeAreaView>
                    <Header
                        title={`${this.props.route.params.title}`}
                        navigation={this.props.navigation}
                    />
                     <ScrollView contentContainerStyle={{paddingHorizontal:15,paddingTop:20,paddingBottom:100}}>
                        <FlatList
                            renderItem={this.onrender}
                            data={this.state.GroceryList}
                        />
                    </ScrollView>
                </SafeAreaView>
            </ImageBackground>
</View>
        );
    }
}
const styles = StyleSheet.create({
  text: {
   color: "rgba(255,255,255,0.8)",fontFamily: CustomeFont.Poppins_Medium,fontSize: 13,lineHeight:25
  },
text1: {
  color:"rgb(200, 104, 200)",fontFamily: CustomeFont.Poppins_Bold,fontSize: 15,marginBottom:10
  },
img:
{
height:400,width:400
},
textcolor:{color:"rgb(200, 104, 200)"}

});

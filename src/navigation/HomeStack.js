import React from "react";
import Home from "../screen/Home";
import Nutrition from "../screen/Nutrition";
import Yoga from "../screen/Yoga";
import ChatScreen from "../screen/ChatScreen";
import SubscriptionScreen from "../screen/SubscriptionScreen";
import ChatofflineScreen from "../screen/ChatofflineScreen";
import musicplayer from "../screen/musicplayer"
import { createStackNavigator } from "@react-navigation/stack";
import Meditation from "../screen/Meditation";
import Detailbrainfood from "../screen/Detailbrainfood";
import Detailbadfood from "../screen/Detailbadfood";
import DetailGuide from "../screen/DetailGuide";
import DetailRecipes from "../screen/DetailRecipes";
import DetailGroceryList from "../screen/DetailGroceryList";
import Detaildiet from "../screen/Detaildiet";
import FullScreenVideo from "../screen/FullScreenVideo";
import AvocadoScene from "../screen/BrainFoodScence/Avocado/AvocadoScene";
import BarriesScene from "../screen/BrainFoodScence/Berries/BarriesScene";
import ChamomileScene from "../screen/BrainFoodScence/Chamomile/ChamomileScene";
import CurcuminScene from "../screen/BrainFoodScence/Curcumin/CurcuminScene";
import DarkChocolateScene from "../screen/BrainFoodScence/DarkChocolate/DarkChocolateScene";
import DarkLeafyGreensScene from "../screen/BrainFoodScence/DarkLeafyGreens/DarkLeafyGreensScene";
import EggsScene from "../screen/BrainFoodScence/Eggs/EggsScene";
import NutsandSeedsScene from "../screen/BrainFoodScence/NutsandSeeds/NutsandSeedsScene";
import SalmonScene from "../screen/BrainFoodScence/Salmon/SalmonScene";

// import lunch from "../screen/lunch";
import RecipeDetail from "../screen/RecipeDetail";
import { StyleSheet, View, Image,TouchableOpacity } from 'react-native';
import CustomeFont from "../CustomeFont"


const HomeStack = createStackNavigator();

export default function HomeNavigation({navigation}) {
const forFade = ({ current, closing }) => ({
  cardStyle: {
    opacity: current.progress,
  },
});
  return (
    <HomeStack.Navigator screenOptions={{cardStyleInterpolator: forFade,headerShown:false}}>
      <HomeStack.Screen name="HomeScreen"  component={Home} />
      <HomeStack.Screen name="NutritionScreen" component={Nutrition} 
      // options={{
      //     headerTitle: "Nutrition",
      //     headerLeft: () => (
      //       <TouchableOpacity
      //         onPress={() => navigation.goBack()}
      //         style={{
      //           backgroundColor: "#fff",
      //           justifyContent: "center",
      //           alignItems: "center",
      //           borderRadius: 7,
      //           marginHorizontal: 20
      //         }}
      //       >
      //         <Image
      //           resizeMode="contain"
      //           style={{ height: 38, width: 38, borderRadius: 3 }}
      //           source={require("../assets/backarrow.png")}
      //         />
      //       </TouchableOpacity>
      //     ),
      //      headerTransparent: true,
      //     headerTitleAlign:"left",
      //     headerTitleAllowFontScaling:false,
      //     headerTitleStyle:{  color: "rgba(255,255,255,0.8)", fontSize:27, fontFamily: CustomeFont.Poppins_Medium},  
      //   // headerTitleAllowFontScaling
      //   }}
 />
      <HomeStack.Screen name="DetailGuide" component={DetailGuide} />
      <HomeStack.Screen name="Detaildiet" component={Detaildiet}  />
      <HomeStack.Screen name="Detailbadfood" component={Detailbadfood} />
      <HomeStack.Screen name="Detailbrainfood" component={Detailbrainfood} />
      <HomeStack.Screen name="DetailRecipes" component={DetailRecipes} />
      <HomeStack.Screen name="DetailGroceryList" component={DetailGroceryList} />
      <HomeStack.Screen name="Yoga" component={Yoga} />
      <HomeStack.Screen name="ChatScreen" component={ChatScreen} />
      <HomeStack.Screen name="Meditation" component={Meditation} />
      <HomeStack.Screen name="musicplayer" component={musicplayer} />
      <HomeStack.Screen name="FullScreenVideo" component={FullScreenVideo} />
      <HomeStack.Screen name="AvocadoScene" component={AvocadoScene}/>
      <HomeStack.Screen name="BarriesScene" component={BarriesScene}/>
      <HomeStack.Screen name="ChamomileScene" component={ChamomileScene}/>
      <HomeStack.Screen name="CurcuminScene" component={CurcuminScene}/>
      <HomeStack.Screen name="DarkChocolateScene" component={DarkChocolateScene}/>
      <HomeStack.Screen name="DarkLeafyGreensScene" component={DarkLeafyGreensScene}/>
      <HomeStack.Screen name="EggsScene" component={EggsScene}/>
      <HomeStack.Screen name="NutsandSeedsScene" component={NutsandSeedsScene}/>
      <HomeStack.Screen name="SalmonScene" component={SalmonScene}/>
      <HomeStack.Screen name="RecipeDetail" component={RecipeDetail} />

      <HomeStack.Screen
        name="ChatofflineScreen"
        component={ChatofflineScreen}
      />
      <HomeStack.Screen
        name="SubscriptionScreen"
        component={SubscriptionScreen}
      />
    </HomeStack.Navigator>
  );
}

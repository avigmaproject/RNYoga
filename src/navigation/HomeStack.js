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
    <HomeStack.Navigator screenOptions={{cardStyleInterpolator: forFade}}>
      <HomeStack.Screen name="HomeScreen"  component={Home}  options={{ headerShown: false }}/>
      <HomeStack.Screen name="NutritionScreen" component={Nutrition} 
      options={{
          headerTitle: "Nutrition",
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={{
                backgroundColor: "#fff",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 7,
                marginHorizontal: 20
              }}
            >
              <Image
                resizeMode="contain"
                style={{ height: 38, width: 38, borderRadius: 3 }}
                source={require("../assets/backarrow.png")}
              />
            </TouchableOpacity>
          ),
           headerTransparent: true,
          headerTitleAlign:"left",
          headerTitleAllowFontScaling:false,
          headerTitleStyle:{  color: "rgba(255,255,255,0.8)", fontSize:27, fontFamily: CustomeFont.Poppins_Medium},  
        // headerTitleAllowFontScaling
        }}
 />
      <HomeStack.Screen name="DetailGuide" component={DetailGuide} options={{ headerShown: false }} />
      <HomeStack.Screen name="Detaildiet" component={Detaildiet}  options={{ headerShown: false }} />
      <HomeStack.Screen name="Detailbadfood" component={Detailbadfood}  options={{ headerShown: false }}/>
      <HomeStack.Screen name="Detailbrainfood" component={Detailbrainfood} options={{ headerShown: false }} />
      <HomeStack.Screen name="DetailRecipes" component={DetailRecipes} options={{ headerShown: false }} />
      <HomeStack.Screen name="DetailGroceryList" component={DetailGroceryList} options={{ headerShown: false }} />
      <HomeStack.Screen name="Yoga" component={Yoga}  options={{ headerShown: false }}/>
      <HomeStack.Screen name="ChatScreen" component={ChatScreen} options={{ headerShown: false }} />
      <HomeStack.Screen name="Meditation" component={Meditation} options={{ headerShown: false }} />
      <HomeStack.Screen name="musicplayer" component={musicplayer}  options={{ headerShown: false }}/>
      <HomeStack.Screen name="FullScreenVideo" component={FullScreenVideo}  options={{ headerShown: false }}/>
      {/* <HomeStack.Screen name="lunch" component={lunch}/> */}
      <HomeStack.Screen name="RecipeDetail" component={RecipeDetail}  options={{ headerShown: false }}/>

      <HomeStack.Screen
        name="ChatofflineScreen"
        component={ChatofflineScreen}
options={{ headerShown: false }}
      />
      <HomeStack.Screen
        name="SubscriptionScreen"
        component={SubscriptionScreen}
options={{ headerShown: false }}
      />
    </HomeStack.Navigator>
  );
}

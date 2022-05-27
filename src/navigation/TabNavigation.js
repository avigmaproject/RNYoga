import React from "react"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import Calender from "../screen/Calender"
import Profile from "../screen/Profile"
import HomeStack from "./HomeStack"
import { basecolor } from "../services/constant"
import { Image, View ,Dimensions} from "react-native"
import DeviceInfo from "react-native-device-info"
let hasNotch = DeviceInfo.hasNotch()
const {width,height} = Dimensions.get('window');
const Tab = createBottomTabNavigator()
export default function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let image
          if (route.name === "Profile") {
            image = focused
              ? require("../assets/myprofileactive.png")
              : require("../assets/myprofiledeactive.png")
          } else if (route.name === "Home") {
            image = focused
              ? require("../assets/Homeactive.png")
              : require("../assets/Home2.png")
          } else if (route.name === "Calender") {
            image = focused
              ? require("../assets/calendaractive.png")
              : require("../assets/calendardeactive.png")
          }
          return (
            <View style={{
              marginTop:-17,
              borderTopColor: focused ? "#EA68FD" : "", 
              borderTopWidth: focused ? 1 : 0}}>
          {focused &&(
          <View style={{ position:"absolute",marginLeft:-50,marginTop:-13}}>
            <Image
                resizeMode="contain"
                style={{ width:160, height: 150,}}
                source={require('../assets/hover.png')}
             />
           </View>)}
           <View style={{paddingTop:15, height: 54, width: 60,}} >
            <Image
                resizeMode="contain"
                source={image}
                style={{ height: 55, width: 55, marginLeft:0.5 }}
              />
          </View>
          </View>
            // <View
            //   style={{
            //     borderTopColor: focused ? "#EA68FD" : "",
            //     borderTopWidth: focused ? 3 : 0,
            //     paddingHorizontal: focused ? 2 : 0,
            //     backgroundColor: focused ? "rgba(234, 104, 253,0.2)" : ""
            //   }}
            // >
            //   <Image
            //     resizeMode="contain"
            //     source={image}
            //     style={{ height: 50, width: 50, marginTop: 5 }}
            //   />
            // </View>
          )
        },

        headerShown: false,
        tabBarStyle: {
          backgroundColor: basecolor,
          borderTopColor: "#472f67",
          height: hasNotch ? 100 : 64
          // paddingBottom: 5
        },
        tabBarShowLabel: false
      })}
    >
      <Tab.Screen name="Home" component={HomeStack} />
      <Tab.Screen name="Calender" component={Calender} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  )
}

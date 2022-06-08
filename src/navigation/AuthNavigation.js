import React from "react";
import Register from "../screen/Register";
import Login from "../screen/Login";
import Forgotpassword from "../screen/Forgotpassword";
import ResetPassword from "../screen/ResetPassword";
import LandingScreen from "../screen/LandingScreen";

import { createStackNavigator } from "@react-navigation/stack";
const AuthStack = createStackNavigator();
const forFade = ({ current, closing }) => ({
  cardStyle: {
    opacity: current.progress,
  },
});
export default function AuthNavigation() {
  return (
    <AuthStack.Navigator
     screenOptions={{cardStyleInterpolator: forFade,headerShown:false}}
    >
      <AuthStack.Screen name="LandingScreen" component={LandingScreen} />
      <AuthStack.Screen name="Login" component={Login} />
      <AuthStack.Screen name="Register" component={Register} />
      <AuthStack.Screen name="ResetPassword" component={ResetPassword} />
      <AuthStack.Screen name="Forgotpassword" component={Forgotpassword} />
    </AuthStack.Navigator>
  );
}

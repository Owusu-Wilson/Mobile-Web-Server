import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

Stack = createNativeStackNavigator();
import Home from "../screens/Home";
import LocalServer from "../screens/LocalServer";
import InternetServer from "../screens/InternetServer";
function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="LocalServer"
        component={LocalServer}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="InternetServer"
        component={InternetServer}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

export default HomeStack;

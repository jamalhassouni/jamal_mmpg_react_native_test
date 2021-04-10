import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Home, User } from "../screens/index";

const Stack = createStackNavigator();

const MainNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Home" component={Home} />

      <Stack.Screen name="User" component={User} />
    </Stack.Navigator>
  );
};

export default MainNavigation;

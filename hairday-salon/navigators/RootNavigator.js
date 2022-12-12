import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import WelcomeScreen from "../screens/WelcomeScreen";
import SubscribeScreen from "../screens/SubscribeScreen";
import BookScreen from "../screens/BookScreen";

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Welcome"
        component={WelcomeScreen}
        options={{ 
          title: 'Welcome', 
          headerStyle: {
            textAlign: 'center'
        }
        }}
        />
      <Stack.Screen
        name="Subscribe"
        component={SubscribeScreen} 
        options={{ 
          title: 'Subscribe', 
          headerStyle: {
            textAlign: 'center'
        }
        }}
        />
    <Stack.Screen
        name="Book"
        component={BookScreen} 
        options={{ 
          title: 'Book', 
          headerStyle: {
            textAlign: 'center'
        }
        }}
        />
    </Stack.Navigator>
  );
};

export default RootNavigator;

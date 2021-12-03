import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./screens/HomeScreen";
import ChatListScreen from "./screens/ChatListScreen";
import ChatScreen from "./screens/ChatScreen";
const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="HomeScreen" component={HomeScreen} options={{headerShown:false}}/>
        <Stack.Screen name="ChatListScreen" component={ChatListScreen} options={{title:'Chat'}}/>
        <Stack.Screen name="ChatScreen" component={ChatScreen} options={{title:'Bate Papo'}}/>
      
      </Stack.Navigator>
    </NavigationContainer>
  );
}

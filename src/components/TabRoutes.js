import * as React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from "react-native";
import styled, { ThemeProvider, useTheme } from "styled-components";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Svg, { Path, G } from "react-native-svg";
import HomeScreen from "../features/home/screens/Home/Home.screen";
import GuideScreen from "../features/home/screens/Guide/Guide.screen";
import AboutScreen from "../features/home/screens/About/About.screen";
import CalculateScreen from "../features/home/screens/Calculate/Calculate.screen";
import Ionicons from "react-native-vector-icons/Ionicons";

const TabText = styled.Text`
  text-align: center;
  font-size: 10px;
`;

const Tab = createBottomTabNavigator();
const BottomTabs = () => {
  const theme = useTheme();
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          if (route.name === "Home") {
            return <Ionicons name="home-outline" size={22} color={color} />;
          } else if (route.name === "Calculate") {
            return <Ionicons name="sparkles-outline" size={22} color={color} />;
          }
        },
        tabBarActiveTintColor: theme.colors.tab.active,
        tabBarInactiveTintColor: "gray",
        headerShown: false,
        // tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: theme.colors.tab.bg,
          shadow: {
            shadowColor: "#7F5DF0",
            shadowOffset: {
              width: 0,
              height: 10,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
            elevation: 5,
          },
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Calculate" component={CalculateScreen} />
    </Tab.Navigator>
  );
};

export default function TabRoutes() {
  return (
    <>
      <BottomTabs />
    </>
  );
}

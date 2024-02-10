import * as React from "react";
import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button, useColorScheme } from "react-native";
import { PaperProvider } from "react-native-paper";
import styled, { ThemeProvider, useTheme } from "styled-components";
import { theme } from "./src/infrastructure/theme";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Svg, { Path, G } from "react-native-svg";
import HomeScreen from "./src/features/home/screens/Home/Home.screen";
import CalculateScreen from "./src/features/home/screens/Calculate/Calculate.screen";
import GuideScreen from "./src/features/home/screens/Guide/Guide.screen";
import AboutScreen from "./src/features/home/screens/About/About.screen";
import { createDrawerNavigator } from "@react-navigation/drawer";
import TabRoutes from "./src/components/TabRoutes";
import CustomDrawer from "./src/components/CustomDrawer";
import Ionicons from "react-native-vector-icons/Ionicons";

const Drawer = createDrawerNavigator();

export default function App() {
  const scheme = useColorScheme();
  return (
    <>
      <PaperProvider>
        <ThemeProvider theme={scheme === "dark" ? theme.dark : theme.light}>
          <NavigationContainer>
            <Drawer.Navigator
              screenOptions={{
                headerShown: true,
                headerTitle: "",
                headerShadowVisible: false,
                headerTintColor:
                  scheme === "dark"
                    ? theme.dark.colors.text.primary
                    : theme.light.colors.text.primary,
              }}
              drawerContent={(props) => <CustomDrawer {...props} />}
            >
              <Drawer.Screen
                name="HelpChai"
                component={TabRoutes}
                options={{
                  drawerIcon: ({ color }) => (
                    <Ionicons name="home-outline" size={22} color={color} />
                  ),
                  drawerActiveTintColor:
                    scheme === "dark"
                      ? theme.dark.colors.text.primary
                      : theme.light.colors.text.primary,
                  drawerInactiveTintColor:
                    scheme === "dark"
                      ? theme.dark.colors.text.primary
                      : theme.light.colors.text.primary,
                  headerStyle: {
                    backgroundColor:
                      scheme === "dark"
                        ? theme.dark.colors.bg.top
                        : theme.light.colors.bg.top,
                  },
                }}
              />
              <Drawer.Screen
                name="Guide"
                component={GuideScreen}
                options={{
                  drawerIcon: ({ color }) => (
                    <Ionicons name="book-outline" size={22} color={color} />
                  ),
                  drawerActiveTintColor:
                    scheme === "dark"
                      ? theme.dark.colors.text.primary
                      : theme.light.colors.text.primary,
                  drawerInactiveTintColor:
                    scheme === "dark"
                      ? theme.dark.colors.text.primary
                      : theme.light.colors.text.primary,
                  headerStyle: {
                    backgroundColor:
                      scheme === "dark"
                        ? theme.dark.colors.bg.top
                        : theme.light.colors.bg.top,
                  },
                }}
              />
              <Drawer.Screen
                name="About"
                component={AboutScreen}
                options={{
                  drawerIcon: ({ color }) => (
                    <Ionicons
                      name="information-circle-outline"
                      size={22}
                      color={color}
                    />
                  ),
                  drawerActiveTintColor:
                    scheme === "dark"
                      ? theme.dark.colors.text.primary
                      : theme.light.colors.text.primary,
                  drawerInactiveTintColor:
                    scheme === "dark"
                      ? theme.dark.colors.text.primary
                      : theme.light.colors.text.primary,
                  headerStyle: {
                    backgroundColor:
                      scheme === "dark"
                        ? theme.dark.colors.bg.top
                        : theme.light.colors.bg.top,
                  },
                }}
              />
            </Drawer.Navigator>
          </NavigationContainer>
        </ThemeProvider>
      </PaperProvider>
      <StatusBar style="auto" />
    </>
  );
}

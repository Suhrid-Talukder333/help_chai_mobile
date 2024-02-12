import * as React from "react";
import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Button,
  useColorScheme,
  Image,
  ActivityIndicator,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { PaperProvider } from "react-native-paper";
import styled, { ThemeProvider, useTheme } from "styled-components";
import { theme } from "./src/infrastructure/theme";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
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
import IntroComponent from "./src/components/IntroComponent";

const Drawer = createDrawerNavigator();

export default function App() {
  const [loading, setLoading] = React.useState(true);
  const [showRealApp, setShowRealApp] = React.useState(false);
  const scheme = useColorScheme();

  const readData = async () => {
    const value = await AsyncStorage.getItem("first_time_HelpChai");
    setShowRealApp(!!value);
    setLoading(false);
  };

  const storeData = async () => {
    try {
      await AsyncStorage.setItem("first_time_HelpChai", "true");
      setShowRealApp(true);
    } catch (e) {}
  };

  React.useEffect(() => {
    readData();
  }, []);


  if (loading) return <ActivityIndicator size="large" />;
  return (
    <>
      <PaperProvider>
        <ThemeProvider theme={scheme === "dark" ? theme.dark : theme.light}>
          <NavigationContainer>
            {showRealApp ? (
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
            ) : (
              <IntroComponent onDone={storeData} />
            )}
          </NavigationContainer>
        </ThemeProvider>
      </PaperProvider>
      <StatusBar style="auto" />
    </>
  );
}

import * as React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from "react-native";
import { PaperProvider } from "react-native-paper";
import styled, { ThemeProvider } from "styled-components";
import { theme } from "./src/infrastructure/theme";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Svg, { Path, G } from "react-native-svg";
import HomeScreen from "./src/features/home/screens/Home/Home.screen";
import CalculateScreen from "./src/features/home/screens/Calculate/Calculate.screen";
import GuideScreen from "./src/features/home/screens/Guide/Guide.screen";
import AboutScreen from "./src/features/home/screens/About/About.screen";

const TabText = styled.Text`
  text-align: center;
  font-size: 10px;
`;

const Tab = createBottomTabNavigator();
const BottomTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Home") {
            if (focused) {
              return (
                <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -4.5 22 28">
                  <Path
                    fill="#7ed0ec"
                    fillRule="evenodd"
                    d="M16.8 18h-3.15v-4h-6.3v4H4.2V8.813l6.29-5.99 6.31 6.009V18Zm2.1-9.996V8l-8.398-8L0 9.992l1.482 1.414.618-.593V20h7.35v-4h2.1v4h7.35v-9.168l.614.584 1.487-1.414L18.9 8.004Z"
                  />
                </Svg>
              );
            } else {
              return (
                <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -4.5 22 28">
                  <Path
                    fill="#000"
                    fillRule="evenodd"
                    d="M16.8 18h-3.15v-4h-6.3v4H4.2V8.813l6.29-5.99 6.31 6.009V18Zm2.1-9.996V8l-8.398-8L0 9.992l1.482 1.414.618-.593V20h7.35v-4h2.1v4h7.35v-9.168l.614.584 1.487-1.414L18.9 8.004Z"
                  />
                </Svg>
              );
            }
          } else if (route.name === "Calculate") {
            if (focused) {
              return (
                <Svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlSpace="preserve"
                  id="_x32_"
                  fill="#7ed0ec"
                  viewBox="-51.2 -51.2 850.4 614.4"
                >
                  <G id="SVGRepo_iconCarrier">
                    <Path
                      d="M247.355 106.9C222.705 82.241 205.833 39.18 197.46 0c-8.386 39.188-25.24 82.258-49.899 106.917-24.65 24.642-67.724 41.514-106.896 49.904 39.188 8.373 82.254 25.235 106.904 49.895 24.65 24.65 41.522 67.72 49.908 106.9 8.373-39.188 25.24-82.258 49.886-106.917 24.65-24.65 67.724-41.514 106.896-49.904-39.179-8.373-82.245-25.244-106.904-49.895zM407.471 304.339c-14.714-14.721-24.81-40.46-29.812-63.864-5.011 23.404-15.073 49.142-29.803 63.872-14.73 14.714-40.464 24.801-63.864 29.812 23.408 5.01 49.134 15.081 63.864 29.811 14.73 14.722 24.81 40.46 29.82 63.864 5.001-23.413 15.081-49.142 29.802-63.872 14.722-14.722 40.46-24.802 63.856-29.82-23.395-5.002-49.133-15.081-63.863-29.803zM146.352 354.702c-4.207 19.648-12.655 41.263-25.019 53.626-12.362 12.354-33.968 20.82-53.613 25.027 19.645 4.216 41.251 12.656 53.613 25.027 12.364 12.362 20.829 33.96 25.036 53.618 4.203-19.658 12.655-41.255 25.023-53.626 12.354-12.362 33.964-20.82 53.605-25.035-19.64-4.2-41.251-12.656-53.613-25.019-12.36-12.354-20.829-33.969-25.032-53.618z"
                      className="st0"
                    />
                  </G>
                </Svg>
              );
            } else {
              return (
                <Svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlSpace="preserve"
                  id="_x32_"
                  fill="#000"
                  fillRule="evenodd"
                  viewBox="-51.2 -51.2 850.4 614.4"
                >
                  <G id="SVGRepo_iconCarrier">
                    <Path
                      d="M247.355 106.9C222.705 82.241 205.833 39.18 197.46 0c-8.386 39.188-25.24 82.258-49.899 106.917-24.65 24.642-67.724 41.514-106.896 49.904 39.188 8.373 82.254 25.235 106.904 49.895 24.65 24.65 41.522 67.72 49.908 106.9 8.373-39.188 25.24-82.258 49.886-106.917 24.65-24.65 67.724-41.514 106.896-49.904-39.179-8.373-82.245-25.244-106.904-49.895zM407.471 304.339c-14.714-14.721-24.81-40.46-29.812-63.864-5.011 23.404-15.073 49.142-29.803 63.872-14.73 14.714-40.464 24.801-63.864 29.812 23.408 5.01 49.134 15.081 63.864 29.811 14.73 14.722 24.81 40.46 29.82 63.864 5.001-23.413 15.081-49.142 29.802-63.872 14.722-14.722 40.46-24.802 63.856-29.82-23.395-5.002-49.133-15.081-63.863-29.803zM146.352 354.702c-4.207 19.648-12.655 41.263-25.019 53.626-12.362 12.354-33.968 20.82-53.613 25.027 19.645 4.216 41.251 12.656 53.613 25.027 12.364 12.362 20.829 33.96 25.036 53.618 4.203-19.658 12.655-41.255 25.023-53.626 12.354-12.362 33.964-20.82 53.605-25.035-19.64-4.2-41.251-12.656-53.613-25.019-12.36-12.354-20.829-33.969-25.032-53.618z"
                      className="st0"
                    />
                  </G>
                </Svg>
              );
            }
          } else if (route.name === "Guide") {
            if (focused) {
              return (
                <Svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#7ed0ec"
                  viewBox="0 0 24 24"
                >
                  <Path
                    stroke="#000"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 10.4V20m0-9.6c0-2.24 0-3.36-.436-4.216a4 4 0 0 0-1.748-1.748C8.96 4 7.84 4 5.6 4h-1c-.56 0-.84 0-1.054.109a1 1 0 0 0-.437.437C3 4.76 3 5.04 3 5.6v10.8c0 .56 0 .84.109 1.054a1 1 0 0 0 .437.437C3.76 18 4.04 18 4.6 18h2.947c.54 0 .81 0 1.071.047.232.04.458.11.674.204.243.106.468.255.917.555L12 20m0-9.6c0-2.24 0-3.36.436-4.216a4 4 0 0 1 1.748-1.748C15.04 4 16.16 4 18.4 4h1c.56 0 .84 0 1.054.109a1 1 0 0 1 .437.437C21 4.76 21 5.04 21 5.6v10.8c0 .56 0 .84-.109 1.054a1 1 0 0 1-.437.437C20.24 18 19.96 18 19.4 18h-2.947c-.54 0-.81 0-1.071.047-.232.04-.458.11-.674.204-.243.106-.468.255-.917.555L12 20"
                  />
                </Svg>
              );
            } else {
              return (
                <Svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <Path
                    stroke="#000"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 10.4V20m0-9.6c0-2.24 0-3.36-.436-4.216a4 4 0 0 0-1.748-1.748C8.96 4 7.84 4 5.6 4h-1c-.56 0-.84 0-1.054.109a1 1 0 0 0-.437.437C3 4.76 3 5.04 3 5.6v10.8c0 .56 0 .84.109 1.054a1 1 0 0 0 .437.437C3.76 18 4.04 18 4.6 18h2.947c.54 0 .81 0 1.071.047.232.04.458.11.674.204.243.106.468.255.917.555L12 20m0-9.6c0-2.24 0-3.36.436-4.216a4 4 0 0 1 1.748-1.748C15.04 4 16.16 4 18.4 4h1c.56 0 .84 0 1.054.109a1 1 0 0 1 .437.437C21 4.76 21 5.04 21 5.6v10.8c0 .56 0 .84-.109 1.054a1 1 0 0 1-.437.437C20.24 18 19.96 18 19.4 18h-2.947c-.54 0-.81 0-1.071.047-.232.04-.458.11-.674.204-.243.106-.468.255-.917.555L12 20"
                  />
                </Svg>
              );
            }
          } else if (route.name === "About Us") {
            if (focused) {
              return (
                <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <Path
                    fill="#7ed0ec"
                    fillRule="evenodd"
                    d="M256 42.667C138.18 42.667 42.667 138.178 42.667 256c0 117.82 95.513 213.333 213.333 213.333 117.822 0 213.333-95.513 213.333-213.333 0-117.822-95.511-213.333-213.333-213.333Zm0 384c-94.105 0-170.667-76.562-170.667-170.667S161.895 85.333 256 85.333c94.107 0 170.667 76.562 170.667 170.667S350.107 426.667 256 426.667Zm26.713-256c0 15.467-11.261 26.666-26.496 26.666-15.852 0-26.837-11.199-26.837-26.962 0-15.15 11.283-26.371 26.837-26.371 15.235 0 26.496 11.22 26.496 26.667Zm-48 64h42.667v128h-42.667v-128Z"
                  />
                </Svg>
              );
            } else {
              return (
                <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <Path
                    fill="#000"
                    fillRule="evenodd"
                    d="M256 42.667C138.18 42.667 42.667 138.178 42.667 256c0 117.82 95.513 213.333 213.333 213.333 117.822 0 213.333-95.513 213.333-213.333 0-117.822-95.511-213.333-213.333-213.333Zm0 384c-94.105 0-170.667-76.562-170.667-170.667S161.895 85.333 256 85.333c94.107 0 170.667 76.562 170.667 170.667S350.107 426.667 256 426.667Zm26.713-256c0 15.467-11.261 26.666-26.496 26.666-15.852 0-26.837-11.199-26.837-26.962 0-15.15 11.283-26.371 26.837-26.371 15.235 0 26.496 11.22 26.496 26.667Zm-48 64h42.667v128h-42.667v-128Z"
                  />
                </Svg>
              );
            }
          }
        },
        tabBarActiveTintColor: "#7ed0ec",
        tabBarInactiveTintColor: "gray",
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Guide" component={GuideScreen} />
      <Tab.Screen name="About Us" component={AboutScreen} />
      <Tab.Screen name="Calculate" component={CalculateScreen} />
    </Tab.Navigator>
  );
};
export default function App() {
  return (
    <>
      <PaperProvider>
        <ThemeProvider theme={theme}>
          <NavigationContainer>
            <BottomTabs />
          </NavigationContainer>
        </ThemeProvider>
      </PaperProvider>
      <StatusBar style="auto" />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

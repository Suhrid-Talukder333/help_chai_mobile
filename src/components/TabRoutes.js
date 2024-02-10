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
import { TouchableOpacity } from "react-native-gesture-handler";
import * as Animatable from "react-native-animatable";

const TabText = styled.Text`
  text-align: center;
  font-size: 10px;
`;

const StyledTouchableOpacity = styled.TouchableOpacity`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const StyledAnimatableView = styled(Animatable.View)`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const TabBarButton = (props) => {
  const theme = useTheme();
  const { route, color, onPress, accessibilityState } = props;
  const focused = accessibilityState.selected;
  const homeRef = React.useRef(null);
  const calculateRef = React.useRef(null);

  React.useEffect(() => {
    if (focused) {
      if (route.name === "Home") {
        homeRef.current.animate({
          0: {
            scale: 0.5,
            rotate: "0deg",
          },
          1: { scale: 1.5, rotate: "360deg" },
        });
      } else if (route.name === "Calculate") {
        calculateRef.current.animate({
          0: {
            scale: 0.5,
            rotate: "0deg",
          },
          1: { scale: 1.5, rotate: "360deg" },
        });
      }
    } else {
      if (route.name === "Home") {
        homeRef.current.animate({
          0: {
            scale: 1.5,
            rotate: "360deg",
          },
          1: { scale: 1, rotate: "0deg" },
        });
      } else if (route.name === "Calculate") {
        calculateRef.current.animate({
          0: {
            scale: 1.5,
            rotate: "360deg",
          },
          1: { scale: 1, rotate: "0deg" },
        });
      }
    }
  }, [focused]);

  return (
    <StyledTouchableOpacity onPress={onPress} activeOpacity={1}>
      {route.name === "Home" && (
        <StyledAnimatableView ref={homeRef} animation="zoomIn" duration={2000}>
          <Ionicons
            name={focused ? "home" : "home-outline"}
            size={20}
            color={
              focused ? theme.colors.tab.active : theme.colors.tab.deactive
            }
          />
        </StyledAnimatableView>
      )}
      {route.name === "Calculate" && (
        <StyledAnimatableView
          ref={calculateRef}
          animation="zoomIn"
          duration={500}
        >
          <Ionicons
            name={focused ? "sparkles" : "sparkles-outline"}
            size={20}
            color={
              focused ? theme.colors.tab.active : theme.colors.tab.deactive
            }
          />
        </StyledAnimatableView>
      )}
    </StyledTouchableOpacity>
  );
};

const Tab = createBottomTabNavigator();
const BottomTabs = () => {
  const theme = useTheme();
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        tabBarButton: (props) => <TabBarButton {...props} route={route} />,
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          paddingBottom: 0,
          backgroundColor: theme.colors.tab.bg,
          height: 60,
          position: "absolute",
          bottom: 16,
          left: 16,
          right: 16,
          borderRadius: 16,
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

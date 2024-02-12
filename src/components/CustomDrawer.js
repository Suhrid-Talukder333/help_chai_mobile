import React from "react";
import {
  View,
  Text,
  ImageBackground,
  Image,
  Linking,
  TouchableOpacity,
  useColorScheme,
} from "react-native";
import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";

import Ionicons from "react-native-vector-icons/Ionicons";
import { theme } from "../infrastructure/theme";
import styled from "styled-components";

const StyledText = styled.Text`
  color: ${(props) => props.theme.colors.text.primary};
`;

const CustomDrawer = (props) => {
  const scheme = useColorScheme();
  return (
    <View
      style={{
        flex: 1,
        backgroundColor:
          scheme === "dark"
            ? theme.dark.colors.bg.primary
            : theme.light.colors.bg.primary,
      }}
    >
      <DrawerContentScrollView {...props}>
        <ImageBackground
          source={require("./img/HelpChai.gif")}
          style={{ padding: 50, }}
        ></ImageBackground>
        <View
          style={{
            flex: 1,
            backgroundColor:
              scheme === "dark"
                ? theme.dark.colors.bg.primary
                : theme.light.colors.bg.primary,
            paddingTop: 10,
          }}
        >
          <DrawerItemList {...props} />
        </View>
      </DrawerContentScrollView>
      <View style={{ padding: 20, borderTopWidth: 1, borderTopColor: "#ccc" }}>
        <TouchableOpacity
          onPress={() => {
            Linking.openURL("https://helpchai.vercel.app/");
          }}
          style={{ paddingVertical: 15 }}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Ionicons
              name="compass-outline"
              style={{
                color:
                  scheme === "dark"
                    ? theme.dark.colors.text.primary
                    : theme.light.colors.text.primary,
              }}
              size={22}
            />
            <StyledText
              style={{
                fontSize: 15,
                marginLeft: 5,
              }}
            >
              Website
            </StyledText>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            Linking.openURL("https://helpchai.vercel.app/contact");
          }}
          style={{ paddingVertical: 15 }}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Ionicons
              name="call-outline"
              style={{
                color:
                  scheme === "dark"
                    ? theme.dark.colors.text.primary
                    : theme.light.colors.text.primary,
              }}
              size={22}
            />
            <StyledText
              style={{
                fontSize: 15,
                marginLeft: 5,
              }}
            >
              Contact
            </StyledText>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {}} style={{ paddingVertical: 15 }}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <StyledText
              style={{
                fontSize: 15,
                marginLeft: 5,
              }}
            >
              Made with ❤
            </StyledText>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CustomDrawer;

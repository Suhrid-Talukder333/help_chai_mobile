import * as React from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  useColorScheme,
  AsyncStorage,
  Image,
} from "react-native";
import { PaperProvider } from "react-native-paper";
import styled, { ThemeProvider, useTheme } from "styled-components";
import Svg, { Path, G } from "react-native-svg";
import Ionicons from "react-native-vector-icons/Ionicons";
import AppIntroSlider from "react-native-app-intro-slider";
import { useNavigation } from "@react-navigation/native";

const StyledSafeAreaView = styled.SafeAreaView`
  height: 100%;
  width: 100%;
  background-color: ${(props) => props.theme.colors.bg.top};
`;

const StyledText = styled.Text`
  color: ${(props) => props.theme.colors.text.primary};
`;

const StyledView = styled.View`
  flex: 1;
  padding: 5px;
  justify-content: center;
  align-items: center;
  width: 100%;
  text-align: center;
`;

const slides = [
  {
    key: 1,
    title: "",
    text: "Where water meets quality \nQuality meets care",
    image: require("./img/HelpChai.gif"),
    backgroundColor: "#59b2ab",
  },
  {
    key: 2,
    title: "Safety",
    text: "Empowering you to safeguard water quality \nOne test at a time.",
    image: require("./img/Asset 5.png"),
    backgroundColor: "#89ae86",
  },
  {
    key: 3,
    title: "Climate Change",
    text: "As climate changes so does the quality of our water. ",
    image: require("./img/Asset 7.png"),
    backgroundColor: "#E3651D",
  },
  {
    key: 4,
    title: "Protecting Your Water",
    text: "Check water quality, safeguard your local water. With our app every drop counts for a cleaner future.",
    image: require("./img/Asset 8.png"),
    backgroundColor: "#F6B17A",
  },
];

export default function IntroComponent(props) {
  const { onDone, navigation } = props;

  const handleOnDone = () => {
    onDone();
  };
  const renderItem = ({ item }) => {
    console.log(item);
    return (
      <StyledView style={{ backgroundColor: item.backgroundColor }}>
        <StyledView style={{ marginTop: 80 }}>
          <Image style={{ width: 300, height: 300 }} source={item.image} />
        </StyledView>
        <StyledView>
          <StyledText
            style={{
              marginBottom: 10,
              fontSize: 25,
              textAlign: "center",
              fontWeight: "bold",
            }}
          >
            {item.title}
          </StyledText>
          <StyledText style={{ fontSize: 20, textAlign: "center" }}>
            {item.text}
          </StyledText>
        </StyledView>
      </StyledView>
    );
  };
  return (
    <StyledSafeAreaView>
      <AppIntroSlider
        showSkipButton={true}
        renderItem={renderItem}
        data={slides}
        onDone={handleOnDone}
        dotStyle={{
          backgroundColor: "#f2f5ff",
        }}
        activeDotStyle={{
          backgroundColor: "#382bf0",
        }}
      />
    </StyledSafeAreaView>
  );
}

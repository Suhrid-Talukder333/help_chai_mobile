import * as React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  Text,
  View,
  Button,
  TextInput,
  ScrollView,
  Linking,
  Image,
} from "react-native";
import styled, { useTheme } from "styled-components";
import Svg, { Path, G, Defs, ClipPath } from "react-native-svg";

const BrandText = styled.Text`
  font-size: 30px;
  font-weight: bold;
`;

const BiggerText = styled.Text`
  font-size: 10px;
  font-weight: bold;
`;

const StyledSafeAreaView = styled.SafeAreaView`
  height: 100%;
  width: 100%;
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

const StyledView = styled.View`
  display: flex;
  flex-direction: row;
  background-color: ${(props) => props.theme.colors.bg.primary};
  padding: 30px;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const StyledSubView = styled.View`
  display: flex;
  flex-direction: row;
  background-color: ${(props) => props.theme.colors.bg.primary};
  padding: 5px;
  flex-wrap: wrap;
  align-items: center;
  width: 100%;
`;

const TextContainerView = styled.View`
  background-color: ${(props) => props.theme.colors.textbg.primary};
  padding: 20px;
  border: 1px solid ${(props) => props.theme.colors.bg.secondary};
  border-radius: 10px;
`;

const StyledText = styled.Text`
  color: ${(props) => props.theme.colors.text.primary};
`

export default function AboutScreen() {
  const theme = useTheme()
  return (
    <StyledSafeAreaView>
      <ScrollView>
        <StyledView>
        <View style={{ flex: 1, flexDirection: "row", borderStyle: "dashed", borderWidth: 5, justifyContent: "center", alignItems: "center", padding: 10, borderColor: theme.colors.text.primary }}>
            <BrandText style={{ color: "rgb(134 239 172)" }}>Help</BrandText>
            <BrandText style={{ color: "rgb(147 197 253)" }}>Chai</BrandText>
          </View>
        </StyledView>
        <TextContainerView>
          <StyledText style={{ fontSize: 15, textAlign: "justify" }}>
            This research leverages ICTs to bridge communication gaps on water
            supply and quality, benefiting local to national stakeholders.
            Developing countries face challenges in effectively communicating
            drinking water quality data for timely decision-making. By
            empowering youth (high school to university level) in understanding
            and utilizing ICTs for water supply and quality monitoring, we aim
            to ensure sustainable development in the sector, fostering ‘Drinking
            Water Security‘ and paving the way for future innovations and
            technologies
          </StyledText>
        </TextContainerView>
        <StyledView>
          <Button
            title="Please Checkout our Website for more information"
            style={{ color: "blue" }}
            onPress={() => Linking.openURL("https://helpchai.vercel.app/")}
          >
          </Button>
        </StyledView>
      </ScrollView>
    </StyledSafeAreaView>
  );
}

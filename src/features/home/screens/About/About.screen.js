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
import styled from "styled-components";
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

export default function AboutScreen() {
  return (
    <StyledSafeAreaView>
      <ScrollView>
        <StyledView>
          <View
            style={{
              flex: 1,
              height: 60,
              flexDirection: "row",
              textAlign: "center",
              justifyContent: "center",
              alignContent: "center",
            }}
          >
            <BrandText>About HelpChai</BrandText>
          </View>
        </StyledView>
        <StyledView>
          <Text style={{ fontSize: 20, textAlign: "justify" }}>
            This research leverages ICTs to bridge communication gaps on water
            supply and quality, benefiting local to national stakeholders.
            Developing countries face challenges in effectively communicating
            drinking water quality data for timely decision-making. By
            empowering youth (high school to university level) in understanding
            and utilizing ICTs for water supply and quality monitoring, we aim
            to ensure sustainable development in the sector, fostering ‘Drinking
            Water Security‘ and paving the way for future innovations and
            technologies
          </Text>
        </StyledView>
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

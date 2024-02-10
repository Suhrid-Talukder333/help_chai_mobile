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
import Ionicons from "react-native-vector-icons/Ionicons";

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
`;

export default function AboutScreen() {
  const theme = useTheme();
  return (
    <StyledSafeAreaView>
      <ScrollView>
        <StyledView>
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              borderStyle: "dashed",
              borderWidth: 5,
              justifyContent: "center",
              alignItems: "center",
              padding: 10,
              borderColor: theme.colors.text.primary,
            }}
          >
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
          ></Button>
        </StyledView>
        <StyledView>
          <View style={{ justifyContent: "center", alignItems: "center" }}>
            <StyledText style={{ fontSize: 20, fontWeight: "bold" }}>
              The Team
            </StyledText>
            <StyledText tyle={{ fontSize: 10 }}>
              Our diverse range of dedicated persons.
            </StyledText>
          </View>
        </StyledView>
        <StyledView>
          <View
            style={{
              flex: 1,
              height: 100,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" >
    <Path
      fill="#2e3436"
      d="M8 1a3 3 0 1 0 .002 6.002A3 3 0 0 0 8 1zM6.5 8A4.491 4.491 0 0 0 2 12.5v.5c0 1.11.89 2 2 2h8c1.11 0 2-.89 2-2v-.5C14 10.008 11.992 8 9.5 8zm0 0"
    />
  </Svg>
            <StyledText style={{ fontSize: 10 }}>Md. Saiful Islam</StyledText>
            <StyledText style={{ fontSize: 6 }}>Project Cordinator</StyledText>
          </View>
          <View
            style={{
              flex: 1,
              height: 100,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" >
    <Path
      fill="#2e3436"
      d="M8 1a3 3 0 1 0 .002 6.002A3 3 0 0 0 8 1zM6.5 8A4.491 4.491 0 0 0 2 12.5v.5c0 1.11.89 2 2 2h8c1.11 0 2-.89 2-2v-.5C14 10.008 11.992 8 9.5 8zm0 0"
    />
  </Svg>
            <StyledText style={{ fontSize: 10 }}>Najmus Sakib Khan</StyledText>
            <StyledText style={{ fontSize: 6 }}>Advisor</StyledText>
          </View>
        </StyledView>
        <StyledView>
          <View
            style={{
              flex: 1,
              height: 100,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" >
    <Path
      fill="#2e3436"
      d="M8 1a3 3 0 1 0 .002 6.002A3 3 0 0 0 8 1zM6.5 8A4.491 4.491 0 0 0 2 12.5v.5c0 1.11.89 2 2 2h8c1.11 0 2-.89 2-2v-.5C14 10.008 11.992 8 9.5 8zm0 0"
    />
  </Svg>
            <StyledText style={{ fontSize: 10 }}>
              Jaber Bin Abdul Bari
            </StyledText>
            <StyledText style={{ fontSize: 6 }}>Research Assistant</StyledText>
          </View>
          <View
            style={{
              flex: 1,
              height: 100,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" >
    <Path
      fill="#2e3436"
      d="M8 1a3 3 0 1 0 .002 6.002A3 3 0 0 0 8 1zM6.5 8A4.491 4.491 0 0 0 2 12.5v.5c0 1.11.89 2 2 2h8c1.11 0 2-.89 2-2v-.5C14 10.008 11.992 8 9.5 8zm0 0"
    />
  </Svg>
            <StyledText style={{ fontSize: 10 }}>Suhrid Talukder</StyledText>
            <StyledText style={{ fontSize: 6 }}>Research Assistant</StyledText>
          </View>
          <View
            style={{
              flex: 1,
              height: 100,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" >
    <Path
      fill="#2e3436"
      d="M8 1a3 3 0 1 0 .002 6.002A3 3 0 0 0 8 1zM6.5 8A4.491 4.491 0 0 0 2 12.5v.5c0 1.11.89 2 2 2h8c1.11 0 2-.89 2-2v-.5C14 10.008 11.992 8 9.5 8zm0 0"
    />
  </Svg>
            <StyledText style={{ fontSize: 10 }}>Sanjida Akter Nisa</StyledText>
            <StyledText style={{ fontSize: 6 }}>Research Assistant</StyledText>
          </View>
        </StyledView>
        <StyledView>
          <View
            style={{
              flex: 1,
              height: 100,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" >
    <Path
      fill="#2e3436"
      d="M8 1a3 3 0 1 0 .002 6.002A3 3 0 0 0 8 1zM6.5 8A4.491 4.491 0 0 0 2 12.5v.5c0 1.11.89 2 2 2h8c1.11 0 2-.89 2-2v-.5C14 10.008 11.992 8 9.5 8zm0 0"
    />
  </Svg>
            <StyledText style={{ fontSize: 10 }}>Khadiza Akter Riya</StyledText>
            <StyledText style={{ fontSize: 6 }}>Research Assistant</StyledText>
          </View>
          <View
            style={{
              flex: 1,
              height: 100,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" >
    <Path
      fill="#2e3436"
      d="M8 1a3 3 0 1 0 .002 6.002A3 3 0 0 0 8 1zM6.5 8A4.491 4.491 0 0 0 2 12.5v.5c0 1.11.89 2 2 2h8c1.11 0 2-.89 2-2v-.5C14 10.008 11.992 8 9.5 8zm0 0"
    />
  </Svg>
            <StyledText style={{ fontSize: 10 }}>Abdus Salam Shiblu</StyledText>
            <StyledText style={{ fontSize: 6 }}>Research Assistant</StyledText>
          </View>
          <View
            style={{
              flex: 1,
              height: 100,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" >
    <Path
      fill="#2e3436"
      d="M8 1a3 3 0 1 0 .002 6.002A3 3 0 0 0 8 1zM6.5 8A4.491 4.491 0 0 0 2 12.5v.5c0 1.11.89 2 2 2h8c1.11 0 2-.89 2-2v-.5C14 10.008 11.992 8 9.5 8zm0 0"
    />
  </Svg>
            <StyledText style={{ fontSize: 10 }}>Sunanda Dewan</StyledText>
            <StyledText style={{ fontSize: 6 }}>Research Assistant</StyledText>
          </View>
        </StyledView>

        <StyledView>
          <View
            style={{
              flex: 1,
              height: 100,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" >
    <Path
      fill="#2e3436"
      d="M8 1a3 3 0 1 0 .002 6.002A3 3 0 0 0 8 1zM6.5 8A4.491 4.491 0 0 0 2 12.5v.5c0 1.11.89 2 2 2h8c1.11 0 2-.89 2-2v-.5C14 10.008 11.992 8 9.5 8zm0 0"
    />
  </Svg>
            <StyledText style={{ fontSize: 10 }}>Md Maeen Uddin</StyledText>
            <StyledText style={{ fontSize: 6 }}>Research Intern</StyledText>
          </View>
          <View
            style={{
              flex: 1,
              height: 100,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" >
    <Path
      fill="#2e3436"
      d="M8 1a3 3 0 1 0 .002 6.002A3 3 0 0 0 8 1zM6.5 8A4.491 4.491 0 0 0 2 12.5v.5c0 1.11.89 2 2 2h8c1.11 0 2-.89 2-2v-.5C14 10.008 11.992 8 9.5 8zm0 0"
    />
  </Svg>
            <StyledText style={{ fontSize: 10 }}>
              Fatematunnesha Paye
            </StyledText>
            <StyledText style={{ fontSize: 6 }}>Research Intern</StyledText>
          </View>
          <View
            style={{
              flex: 1,
              height: 100,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" >
    <Path
      fill="#2e3436"
      d="M8 1a3 3 0 1 0 .002 6.002A3 3 0 0 0 8 1zM6.5 8A4.491 4.491 0 0 0 2 12.5v.5c0 1.11.89 2 2 2h8c1.11 0 2-.89 2-2v-.5C14 10.008 11.992 8 9.5 8zm0 0"
    />
  </Svg>
            <StyledText style={{ fontSize: 10 }}>Saira Sadia</StyledText>
            <StyledText style={{ fontSize: 6 }}>Research Intern</StyledText>
          </View>
        </StyledView>

        <StyledView>
          <View
            style={{
              flex: 1,
              height: 100,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" >
    <Path
      fill="#2e3436"
      d="M8 1a3 3 0 1 0 .002 6.002A3 3 0 0 0 8 1zM6.5 8A4.491 4.491 0 0 0 2 12.5v.5c0 1.11.89 2 2 2h8c1.11 0 2-.89 2-2v-.5C14 10.008 11.992 8 9.5 8zm0 0"
    />
  </Svg>
            <StyledText style={{ fontSize: 10 }}>Md. Saiful Islam</StyledText>
            <StyledText style={{ fontSize: 6 }}>Volunteer</StyledText>
          </View>
          <View
            style={{
              flex: 1,
              height: 100,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" >
    <Path
      fill="#2e3436"
      d="M8 1a3 3 0 1 0 .002 6.002A3 3 0 0 0 8 1zM6.5 8A4.491 4.491 0 0 0 2 12.5v.5c0 1.11.89 2 2 2h8c1.11 0 2-.89 2-2v-.5C14 10.008 11.992 8 9.5 8zm0 0"
    />
  </Svg>
            <StyledText style={{ fontSize: 10 }}>
              Muhammad Jamil Uddin
            </StyledText>
            <StyledText style={{ fontSize: 6 }}>Volunteer</StyledText>
          </View>
          <View
            style={{
              flex: 1,
              height: 100,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" >
    <Path
      fill="#2e3436"
      d="M8 1a3 3 0 1 0 .002 6.002A3 3 0 0 0 8 1zM6.5 8A4.491 4.491 0 0 0 2 12.5v.5c0 1.11.89 2 2 2h8c1.11 0 2-.89 2-2v-.5C14 10.008 11.992 8 9.5 8zm0 0"
    />
  </Svg>
            <StyledText style={{ fontSize: 10 }}>
              Md. Tanbir Mohiuddin
            </StyledText>
            <StyledText style={{ fontSize: 6 }}>Volunteer</StyledText>
          </View>
        </StyledView>

        <StyledView>
          <View
            style={{
              flex: 1,
              height: 100,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" >
    <Path
      fill="#2e3436"
      d="M8 1a3 3 0 1 0 .002 6.002A3 3 0 0 0 8 1zM6.5 8A4.491 4.491 0 0 0 2 12.5v.5c0 1.11.89 2 2 2h8c1.11 0 2-.89 2-2v-.5C14 10.008 11.992 8 9.5 8zm0 0"
    />
  </Svg>
            <StyledText style={{ fontSize: 10 }}>Abdul Ohab</StyledText>
            <StyledText style={{ fontSize: 6 }}>Volunteer</StyledText>
          </View>
          <View
            style={{
              flex: 1,
              height: 100,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" >
    <Path
      fill="#2e3436"
      d="M8 1a3 3 0 1 0 .002 6.002A3 3 0 0 0 8 1zM6.5 8A4.491 4.491 0 0 0 2 12.5v.5c0 1.11.89 2 2 2h8c1.11 0 2-.89 2-2v-.5C14 10.008 11.992 8 9.5 8zm0 0"
    />
  </Svg>
            <StyledText style={{ fontSize: 10 }}>Savatul Mahi</StyledText>
            <StyledText style={{ fontSize: 6 }}>Volunteer</StyledText>
          </View>
        </StyledView>
      </ScrollView>
    </StyledSafeAreaView>
  );
}

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
import CustomCarousel from "../../../../components/CustomCarousel";

const BrandText = styled.Text`
  font-size: 30px;
  font-weight: bold;
  color: ${(props) => props.theme.colors.text.primary};
`;

const StyledSafeAreaView = styled.SafeAreaView`
  height: 100%;
  width: 100%;
  background-color: ${(props) => props.theme.colors.bg.top};
`;

const StyledView = styled.View`
  display: flex;
  flex-direction: row;
  padding: 20px;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const TextContainerView = styled.View`
  background-color: ${(props) => props.theme.colors.textbg.primary};
  padding: 20px;
  border: 1px solid ${(props) => props.theme.colors.bg.secondary};
  border-radius: 10px;
`;

const LogoView = styled.View`
  position: absolute;
  flex: 1;
  background-color: ${(props) => props.theme.colors.bg.top};
  justify-content: center;
  align-items: center;
  left: -10px;
  right: 0;
  height: 300px;
  width: 100%;
  z-index: -1;
`;

const StyledScrollView = styled.ScrollView``;

const ContainerView = styled.View`
  margin-top: 250px;
  padding: 15px;
  background-color: ${(props) => props.theme.colors.bg.primary};
`;
const StyledText = styled.Text`
  color: ${(props) => props.theme.colors.text.primary};
`;

export default function HomeScreen() {
  return (
    <StyledSafeAreaView>
      <StyledScrollView>
        <LogoView>
          <Image
            style={{ marginTop: -60, width: 1000, height: 300 }}
            source={require("./img/HelpChai.gif")}
          />
        </LogoView>
        <ContainerView
          style={{ borderTopLeftRadius: 50, borderTopRightRadius: 50 }}
        >
          <StyledView>
            <BrandText style={{ color: "rgb(134 239 172)" }}>Help</BrandText>
            <BrandText style={{ color: "rgb(147 197 253)" }}>Chai</BrandText>
          </StyledView>
          <StyledView>
            <TextContainerView>
              <StyledText style={{ fontSize: 16, textAlign: "center" }}>
                This platform is designed to calculate information on water
                quality
                {/* via{" "} */}
                {/* <StyledText style={{ fontWeight: "bold" }}>
                  ‘Capacity Building of Youth to Improve Drinking Water Security
                  and Climate Resilience through Youth-led Participatory Sensing
                  (YPS) Model in Hatiya Island, Noakhali.‘
                </StyledText>{" "} */}
                {/* project. */}
              </StyledText>
              <StyledText
                style={{ color: "blue", textAlign: "center" }}
                onPress={() => Linking.openURL("https://helpchai.vercel.app/")}
              >
                Learn more
              </StyledText>
            </TextContainerView>
          </StyledView>
          <StyledView
            style={{
              flex: 1,
              textAlign: "center",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "rgb(37 137 254)",
            }}
          >
            <StyledText
              style={{ fontSize: 15, fontWeight: "bold", color: "white" }}
            >
              Empowering Youth{" "}
            </StyledText>
            <StyledText
              style={{ fontSize: 15, fontWeight: "bold", color: "white" }}
            >
              Ensuring Water Security
            </StyledText>
          </StyledView>
          <StyledView>
            <CustomCarousel />
          </StyledView>
          <StyledView>
            <View>
              <StyledText style={{ fontSize: 20, fontWeight: "bold" }}>
                Supported By
              </StyledText>
            </View>
          </StyledView>
          <View
            style={{
              flexDirection: "row",
              flex: 1,
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Svg
              style={{ flex: 1 }}
              xmlns="http://www.w3.org/2000/svg"
              width={50}
              height={80}
              fill="none"
            >
              <G clipPath="url(#a)">
                <Path
                  fill="#636466"
                  d="M41.04 80.023H2.066V82.5h38.973v-2.477ZM6.211 66.135H2.935v11.97H6.21v-11.97ZM23.613 73.907c0 3.162-2.495 4.508-6.473 4.508-1.427 0-3.58-.271-4.99-1.45-.845-.724-1.172-1.696-1.212-2.89v-7.94h3.332v7.764c0 1.665 1.268 2.39 2.814 2.39 2.256 0 3.173-.82 3.173-2.278v-7.884h3.356v7.78ZM31.744 72.832h4.17c1.187 0 2.36.407 2.36 1.442 0 1.226-.91 1.744-2.52 1.744h-4.01v-3.186Zm-3.164 5.272h6.664c3.22 0 4.058-.414 4.966-1.083.83-.613 1.34-1.513 1.34-2.469 0-1.186-.495-2.349-2.416-2.898.646-.24 1.921-.725 1.921-2.445 0-1.234-.98-3.074-4.838-3.074H28.58v11.97Zm3.164-9.906h3.763c1.483 0 2.4.302 2.4 1.282 0 .94-1.029 1.33-2.32 1.33h-3.843v-2.612Z"
                />
                <Path
                  fill="#2E3192"
                  d="M19.021 48.297.455 36.782v11.355l18.566 11.524V48.297Z"
                />
                <Path
                  fill="#F7941D"
                  d="M40.848 30.22 22.29 44.156v11.722l18.558-13.514V30.22Z"
                />
                <Path
                  fill="#812990"
                  d="M12.867 2.905C11.05 1.08 9.615.42 9.615.42v.677s2.894 2.492 2.894 7.032c0 7.565-5.86 10.448-5.86 20.004 0 13.626 13.656 17.241 13.656 17.241v-23.54c.104-9.859-4.416-15.88-7.438-18.93ZM15.81 40.81s-7.167-2.047-7.167-12.264c0-11.881 5.804-11.204 5.214-19.08 0 0 2.798 2.022 2.798 5.757 0 3.72-3.157 4.93-3.157 14.653 0 9.732 2.312 10.934 2.312 10.934Z"
                />
              </G>
              <Defs>
                <ClipPath id="a">
                  <Path fill="#fff" d="M0 0h42v82H0z" />
                </ClipPath>
              </Defs>
            </Svg>
            <Image source={require("./img/ebssaySwedendhaka.png")} />
            <Image source={require("./img/icccad_logo.png")} />
          </View>
          <StyledView>
            <View style={{ justifyContent: "center", alignItems: "center" }}>
              <StyledText style={{ fontSize: 20, fontWeight: "bold" }}>
                Organizing Partner
              </StyledText>
            </View>
          </StyledView>
          <StyledView>
            <Image source={require("./img/nstu_logo.png")} />
          </StyledView>
          <StyledView>
            <StyledText style={{ textAlign: "center" }}>
              Department of Oceanography
            </StyledText>
            <StyledText style={{ textAlign: "center" }}>
              Noakhali Science and Technology University
            </StyledText>
          </StyledView>
          {/* <StyledView style={{ backgroundColor: "#89ABE3FF" }}>
            <StyledText style={{ textAlign: "center" }}>
              Youth-led Water Security and Climate Resilience in Hatiya Island,
              Noakhali
            </StyledText>
            <Image source={require("./img/team.png")} />
          </StyledView> */}
          <StyledView style={{ height: 100 }} />
        </ContainerView>
      </StyledScrollView>
    </StyledSafeAreaView>
  );
}

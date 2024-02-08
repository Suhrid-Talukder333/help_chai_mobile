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
  font-size: 40px;
  font-weight: bold;
`;

const StyledSafeAreaView = styled.SafeAreaView`
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

const StyledView = styled.View`
  display: flex;
  flex-direction: row;
  background-color: ${(props) => props.theme.colors.bg.primary};
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

export default function HomeScreen() {
  return (
    <StyledSafeAreaView>
      <ScrollView>
        <StyledView>
          <View style={{ flex: 1, height: 60, flexDirection: "row" }}>
            <BrandText style={{ color: "rgb(134 239 172)" }}>Help</BrandText>
            <BrandText style={{ color: "rgb(147 197 253)" }}>Chai</BrandText>
          </View>
          <TextContainerView>
            <Text style={{ fontSize: 15 }}>
              This platform is designed to calculate information on water
              quality via{" "}
              <Text style={{ fontWeight: "bold" }}>
                ‘Capacity Building of Youth to Improve Drinking Water Security
                and Climate Resilience through Youth-led Participatory Sensing
                (YPS) Model in Hatiya Island, Noakhali.‘
              </Text>{" "}
              project.
            </Text>
            <Text
              style={{ color: "blue" }}
              onPress={() => Linking.openURL("https://helpchai.vercel.app/")}
            >
              Learn more
            </Text>
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
          <Text style={{ fontSize: 15, fontWeight: "bold", color: "white" }}>
            Empowering Youth{" "}
          </Text>
          <Text style={{ fontSize: 15, fontWeight: "bold", color: "white" }}>
            Ensuring Water Security
          </Text>
        </StyledView>
        <StyledView>
          <View>
            <Text style={{ fontSize: 20, fontWeight: "bold" }}>
              Supported By
            </Text>
          </View>
        </StyledView>
        <StyledView>
          <Svg
            xmlns="http://www.w3.org/2000/svg"
            width={48}
            height={100}
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
        </StyledView>
        <StyledView>
          <Image
            style={{ width: 150, height: 100 }}
            source={require("./img/ebssaySwedendhaka.png")}
          />
        </StyledView>
        <StyledView>
          <Image source={require("./img/icccad_logo.png")} />
        </StyledView>
        <StyledView>
          <View>
            <Text style={{ fontSize: 20, fontWeight: "bold" }}>
              Organizing Partner
            </Text>
          </View>
        </StyledView>
        <StyledView>
          <Image source={require("./img/nstu_logo.png")} />
        </StyledView>
        <StyledView>
          <Text>Department of Oceanography</Text>
          <Text>Noakhali Science and Technology University</Text>
        </StyledView>
        <StyledView style={{ backgroundColor: "#89ABE3FF" }}>
          <Image source={require("./img/team.png")} />
          <Text style={{textAlign: "center"}}>
            Youth-led Water Security and Climate Resilience in Hatiya Island,
            Noakhali
          </Text>
        </StyledView>
      </ScrollView>
    </StyledSafeAreaView>
  );
}

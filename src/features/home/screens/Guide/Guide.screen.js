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
  font-size: 25px;
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
  padding: 5px;
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

export default function GuideScreen() {
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
            <BrandText>Navigating Water Quality</BrandText>
          </View>
        </StyledView>
        <StyledView>
          <TextContainerView>
            <Text style={{ fontSize: 15 }}>
              Discover our commitment to water safety. We follow the Water
              Quality Index guidelines, assessing key parameters like pH,
              dissolved oxygen, and turbidity. Unveil the secrets behind our
              water quality evaluation for an informed perspective on your water
              safety.
            </Text>
          </TextContainerView>
        </StyledView>
        <StyledSubView>
          <View
            style={{
              flex: 1,
              height: 40,
              flexDirection: "row",
              textAlign: "start",
              justifyContent: "center",
              alignContent: "center",
              paddingLeft: 10,
              paddingTop: 20,
            }}
          >
            <BiggerText>pH (Potential of Hydrogen)</BiggerText>
          </View>
        </StyledSubView>
        <StyledView>
          <Image
            style={{ width: 250, height: 100 }}
            source={require("./img/phScale.jpg")}
          />
        </StyledView>
        <StyledView>
          <TextContainerView>
            <Text style={{ fontSize: 15 }}>
              pH measures the acidity or alkalinity of water. Ideal levels range
              from 6.5 to 8.5. The safe range for drinking water pH levels is
              between 6.5 and 8.5. This range is considered optimal for human
              consumption and ensures that the water is free from harmful
              contaminants. Drinking water with a pH outside this range may
              affect its taste, quality, and safety.
            </Text>
          </TextContainerView>
        </StyledView>
        <StyledSubView>
          <View
            style={{
              flex: 1,
              height: 40,
              flexDirection: "row",
              textAlign: "start",
              justifyContent: "center",
              alignContent: "center",
              paddingLeft: 10,
              paddingTop: 20,
            }}
          >
            <BiggerText>Turbidity</BiggerText>
          </View>
        </StyledSubView>
        <StyledView>
          <Image
            style={{ width: 250, height: 100 }}
            source={require("./img/turbidWater.jpg")}
          />
        </StyledView>
        <StyledView>
          <TextContainerView>
            <Text style={{ fontSize: 15 }}>
              Turbidity measures water clarity. Clear water allows light
              penetration for aquatic plants. our drinking water is almost
              always clear (very low turbidity). Other water, such as the creek
              behind your house after a rainstorm, is likely to be highly
              turbid—brown with floating sediment. Turbidity is the clarity of
              water and it is an important factor in water quality
            </Text>
          </TextContainerView>
        </StyledView>
        <StyledSubView>
          <View
            style={{
              flex: 1,
              height: 40,
              flexDirection: "row",
              textAlign: "start",
              justifyContent: "center",
              alignContent: "center",
              paddingLeft: 10,
              paddingTop: 20,
            }}
          >
            <BiggerText>Conductivity/Electrical Conductivity (EC)</BiggerText>
          </View>
        </StyledSubView>
        <StyledView>
          <Image
            style={{ width: 250, height: 150 }}
            source={require("./img/waterElectricConductivity.png")}
          />
        </StyledView>
        <StyledView>
          <TextContainerView>
            <Text style={{ fontSize: 15 }}>
              EC indicates the ability of water to conduct an electric current,
              related to dissolved ions. Electrical conductivity (EC) is a
              measurement of water ability to conduct electricity. EC is related
              to water temperature and the total concentration, mobility,
              valence and relative concentration of ions. Generally speaking,
              higher EC means more electrolytes in the water.
            </Text>
          </TextContainerView>
        </StyledView>
        <StyledSubView>
          <View
            style={{
              flex: 1,
              height: 40,
              flexDirection: "row",
              textAlign: "start",
              justifyContent: "center",
              alignContent: "center",
              paddingLeft: 10,
              paddingTop: 20,
            }}
          >
            <BiggerText>Total Dissolved Solids (TDS)</BiggerText>
          </View>
        </StyledSubView>
        <StyledView>
          <Image
            style={{ width: 250, height: 150 }}
            source={require("./img/tds.png")}
          />
        </StyledView>
        <StyledView>
          <TextContainerView>
            <Text style={{ fontSize: 15 }}>
              TDS measures the total amount of dissolved substances, including
              minerals. Total dissolved solids (TDS) is the total amount of
              solids dissolved in the water, including soluble hydrogen
              carbonate ions, chloride salts, sulphates, calcium, magnesium,
              sodium, potassium, volatile solids and non-volatile solids. Its
              concentration will affect the taste of drinking water.
            </Text>
          </TextContainerView>
        </StyledView>
        <StyledSubView>
          <View
            style={{
              flex: 1,
              height: 40,
              flexDirection: "row",
              textAlign: "start",
              justifyContent: "center",
              alignContent: "center",
              paddingLeft: 10,
              paddingTop: 20,
            }}
          >
            <BiggerText>Total Coliform and E. coli Bacteria</BiggerText>
          </View>
        </StyledSubView>
        <StyledView>
          <Image
            style={{ width: 250, height: 150 }}
            source={require("./img/bacteria.jpg")}
          />
        </StyledView>
        <StyledView>
          <TextContainerView>
            <Text style={{ fontSize: 15 }}>
              Presence of coliform bacteria indicates contamination from fecal
              matter. Total coliform counts give a general indication of the
              sanitary condition of a water supply. Total coliforms include
              bacteria that are found in the soil, in water that has been
              influenced by surface water, and in human or animal waste.
            </Text>
          </TextContainerView>
        </StyledView>
        <StyledView>
          <View
            style={{
              flex: 1,
              height: 30,
              flexDirection: "row",
              textAlign: "center",
              justifyContent: "center",
              alignContent: "center",
            }}
          >
            <BrandText>Conclusion</BrandText>
          </View>
        </StyledView>
        <StyledView>
          <TextContainerView>
            <Text style={{ fontSize: 15 }}>
              Remember, the WQI combines these parameters to provide a
              comprehensive assessment of water quality. Each parameter
              contribution to the index may vary based on local standards and
              environmental conditions.
            </Text>
          </TextContainerView>
        </StyledView>
      </ScrollView>
    </StyledSafeAreaView>
  );
}

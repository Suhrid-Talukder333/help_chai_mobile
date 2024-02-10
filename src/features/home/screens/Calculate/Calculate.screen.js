import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  TextInput,
  Text,
  View,
  ScrollView,
  Button,
  Alert,
  TouchableOpacity,
  Image,
} from "react-native";
import styled, { useTheme } from "styled-components";
import Svg, { Path, G } from "react-native-svg";
import {
  CalculateWaterBD,
  CalculateWaterWHO,
} from "../../../../utils/constants";
import Result from "./result";
import { values } from "lodash";
import { Divider } from "react-native-paper";
import Ionicons from "react-native-vector-icons/Ionicons";

const BigText = styled.Text`
  text-align: center;
  font-size: 20px;
  font-weight: bold;
  color: ${(props) => props.theme.colors.text.primary};
`;

const StyledSafeAreaView = styled.SafeAreaView`
  height: 100%;
  width: 100%;
  background-color: ${(props) => props.theme.colors.bg.primary};
`;
const StyledText = styled.Text`
  color: ${(props) => props.theme.colors.text.primary};
`;

const StyledView = styled.View`
  display: flex;
  flex-direction: row;
  padding: 5px;
  padding-left: 20px;
  flex-wrap: wrap;
  align-items: center;
  width: 100%;
`;

const ButtonView = styled.View`
  display: flex;
  flex-direction: row;
  background-color: ${(props) => props.theme.colors.bg.primary};
  padding: 20px;
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

const StyledTextInput = styled.TextInput`
  color: ${(props) => props.theme.colors.text.primary};
  height: 45px;
  margin: 12px;
  border-width: 1px;
  padding: 10px;
  border-radius: 5px;
  background-color: ${(props) => props.theme.colors.bg.secondary};
`;

const StyledInfoView = styled.View`
  height: 60px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  background-color: ${(props) => props.theme.colors.textbg.primary};
`;

const initialValues = {
  ph: "",
  ec: "",
  tds: "",
  th: "",
  cl: "",
  s: "",
  fe: "",
  arsenic: "",
};

const CalculateScreen = () => {
  const [formValues, onChangeFormValues] = React.useState(initialValues);
  const [whoResult, setWhoResult] = React.useState(null);
  const [bdResult, setBdResult] = React.useState(null);
  const [disabled, setDisabled] = React.useState(true);
  const scrollView = React.useRef(null);

  const checkValidity = () => {
    if (
      formValues["ph"] == "" ||
      formValues["ec"] == "" ||
      formValues["tds"] == "" ||
      formValues["th"] == "" ||
      formValues["cl"] == "" ||
      formValues["s"] == "" ||
      formValues["fe"] == "" ||
      formValues["arsenic"] == ""
    ) {
      setDisabled(true);
    } else {
      setDisabled(false);
    }
  };

  const onChange = (index, value) => {
    onChangeFormValues({
      ...formValues,
      [index]: value ? value : "",
    });
  };

  const calculate = () => {
    const bd = CalculateWaterBD(formValues);
    const who = CalculateWaterWHO(formValues);
    setBdResult(bd);
    setWhoResult(who);
    scrollView.current.scrollToEnd();
  };

  const reset = () => {
    onChangeFormValues(initialValues);
    setWhoResult(null);
    setBdResult(null);
  };

  React.useEffect(() => {
    checkValidity();
  }, [formValues]);

  return (
    <StyledSafeAreaView>
      <ScrollView ref={scrollView}>
        <StyledInfoView>
          <StyledText style={{ fontSize: 14 }}>
            Please Read our Guide to learn more about WQI
          </StyledText>
        </StyledInfoView>
        <StyledView style={{ justifyContent: "center" }}>
          <BigText>Water Quality Test</BigText>
        </StyledView>
        <StyledView style={{ paddingBottom: 0 }}>
          <StyledText>pH value</StyledText>
        </StyledView>
        <StyledTextInput
          onChangeText={(value) => onChange("ph", value)}
          keyboardType="numeric"
          value={formValues["ph"].toString()}
          placeholder="Type ph value"
        />
        <StyledView style={{ paddingBottom: 0 }}>
          <StyledText>Electric Conductivity (EC)</StyledText>
        </StyledView>
        <StyledTextInput
          onChangeText={(value) => onChange("ec", value)}
          keyboardType="numeric"
          value={formValues["ec"].toString()}
          placeholder="Type ec value"
        />
        <StyledView style={{ paddingBottom: 0 }}>
          <StyledText>Total Dissolved Solids (TDS)</StyledText>
        </StyledView>
        <StyledTextInput
          onChangeText={(value) => onChange("tds", value)}
          keyboardType="numeric"
          value={formValues["tds"].toString()}
          defaultValue={""}
          placeholder="Type TDS value"
        />
        <StyledView style={{ paddingBottom: 0 }}>
          <StyledText>Total Hardness (TH)</StyledText>
        </StyledView>
        <StyledTextInput
          onChangeText={(value) => onChange("th", value)}
          keyboardType="numeric"
          value={formValues["th"].toString()}
          placeholder="Type TH value"
        />
        <StyledView style={{ paddingBottom: 0 }}>
          <StyledText>Chloride Ion Concentration (Cl-)</StyledText>
        </StyledView>
        <StyledTextInput
          onChangeText={(value) => onChange("cl", value)}
          keyboardType="numeric"
          value={formValues["cl"].toString()}
          placeholder="Type Cl- value"
        />
        <StyledView style={{ paddingBottom: 0 }}>
          <StyledText>Sulfate Ion Concentration (SO4)</StyledText>
        </StyledView>
        <StyledTextInput
          onChangeText={(value) => onChange("s", value)}
          keyboardType="numeric"
          value={formValues["s"].toString()}
          placeholder="Type SO4 value"
        />
        <StyledView style={{ paddingBottom: 0 }}>
          <StyledText>Iron Concentration (Fe)</StyledText>
        </StyledView>
        <StyledTextInput
          onChangeText={(value) => onChange("fe", value)}
          keyboardType="numeric"
          value={formValues["fe"].toString()}
          placeholder="Type Fe value"
        />
        <StyledView style={{ paddingBottom: 0 }}>
          <StyledText>Arsenic</StyledText>
        </StyledView>
        <StyledTextInput
          onChangeText={(value) => onChange("arsenic", value)}
          keyboardType="numeric"
          value={formValues["arsenic"].toString()}
          placeholder="Type Arsenic value"
        />
        <ButtonView style={{ justifyContent: "space-evenly" }}>
          <TouchableOpacity
            style={{
              borderRadius: 10,
              height: 40,
              width: 100,
              backgroundColor: "blue",
              justifyContent: "center",
              alignItems: "center",
              opacity: disabled ? 0.5 : 1,
            }}
            disabled={disabled}
            onPress={() => {
              calculate();
            }}
          >
            <Ionicons name={"rocket"} size={15} color="white" />
            <StyledText style={{ fontSize: 15, fontWeight: "bold" }}>
              Calculate
            </StyledText>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              borderRadius: 10,
              height: 40,
              width: 100,
              backgroundColor: "red",
              justifyContent: "center",
              alignItems: "center",
            }}
            onPress={() => {
              reset();
            }}
          >
            <Ionicons name={"refresh"} size={15} color="white" />
            <StyledText style={{ fontSize: 15, fontWeight: "bold" }}>
              Reset
            </StyledText>
          </TouchableOpacity>
        </ButtonView>
        {bdResult && <Result result={bdResult} standard={"BD"} />}
        {whoResult && <Result result={whoResult} standard={"WHO"} />}
      </ScrollView>
      <StyledView style={{ height: 70 }} />
    </StyledSafeAreaView>
  );
};

export default CalculateScreen;

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
  Image,
} from "react-native";
import styled from "styled-components";
import Svg, { Path, G } from "react-native-svg";
import {
  CalculateWaterBD,
  CalculateWaterWHO,
} from "../../../../utils/constants";
import Result from "./result";

const BigText = styled.Text`
  text-align: center;
  font-size: 20px;
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
  height: 45px;
  margin: 12px;
  border-width: 1px;
  padding: 10px;
  border-radius: 5px;
`;

const initialValues = {
  "ph": "",
  "ec": "",
  "tds": "",
  "th": "",
  "cl": "",
  "s": "",
  "fe": "",
  "arsenic": "",
};

const CalculateScreen = () => {
  const [formValues, onChangeFormValues] = React.useState(initialValues);
  const [whoResult, setWhoResult] = React.useState(null);
  const [bdResult, setBdResult] = React.useState(null);
  const [disabled, setDisabled] = React.useState(true);

  const checkValidity = () => {
    console.log(formValues)
    if (
        formValues['ph'] == "" ||
        formValues['ec'] == "" ||
        formValues['tds'] == "" ||
        formValues['th'] == "" || 
        formValues['cl'] == "" ||
        formValues['s'] == "" ||
        formValues['fe'] == "" ||
        formValues['arsenic'] == "" 
    ) {
      setDisabled(true);
    } else {
      setDisabled(false);
    }
  };

  const onChange = (index, value) => {
    console.log(value, "value")
      onChangeFormValues({
        ...formValues,
        [index]: value ? parseFloat(value) : "",
      });
    };

  const calculate = () => {
    console.log(formValues)
    const bd = CalculateWaterBD(formValues)
    const who = CalculateWaterWHO(formValues)
    setBdResult(bd)
    setWhoResult(who)
  };

  const reset = () => {
    onChangeFormValues(initialValues);
    setWhoResult(null);
    setBdResult(null);
    console.log(formValues)
  }

  React.useEffect(() => {
    checkValidity();
  }, [formValues]);

  
  return (
    <StyledSafeAreaView>
      <ScrollView>
        <StyledView style={{ justifyContent: "center" }}>
          <BigText>Water Quality Test</BigText>
        </StyledView>
        <StyledView style={{ paddingBottom: 0 }}>
          <Text>pH value</Text>
        </StyledView>
        <StyledTextInput
          onChangeText={(value) => onChange("ph", value)}
          keyboardType="numeric"
          value={formValues["ph"].toString()}
          placeholder="Type ph value"
        />
        <StyledView style={{ paddingBottom: 0 }}>
          <Text>Electric Conductivity (EC)</Text>
        </StyledView>
        <StyledTextInput
          onChangeText={(value) => onChange("ec", value)}
          keyboardType="numeric"
          value={formValues["ec"].toString()}
          placeholder="Type ec value"
        />
        <StyledView style={{ paddingBottom: 0 }}>
          <Text>Total Dissolved Solids (TDS)</Text>
        </StyledView>
        <StyledTextInput
          onChangeText={(value) => onChange("tds", value)}
          keyboardType="numeric"
          value={formValues["tds"].toString()}
          defaultValue={""}
          placeholder="Type TDS value"
        />
        <StyledView style={{ paddingBottom: 0 }}>
          <Text>Total Hardness (TH)</Text>
        </StyledView>
        <StyledTextInput
          onChangeText={(value) => onChange("th", value)}
          keyboardType="numeric"
          value={formValues["th"].toString()}
          placeholder="Type TH value"
        />
        <StyledView style={{ paddingBottom: 0 }}>
          <Text>Chloride Ion Concentration (Cl-)</Text>
        </StyledView>
        <StyledTextInput
          onChangeText={(value) => onChange("cl", value)}
          keyboardType="numeric"
          value={formValues["cl"].toString()}
          placeholder="Type Cl- value"
        />
        <StyledView style={{ paddingBottom: 0 }}>
          <Text>Sulfate Ion Concentration (SO4)</Text>
        </StyledView>
        <StyledTextInput
          onChangeText={(value) => onChange("s", value)}
          keyboardType="numeric"
          value={formValues["s"].toString()}
          placeholder="Type SO4 value"
        />
        <StyledView style={{ paddingBottom: 0 }}>
          <Text>Iron Concentration (Fe)</Text>
        </StyledView>
        <StyledTextInput
          onChangeText={(value) => onChange("fe", value)}
          keyboardType="numeric"
          value={formValues["fe"].toString()}
          placeholder="Type Fe value"
        />
        <StyledView style={{ paddingBottom: 0 }}>
          <Text>Arsenic</Text>
        </StyledView>
        <StyledTextInput
          onChangeText={(value) => onChange("arsenic", value)}
          keyboardType="numeric"
          value={formValues["arsenic"].toString()}
          placeholder="Type Arsenic value"
        />
        <ButtonView style={{ justifyContent: "space-evenly" }}>
          <Button
            style={{ borderRadius: 10 }}
            disabled={disabled}
            title="Calculate"
            onPress={() => {
              calculate()
            }}
          />
          <Button title="  Reset  " color={"red"} onPress={() => {reset()}} />
        </ButtonView>
        {
            bdResult  && <Result result={bdResult} standard={"BD"} />
        }
        {
            whoResult  && <Result result={whoResult} standard={"WHO"} />
        }
      </ScrollView>
    </StyledSafeAreaView>
  );
};

export default CalculateScreen;

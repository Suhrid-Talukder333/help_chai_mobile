import React from "react";
import {
  Text,
  Image,
} from "react-native";
import styled, { useTheme } from "styled-components";

const BigText = styled.Text`
  text-align: center;
  font-size: 10px;
  font-weight: bold;
  color: ${(props) => props.theme.colors.text.primary};
`;

const StyledSafeAreaView = styled.SafeAreaView`
  background-color: ${(props) => props.theme.colors.bg.primary};
  padding: 10px;
`;
const StyledText = styled.Text`
  color: ${(props) => props.theme.colors.text.primary};
`

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


const Result = ({result, standard}) => {
  const theme = useTheme()
  return (
    <StyledSafeAreaView>
      <StyledView style={{ justifyContent: "center" }}>
        <BigText>{standard} Standard</BigText>
      </StyledView>
      <StyledView style={{borderStyle: "solid", borderWidth: .5, borderColor: theme.colors.text.primary, borderRadius: 10 }}>
        <StyledView style={{ justifyContent: "center" }}>
            <Image
            style={{ width: 100, height: 100 }}
            source={result.img_url}
            />
        </StyledView>
        <StyledView style={{ justifyContent: "center" }}>
            <StyledText style={{textAlign: "center"}}>{result.value}</StyledText>
        </StyledView>
        <StyledView style={{ justifyContent: "center" }}>
            <StyledText style={{textAlign: "center", fontWeight: "bold"}}>{result.desc[0]}</StyledText>
        </StyledView>
        <StyledView style={{ justifyContent: "center" }}>
            <StyledText style={{textAlign: "center"}}>{result.desc[1]}</StyledText>
        </StyledView>
      </StyledView>
    </StyledSafeAreaView>
  );
};

export default Result;

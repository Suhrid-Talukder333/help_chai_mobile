import * as React from "react";
import { Dimensions, Text, View, ImageBackground, Image } from "react-native";
import Carousel from "react-native-reanimated-carousel";
import { carouselItems } from "../utils/constants";
import { useTheme, styled } from "styled-components";
const StyledText = styled.Text`
  color: ${(props) => props.theme.colors.text.primary};
`;

export default function CustomCarousel(props) {
  const width = Dimensions.get("window").width - 20;
  const theme = useTheme();
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Carousel
        loop
        width={width}
        height={width}
        autoPlay={true}
        data={carouselItems}
        scrollAnimationDuration={3000}
        renderItem={({ item, index, animationValue }) => (
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
              padding: 10,
            }}
          >
            <View
              style={{
                flex: 1,
                justifyContent: "space-around",
                alignItems: "center",
                borderColor: theme.colors.bg.secondary,
                borderWidth: 2,
                padding: 20,
                borderRadius: 15,
                backgroundColor: theme.colors.bg.secondary,
              }}
            >
              <Image style={{ width: 300, height: 200, borderRadius: 20 }} source={item.img} />
              <StyledText
                style={{
                  textAlign: "center",
                  fontSize: 10,
                  paddingTop: 10,
                }}
              >
                {item.ref}
              </StyledText>
              <StyledText
                style={{
                  textAlign: "center",
                  fontWeight: "bold",
                  fontSize: 15,
                  paddingTop: 10,
                  borderWidth: 1,
                  borderRadius: 15,
                  padding: 10,
                  borderColor: theme.colors.bg.top,
                }}
              >
                {item.text}
              </StyledText>
            </View>
          </View>
        )}
      />
    </View>
  );
}

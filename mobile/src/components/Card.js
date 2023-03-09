import { Dimensions, StyleSheet, View } from "react-native";
import React from "react";
import {
  Layout,
  Button,
  Text,
  Section,
  SectionContent,
  useTheme,
  themeColor,
} from "react-native-rapi-ui";
import { TouchableOpacity } from "react-native";

const WIDTH = Dimensions.get("window").width;
const HEIGHT = Dimensions.get("window").height;
const Card = ({ primaryText, secondaryText, onPress }) => {
  const { isDarkmode, setTheme } = useTheme();

  return (
    <View>
      <TouchableOpacity onPress={onPress}>
        <Section
          style={{
            height: Dimensions.get("window").height * 0.2,
            width: Dimensions.get("window").width * 0.8,
            shadowColor: themeColor.black100,
            shadowOffset: 0.6,
            shadowOpacity: 0.5,
            elevation: 1.5,
            alignContent: "center",
            justifyContent: "center",
          }}
        >
          <SectionContent>
            <Text
              fontWeight="bold"
              style={{ fontSize: 20, textAlign: "center" }}
            >
              {primaryText}
            </Text>
            <Text style={{ fontSize: 15, textAlign: "center" }}>
              {secondaryText}
            </Text>
          </SectionContent>
        </Section>
      </TouchableOpacity>
    </View>
  );
};

export default Card;

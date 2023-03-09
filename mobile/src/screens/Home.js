import React from "react";
import { Dimensions, TouchableOpacity } from "react-native";
import { View, Linking } from "react-native";
import {
  Layout,
  Button,
  Text,
  Section,
  SectionContent,
  useTheme,
  themeColor,
} from "react-native-rapi-ui";
import Card from "../components/Card";
import Header from "../components/Header";

export default function ({ navigation }) {
  const { isDarkmode, setTheme } = useTheme();
  return (
    <Layout>
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          marginHorizontal: 20,
        }}
      >
        <View
          style={{
            flex: 1,
            justifyContent: "space-evenly",
          }}
        >
          <Card
            onPress={() => {
              navigation.navigate("LocalServer");
            }}
            primaryText={"Spin Up Local Web Server"}
            secondaryText="Address will look like http://localhost:port"
          />
          <Card
            primaryText={"Serve over the internet"}
            secondaryText="Receive requests across the internet"
          />
        </View>
      </View>
    </Layout>
  );
}

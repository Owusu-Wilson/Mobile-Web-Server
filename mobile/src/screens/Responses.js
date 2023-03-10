import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { View } from "react-native";
import { Layout, Section, Text } from "react-native-rapi-ui";
import Card from "../components/Card";

export default function Responses({ navigation }) {
  return (
    <Layout>
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text>View all past responses</Text>
        <View style={{ padding: 20, justifyContent: "space-evenly" }}>
          <Card
            primaryText="ML COnference Questions"
            secondaryText="06-03-2023"
          />
          <Card primaryText="Final Years Hot Seat" secondaryText="26-01-2003" />
        </View>
      </View>
    </Layout>
  );
}

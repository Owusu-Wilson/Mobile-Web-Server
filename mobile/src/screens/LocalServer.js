import {
  Alert,
  Dimensions,
  Pressable,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import {
  Section,
  SectionContent,
  themeColor,
  Text,
  Button,
  Layout,
  useTheme,
} from "react-native-rapi-ui";
import QRCode from "react-native-qrcode-svg";
import * as Network from "expo-network";
import publicIP from "react-native-public-ip";
import { Ionicons } from "@expo/vector-icons";

const LocalServer = ({ navigation }) => {
  const { isDarkmode, setTheme } = useTheme();

  const IPAddr = "0.0.0.0";
  function startServer() {
    Alert.alert((title = "Info"), (message = `Server Started on ${IPAddr}`));
  }
  async function getIP() {
    publicIP()
      .then((ip) => {
        alert(ip);
        // '47.122.71.234'
      })
      .catch((error) => {
        console.log(error);
        // 'Unable to get IP address.'
      });
  }
  const [isServerUp, setIsServerUp] = useState(false);
  const URL = "http://localhost:8080";
  return (
    <Layout>
      <Text style={styles.largeText}>Server is running on</Text>
      <Section
        style={{
          justifyContent: "center",
          alignItems: "center",
          alignSelf: "center",
          width: Dimensions.get("window").width * 0.8,
        }}
      >
        <SectionContent>
          <Text>{URL}</Text>
          {/* <Text>{currentIP}</Text> */}
        </SectionContent>
      </Section>
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          padding: 20,
          justifyContent: "space-between",
        }}
      >
        <Section style={styles.left}>
          <Text style={styles.largeText}>
            Scan the QR Code to Connect PC as Admin
          </Text>
          <View style={styles.qrContainer}>
            <QRCode
              //QR code value
              value={URL}
              //size of QR Code
              size={150}
              //Color of the QR Code (Optional)
              color="black"
              //Background Color of the QR Code (Optional)
              backgroundColor="white"
            />
          </View>
        </Section>
        <Section style={styles.right}>
          <Text style={styles.largeText}>
            Tap to Print or Share your QRCode
          </Text>
          <TouchableOpacity>
            <Ionicons
              name="md-share-social-outline"
              size={80}
              color={isDarkmode ? themeColor.white100 : themeColor.black200}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Ionicons
              name="print"
              size={80}
              color={isDarkmode ? themeColor.white100 : themeColor.black200}
            />
          </TouchableOpacity>
        </Section>
      </View>

      <Button
        text="Start Server"
        onPress={() => startServer()}
        width="80%"
        style={{
          alignContent: "center",
          alignSelf: "center",
          marginTop: 10,
        }}
      />
      <Button
        text="Print IP"
        onPress={() => {
          getIP();
        }}
        width="80%"
        style={{
          alignContent: "center",
          alignSelf: "center",
          marginTop: 10,
        }}
      />
    </Layout>
  );
};

export default LocalServer;

const styles = StyleSheet.create({
  largeText: {
    fontWeight: "700",
    flexWrap: "wrap",
    fontSize: 15,
    paddingBottom: 20,
    alignSelf: "center",
    justifyContent: "center",
  },
  qrContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
  },
  button: {
    borderRadius: 10,
    width: Dimensions.get("window").width * 0.6,
    padding: 10,
    paddingTop: 10,
    elevation: 2,
    backgroundColor: "#2196F3",
  },
  left: {
    flex: 0.5,
    flexDirection: "column",
    // justifyContent: "center",
  },
  right: {
    flex: 0.5,
    flexDirection: "column",
    // justifyContent: "center",
    alignItems: "center",
  },
});

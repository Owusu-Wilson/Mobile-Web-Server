import { Dimensions, Pressable, StyleSheet, View } from "react-native";
import React, { useEffect, useState } from "react";
import {
  Section,
  SectionContent,
  themeColor,
  Text,
  Button,
  Layout,
} from "react-native-rapi-ui";
import QRCode from "react-native-qrcode-svg";
import { NetworkInfo } from "react-native-network-info";
const LocalServer = ({ navigation }) => {
  // Get IPv4 IP (priority: WiFi first, cellular second)
  let currentIP;
  NetworkInfo.getBroadcast().then((ipv4Address) => {
    currentIP = ipv4Address;
    console.log("Address");
  });

  const [isServerUp, setIsServerUp] = useState(false);

  return (
    <Layout>
      <View>
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
            {/* <Text>http://localhost:8080</Text> */}
            <Text>{currentIP}</Text>
          </SectionContent>
        </Section>
        <Text style={styles.largeText}>
          Scan the QR Code to Connect PC as Admin
        </Text>
        <View style={styles.qrContainer}>
          <QRCode
            //QR code value
            value={"5000"}
            //size of QR Code
            size={200}
            //Color of the QR Code (Optional)
            color="black"
            //Background Color of the QR Code (Optional)
            backgroundColor="white"
            //Logo of in the center of QR Code (Optional)
            // logo={{
            //   uri: <Text>l</Text>,
            // }}
            //Center Logo size  (Optional)
            logoSize={30}
            //Center Logo margin (Optional)
            logoMargin={2}
            //Center Logo radius (Optional)
            logoBorderRadius={15}
            //Center Logo background (Optional)
            logoBackgroundColor="yellow"
          />
        </View>
      </View>
      <Button
        text="GO Back"
        onPress={() => navigation.goBack()}
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
    fontSize: 20,
    padding: 20,
    alignSelf: "center",
    justifyContent: "center",
  },
  qrContainer: {
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
});

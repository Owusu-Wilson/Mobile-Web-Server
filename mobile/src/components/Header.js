import {
  StyleSheet,
  View,
  Linking,
  Modal,
  Pressable,
  Dimensions,
} from "react-native";
import React, { useState } from "react";
import {
  Layout,
  Button,
  Text,
  Section,
  SectionContent,
  useTheme,
  themeColor,
} from "react-native-rapi-ui";
import { EvilIcons, MaterialIcons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const HEIGHT = Dimensions.get("window").height;
const WIDTH = Dimensions.get("window").width;

const HeaderTitle = ({ screenName }) => {
  const { isDarkmode, setTheme } = useTheme();
  const styles = StyleSheet.create({
    headerContainer: {
      alignItems: "center",
      alignContent: "center",
      alignSelf: "center",
      justifyContent: "center",
      width: WIDTH * 0.7,
      backgroundColor: isDarkmode ? "white" : "black",
      borderRadius: 15,
    },
    screenName: {
      color: isDarkmode ? "black" : "white",
      alignContent: "center",
      justifyContent: "center",
      fontSize: 15,
      padding: 10,
      paddingLeft: 15,
      paddingRight: 15,
    },
  });
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.screenName}>{screenName}</Text>
    </View>
  );
};

const HeaderRightIcon = () => {
  const { isDarkmode, setTheme } = useTheme();

  const [modalVisible, setModalVisible] = useState(false);
  const styles = StyleSheet.create({
    centeredView: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      // marginTop: 22,
    },
    modalView: {
      width: "90%",
      height: "90%",
      margin: 20,
      backgroundColor: "white",
      borderRadius: 20,
      padding: 30,
      alignItems: "center",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
    },
    button: {
      borderRadius: 20,
      padding: 10,
      elevation: 2,
    },
    buttonOpen: {
      backgroundColor: "#F194FF",
    },
    buttonClose: {
      backgroundColor: "#2196F3",
    },
    textStyle: {
      color: "white",
      fontWeight: "bold",
      textAlign: "center",
    },
    modalText: {
      marginBottom: 15,
      textAlign: "center",
    },
  });
  return (
    <View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Hello World!</Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle}>Hide Modal</Text>
            </Pressable>
            <Button
              text={isDarkmode ? "Light Mode" : "Dark Mode"}
              status={isDarkmode ? "success" : "warning"}
              onPress={() => {
                if (isDarkmode) {
                  setTheme("light");
                } else {
                  setTheme("dark");
                }
              }}
              style={{
                marginTop: 10,
              }}
            />
          </View>
        </View>
      </Modal>

      <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
        <MaterialIcons
          style={{ justifyContent: "flex-end" }}
          name="settings"
          size={30}
          color={isDarkmode ? themeColor.white : themeColor.black200}
        />
      </TouchableOpacity>
    </View>
  );
};
const HeaderLeftIcon = () => {
  const { isDarkmode, setTheme } = useTheme();
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <MaterialIcons
          style={{ justifyContent: "flex-end" }}
          name="chevron-left"
          size={30}
          color={isDarkmode ? themeColor.white : themeColor.black200}
        />
      </TouchableOpacity>
    </View>
  );
};

export { HeaderRightIcon as HeaderIcon, HeaderLeftIcon, HeaderTitle };

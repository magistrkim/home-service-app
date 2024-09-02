import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import { Colors } from "@/constants/Colors";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";

const Header = () => {
  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <View style={styles.profileWrapper}>
          <Image
            source={require("@/assets/images/young-pretty-woman.jpg")}
            style={styles.userImage}
          />
          <View>
            <Text style={styles.text}>Welcome,</Text>
            <Text style={styles.userText}>MagistrKim!</Text>
          </View>
        </View>
        <FontAwesome6 name="bookmark" size={24} color={Colors.light.primary} />
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.light.accentLight,
    paddingTop: 40,
    padding: 20,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  subContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  profileWrapper: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
  },
  userImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  text: {
    fontSize: 16,
  },
  userText: {
    fontSize: 20,
    fontWeight: "500",
  },
});

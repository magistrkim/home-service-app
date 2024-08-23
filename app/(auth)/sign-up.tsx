import { View, Text, Image, StyleSheet, SafeAreaView } from "react-native";
import React from "react";
import { Colors } from "@/constants/Colors";

const SignUp = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Image
        source={require("./../../assets/images/login.png")}
        style={styles.image}
      />
      <View style={styles.wrapper}></View>
    </SafeAreaView>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  text: {
    fontSize: 16,
    fontWeight: "600",
    color: "white",
    textTransform: "uppercase",
  },
  image: {
    width: 230,
    height: 450,
    marginTop: 20,
    borderWidth: 2,
    borderColor: Colors.light.text,
    borderRadius: 10,
  },
  wrapper: {
    width: "100%",
    height: "70%",
    backgroundColor: Colors.light.primary,
    marginTop: -120,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
  },
});

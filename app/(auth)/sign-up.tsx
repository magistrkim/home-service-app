import {
  View,
  Text,
  Image,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { Colors } from "@/constants/Colors";

const SignUp = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Image
        source={require("./../../assets/images/login.png")}
        style={styles.image}
      />
      <View style={styles.wrapper}>
        <Text style={styles.title}>
          Let's Find{" "}
          <Text style={styles.titleAccent}>
            Professional Cleaning and Repair
          </Text>{" "}
          Service
        </Text>
        <Text style={styles.text}>
          Best App to find services near you which deliver a professional
          experience
        </Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.textButton}>Let's Get Started!</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
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
    padding: 20,
    alignItems: "center",
  },
  title: {
    fontSize: 28,
    fontWeight: "500",
    color: Colors.dark.text,
    marginTop: 20,
    textAlign: "center",
  },
  titleAccent: {
    fontWeight: "700",
    color: Colors.dark.accent,
  },
  text: {
    fontSize: 16,
    color: Colors.dark.text,
    marginTop: 30,
    textAlign: "center",
  },
  button: {
    width: "100%",
    padding: 16,
    backgroundColor: Colors.dark.accent,
    marginTop: 30,
    alignItems: "center",
    borderRadius: 20,
  },
  textButton: {
    fontSize: 18,
    fontWeight: "600",
  },
});

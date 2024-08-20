import { ActivityIndicator, View } from "react-native";
import React from "react";
import { Link, Redirect } from "expo-router";
import Button from "@/components/Button";

const index = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", padding: 10 }}>
      <Link href={"/(auth)_layout"} asChild>
        <Button text="Authorization" />
      </Link>
      <Link href={"/(tabs)/"} asChild>
        <Button text="Sign out" />
      </Link>
    </View>
  );
};

export default index;

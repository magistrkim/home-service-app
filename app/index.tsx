import { ActivityIndicator, Text, View } from "react-native";
import React from "react";
import { Link, Redirect } from "expo-router";
import Button from "@/components/Button";
import { ClerkProvider, SignedIn, SignedOut } from "@clerk/clerk-expo";

const index = () => {
  return (
    // <ClerkProvider publishableKey="pk_test_YXJ0aXN0aWMtb3Jpb2xlLTY1LmNsZXJrLmFjY291bnRzLmRldiQ">
    <View style={{ flex: 1, justifyContent: "center", padding: 10 }}>
      {/* <SignedIn>
          <Text>Hello user</Text>
        </SignedIn>
        <SignedOut>
          <Link href="/(auth)/sign-in">
            <Text>Sign In</Text>
          </Link>
          <Link href="/(auth)/sign-up">
            <Text>Sign Up</Text>
          </Link>
        </SignedOut> */}
      <Link href={"/(auth)/sign-up"} asChild>
        <Button text="Authorization" />
      </Link>
      <Link href={"/(tabs)/"} asChild>
        <Button text="Sign out" />
      </Link>
    </View>
    // </ClerkProvider>
  );
};

export default index;

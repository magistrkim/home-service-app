import { Stack } from "expo-router";

const PofileLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="pofile" options={{ title: "Profile" }} />
    </Stack>
  );
};

export default PofileLayout;

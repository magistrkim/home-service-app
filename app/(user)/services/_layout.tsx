import { Stack } from "expo-router";

const ServicesLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="services" options={{ title: "Services" }} />
    </Stack>
  );
};

export default ServicesLayout;

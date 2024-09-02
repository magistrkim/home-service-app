import { Stack } from "expo-router";

const BookingLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: "Booking" }} />
    </Stack>
  );
};

export default BookingLayout;

import { Stack } from "expo-router";

export default function StackLayout() {
  return (
    <Stack
      screenOptions={{
        animation: "fade_from_bottom",
        headerShadowVisible: false,
      }}
    >
      <Stack.Screen
        name="home/index"
        options={{ title: "Home Screen", headerShown: false }}
      />
      <Stack.Screen name="products/products" options={{ title: "Products" }} />
      <Stack.Screen name="profile/profile" options={{ title: "Profile" }} />
      <Stack.Screen name="settings/settings" options={{ title: "Settings" }} />
    </Stack>
  );
}

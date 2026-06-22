import Button from "@/src/components/common/CustomButton";
import { router } from "expo-router";
import React from "react";
import { Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function HomeScreen() {
  const insets = useSafeAreaInsets();

  return (
    <View className="mt-5 mx-2.5" style={{ paddingTop: insets.top }}>
      <Text className="text-3xl text-secondary font-work-black">
        Home Screen
      </Text>

      <View className="left-0 px-10 mt-5">
        <Button
          onPress={() => router.push("./products/products")}
          title="Products"
          color="primary"
        ></Button>
        <Button
          onPress={() => router.push("./profile/profile")}
          title="Profile"
          color="secondary"
        ></Button>
        <Button
          onPress={() => router.navigate("./settings/settings")}
          title="Settings"
          color="tertiary"
          variant="text-only"
        ></Button>
      </View>
    </View>
  );
}

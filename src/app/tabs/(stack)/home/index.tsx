import Button from "@/src/components/common/CustomButton";
import { router } from "expo-router";
import React from "react";
import { View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function HomeScreen() {
  const insets = useSafeAreaInsets();

  return (
    <View className="mt-5 mx-2.5" style={{ paddingTop: insets.top }}>
      

      <View className="left-0 px-10 mt-5">
        <Button
          onPress={() => router.push("/tabs/(stack)/products/products")}
          title="Products"
          color="primary"
        ></Button>
        <Button
          onPress={() => router.push("/tabs/(stack)/profile/profile")}
          title="Profile"
          color="secondary"
        ></Button>
        <Button
          onPress={() => router.navigate("/tabs/(stack)/settings/settings")}
          title="Settings"
          color="tertiary"
          variant="text-only"
        ></Button>
      </View>
    </View>
  );
}

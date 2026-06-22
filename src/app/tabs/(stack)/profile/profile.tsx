import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function ProfileScreen() {
  const insets = useSafeAreaInsets();
  return (
    <View className="mt-5 mx-2.5" style={{ paddingTop: insets.top }}>
      <Text>ProfileScreen</Text>
    </View>
  );
}

const styles = StyleSheet.create({});

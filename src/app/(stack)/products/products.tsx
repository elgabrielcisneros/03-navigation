import Button from "@/src/components/common/CustomButton";
import { products } from "@/store/products.store";
import { FlashList } from "@shopify/flash-list";
import { router } from "expo-router";
import React from "react";
import { Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function ProductsScreen() {
  const insets = useSafeAreaInsets();
  return (
    <View className="mx-2.5 flex flex-1" style={{ paddingTop: insets.top }}>
      <FlashList
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View>
            <Text className="text-2xl font-work-black">{item.title}</Text>
            <Text>{item.description}</Text>
            <View className=" flex flex-row justify-between mt-2">
              <Text className="font-work-black">{item.price}$</Text>
              <Button
                title="Ver detalles"
                onPress={() => router.push(`/(stack)/products/${item.id}.tsx`)}
                variant="text-only"
                color="primary"
              ></Button>
            </View>
          </View>
        )}
      />
    </View>
  );
}

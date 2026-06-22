import Ionicons from "@expo/vector-icons/FontAwesome";
import { Tabs } from "expo-router";

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "indigo",
        headerShown: false,
        tabBarStyle: {
          backgroundColor: "white",
          borderTopColor: "transparent",
          height: 60,
        },
      }}
    >
      <Tabs.Screen
        name="(stack)"
        options={{
          title: "Stack",
          tabBarIcon: ({ color }) => (
            <Ionicons size={30} name="square" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="home/index"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => (
            <Ionicons size={30} name="home" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="favorites/index"
        options={{
          title: "Favorites",
          tabBarIcon: ({ color }) => (
            <Ionicons size={30} name="heart-o" color={color} />
          ),
        }}
      />
    </Tabs>
  );
}

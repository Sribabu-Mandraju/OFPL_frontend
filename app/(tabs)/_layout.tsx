import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import React from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import SideDrawer from "../../components/SideDrawer";
import TabsHeader from "../../components/TabsHeader";
import { useDrawer } from "../../contexts/DrawerContext";

export default function TabsLayout() {
  const { isOpen, closeDrawer } = useDrawer();
  const insets = useSafeAreaInsets();

  return (
    <>
      <Tabs
        screenOptions={{
          header: () => <TabsHeader />,
          tabBarActiveTintColor: "#16a34a",
          tabBarInactiveTintColor: "#6b7280",
          tabBarStyle: {
            backgroundColor: "#1f2937",
            borderTopWidth: 1,
            borderTopColor: "#374151",
            height: 60 + insets.bottom,
            paddingBottom: insets.bottom + 4,
            paddingTop: 8,
            elevation: 8,
          },
          tabBarLabelStyle: {
            fontSize: 12,
            fontWeight: "600",
          },
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            title: "Home",
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="home" size={size} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="explore"
          options={{
            title: "Explore",
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="compass" size={size} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="favorites"
          options={{
            title: "Favorites",
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="heart" size={size} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="settings"
          options={{
            title: "Settings",
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="settings" size={size} color={color} />
            ),
          }}
        />
      </Tabs>
      <SideDrawer isOpen={isOpen} onClose={closeDrawer} />
    </>
  );
}

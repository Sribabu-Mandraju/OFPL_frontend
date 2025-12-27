import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useDrawer } from "../contexts/DrawerContext";

const TabsHeader = () => {
  const { openDrawer } = useDrawer();
  const insets = useSafeAreaInsets();

  const handleProfilePress = () => {
    console.log("Profile pressed");
  };

  return (
    <View
      className="bg-dark-800 border-b border-dark-700"
      style={{ paddingTop: insets.top }}
    >
      <View className="flex-row items-center justify-between px-4 py-3">
        <TouchableOpacity
          onPress={openDrawer}
          className="p-2 rounded-full active:bg-dark-700"
          activeOpacity={0.7}
        >
          <Ionicons name="menu" size={24} color="#16a34a" />
        </TouchableOpacity>

        <View className="flex-1" />

        <TouchableOpacity
          onPress={handleProfilePress}
          className="flex-row items-center"
          activeOpacity={0.7}
        >
          <View className="w-10 h-10 bg-primary-900 rounded-full items-center justify-center mr-2">
            <Ionicons name="person" size={20} color="#16a34a" />
          </View>
          <View>
            <Text className="text-sm font-semibold text-white">
              Hello, Caleb!
            </Text>
            <Text className="text-xs text-gray-400">hello@layo.design</Text>
          </View>
          <View className="ml-3 relative">
            <Ionicons name="notifications-outline" size={24} color="#16a34a" />
            <View className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full" />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default TabsHeader;

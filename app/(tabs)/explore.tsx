import React from "react";
import { Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const Explore = () => {
  const insets = useSafeAreaInsets();

  return (
    <View className="flex-1 bg-dark-900" style={{ paddingBottom: 20 }}>
      <View className="flex-1 justify-center items-center px-4">
        <Text className="text-3xl font-bold text-primary-500 mb-2">
          Explore
        </Text>
        <Text className="text-gray-400 text-center">
          Discover new content and features
        </Text>
      </View>
    </View>
  );
};

export default Explore;

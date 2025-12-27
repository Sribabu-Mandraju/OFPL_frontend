import { Link } from "expo-router";
import { Pressable, Text, View } from "react-native";

export default function About() {
  return (
    <View className="flex-1 items-center justify-center bg-dark-900">
      <Text className="text-2xl font-bold mb-4 text-white">
        ℹ️ Abouts Screen
      </Text>
      <Link href="/" asChild>
        <Pressable className="bg-primary-600 px-4 py-2 rounded-lg">
          <Text className="text-white text-lg">Back Home</Text>
        </Pressable>
      </Link>
    </View>
  );
}

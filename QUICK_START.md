# Quick Start Guide - Building Your First Feature

## 🎯 Let's Build a Profile Screen

### Step 1: Create the Screen File

Create `app/(tabs)/profile.tsx`:

```tsx
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";

export default function ProfileScreen() {
  return (
    <ScrollView className="flex-1 bg-white">
      <View className="p-6">
        {/* Profile Header */}
        <View className="items-center mb-6">
          <View className="w-24 h-24 bg-primary-100 rounded-full items-center justify-center mb-4">
            <Ionicons name="person" size={48} color="#16a34a" />
          </View>
          <Text className="text-2xl font-bold text-gray-800">John Doe</Text>
          <Text className="text-gray-500">john@example.com</Text>
        </View>

        {/* Menu Items */}
        <View className="space-y-2">
          <MenuItem icon="person-outline" label="Edit Profile" />
          <MenuItem icon="settings-outline" label="Settings" />
          <MenuItem icon="help-circle-outline" label="Help & Support" />
          <MenuItem icon="log-out-outline" label="Logout" />
        </View>
      </View>
    </ScrollView>
  );
}

function MenuItem({ icon, label }: { icon: string; label: string }) {
  return (
    <TouchableOpacity
      className="flex-row items-center p-4 bg-white rounded-lg border border-gray-200 mb-2"
      activeOpacity={0.7}
    >
      <Ionicons name={icon as any} size={24} color="#16a34a" />
      <Text className="ml-4 text-base text-gray-700 font-medium">{label}</Text>
      <View className="flex-1" />
      <Ionicons name="chevron-forward" size={20} color="#9ca3af" />
    </TouchableOpacity>
  );
}
```

### Step 2: Add to Tab Navigation

Edit `app/(tabs)/_layout.tsx` and add:

```tsx
<Tabs.Screen
  name="profile"
  options={{
    title: "Profile",
    tabBarIcon: ({ color, size }) => (
      <Ionicons name="person" size={size} color={color} />
    ),
  }}
/>
```

## 🎨 Creating Reusable Components

### Example: Custom Button Component

Create `components/ui/Button.tsx`:

```tsx
import { TouchableOpacity, Text } from "react-native";

interface ButtonProps {
  title: string;
  onPress: () => void;
  variant?: "primary" | "secondary";
  disabled?: boolean;
}

export default function Button({
  title,
  onPress,
  variant = "primary",
  disabled = false,
}: ButtonProps) {
  const bgColor = variant === "primary" ? "bg-primary-500" : "bg-gray-200";

  const textColor = variant === "primary" ? "text-white" : "text-gray-700";

  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled}
      className={`${bgColor} py-3 px-6 rounded-lg ${
        disabled ? "opacity-50" : ""
      }`}
      activeOpacity={0.7}
    >
      <Text className={`${textColor} text-center font-semibold`}>{title}</Text>
    </TouchableOpacity>
  );
}
```

**Usage:**

```tsx
import Button from "../components/ui/Button";

<Button
  title="Click Me"
  onPress={() => console.log("Pressed!")}
  variant="primary"
/>;
```

## 📱 Common Patterns

### 1. List with Data

```tsx
import { FlatList, View, Text } from "react-native";

const items = [
  { id: "1", title: "Item 1", description: "Description 1" },
  { id: "2", title: "Item 2", description: "Description 2" },
];

export default function ListScreen() {
  return (
    <FlatList
      data={items}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <View className="p-4 bg-white mb-2 border-b border-gray-100">
          <Text className="text-lg font-semibold text-gray-800">
            {item.title}
          </Text>
          <Text className="text-gray-500 mt-1">{item.description}</Text>
        </View>
      )}
      contentContainerStyle={{ padding: 16 }}
    />
  );
}
```

### 2. Form Input

```tsx
import { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";

export default function FormScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <View className="flex-1 bg-white p-6">
      <TextInput
        className="border border-gray-300 rounded-lg p-4 mb-4"
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <TextInput
        className="border border-gray-300 rounded-lg p-4 mb-6"
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      <TouchableOpacity
        onPress={handleSubmit}
        className="bg-primary-500 py-3 rounded-lg"
        activeOpacity={0.7}
      >
        <Text className="text-white text-center font-semibold">Submit</Text>
      </TouchableOpacity>
    </View>
  );
}
```

### 3. Modal/Alert Pattern

```tsx
import { useState } from "react";
import { View, Text, TouchableOpacity, Modal } from "react-native";

export default function ModalExample() {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <View className="flex-1 justify-center items-center">
      <TouchableOpacity
        onPress={() => setIsVisible(true)}
        className="bg-primary-500 px-6 py-3 rounded-lg"
      >
        <Text className="text-white font-semibold">Show Modal</Text>
      </TouchableOpacity>

      <Modal
        visible={isVisible}
        transparent
        animationType="fade"
        onRequestClose={() => setIsVisible(false)}
      >
        <View className="flex-1 bg-black/50 justify-center items-center p-6">
          <View className="bg-white rounded-xl p-6 w-full">
            <Text className="text-xl font-bold mb-4">Modal Title</Text>
            <Text className="text-gray-600 mb-6">Modal content goes here</Text>

            <TouchableOpacity
              onPress={() => setIsVisible(false)}
              className="bg-primary-500 py-3 rounded-lg"
            >
              <Text className="text-white text-center font-semibold">
                Close
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}
```

## 🔄 State Management Patterns

### Using Context (Like DrawerContext)

```tsx
// contexts/UserContext.tsx
import { createContext, useContext, useState } from "react";

interface UserContextType {
  user: { name: string; email: string } | null;
  setUser: (user: { name: string; email: string } | null) => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export function UserProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<{ name: string; email: string } | null>(
    null
  );

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used within UserProvider");
  }
  return context;
};

// Usage in component
import { useUser } from "../contexts/UserContext";

export default function ProfileScreen() {
  const { user, setUser } = useUser();

  return (
    <View>
      {user ? <Text>Welcome, {user.name}!</Text> : <Text>Please login</Text>}
    </View>
  );
}
```

## 🎯 Key Takeaways

1. **Components**: Use `<View>`, `<Text>`, `<TouchableOpacity>` instead of HTML
2. **Styling**: Use `className` with NativeWind (Tailwind classes)
3. **Navigation**: Use `router.push()` or `<Link>` from expo-router
4. **State**: Same hooks as React (`useState`, `useEffect`, etc.)
5. **File-based Routing**: File location = route path
6. **TypeScript**: Define interfaces for props

## 📚 Next Steps

1. Create a new screen in `app/`
2. Build reusable components in `components/`
3. Add navigation between screens
4. Style with NativeWind classes
5. Add state management with Context

Happy coding! 🚀

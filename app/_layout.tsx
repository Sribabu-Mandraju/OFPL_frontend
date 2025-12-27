import { Stack } from "expo-router";
import ErrorBoundary from "../components/ErrorBoundary";
import { DrawerProvider } from "../contexts/DrawerContext";
import "../global.css";

export default function RootLayout() {
  return (
    <ErrorBoundary>
      <DrawerProvider>
        <Stack
          screenOptions={{
            headerShown: false,
            contentStyle: { backgroundColor: "#111827" },
          }}
        >
          <Stack.Screen name="(tabs)" />
          <Stack.Screen name="details" />
        </Stack>
      </DrawerProvider>
    </ErrorBoundary>
  );
}

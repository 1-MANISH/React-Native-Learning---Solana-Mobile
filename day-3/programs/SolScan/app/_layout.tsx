import { Stack } from "expo-router";
// 2-3 type of navigation
// 1. stack navigation (navigate to a new screen)
// 2. tab navigation (switch between screens without unmounting them)
// 3. drawer navigation (side menu)
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function RootLayout() {
        return (
        <SafeAreaProvider>
                <Stack screenOptions={{ headerShown: false }}>
                        <Stack.Screen name="(tabs)" />
                        <Stack.Screen name="token/[mint]" />
                        <Stack.Screen name="wallets" />
                </Stack>
        </SafeAreaProvider>
        );
}
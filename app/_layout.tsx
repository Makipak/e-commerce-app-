import React from "react";
import { Stack } from "expo-router";
import { CartProvider } from "./context/context"; // ✅ perhatikan path

export default function RootLayout() {
  return (
    <CartProvider>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="(tabs)" />
        <Stack.Screen name="produk" />
      </Stack>
    </CartProvider>
  );
}

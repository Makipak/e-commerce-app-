import { Stack } from "expo-router";
import React from "react";

export default function ProdukLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="detailProduk" />
      <Stack.Screen name="keranjang" />
    </Stack>
  );
}
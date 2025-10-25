            // copyright @makipak
            // github : https://github.com/Makipak
            // linkedin : muhamadfarhanqolbi
            // Universitas Faletehan

import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Platform,
  StatusBar,
  Image,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView, useSafeAreaInsets } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import { useCart } from "../context/context";
import "../../global.css";

export default function Keranjang() {
  const router = useRouter();
  const { cart, removeFromCart, clearCart, increaseQuantity, decreaseQuantity } = useCart();
  const insets = useSafeAreaInsets();

  const topOffset =
    Platform.OS === "android"
      ? (StatusBar.currentHeight || 0) + 4
      : insets.top + 4;

  const totalHarga = cart.reduce(
    (sum, item) => sum + item.price * (item.quantity || 1),
    0
  );

  return (
    <SafeAreaView className="flex-1 bg-white">
      {/* Header */}
      <View
        style={{ paddingTop: topOffset }}
        className="flex-row items-center justify-between px-4 py-2 bg-green-500"
      >
        <TouchableOpacity onPress={() => router.back()} activeOpacity={0.7}>
          <Ionicons name="arrow-back" size={22} color="white" />
        </TouchableOpacity>

        <Text className="text-white text-lg font-bold">Keranjang</Text>

        <TouchableOpacity onPress={clearCart} activeOpacity={0.7}>
          <Ionicons name="trash-outline" size={22} color="white" />
        </TouchableOpacity>
      </View>

      {/* Daftar produk */}
      <ScrollView
        className="flex-1 px-4 pt-3"
        contentContainerStyle={{ paddingBottom: 100 }}
      >
        {cart.length === 0 ? (
          <View className="flex-1 justify-center items-center mt-20">
            <Ionicons name="cart-outline" size={64} color="gray" />
            <Text className="text-gray-500 mt-3">Keranjang masih kosong</Text>
          </View>
        ) : (
          cart.map((item) => (
            <View
              key={item.id}
              className="flex-row items-center justify-between bg-gray-200 rounded-md p-3 mb-3"
            >
              {/* Gambar produk (placeholder) */}
              <Image 
              className="w-10 h-10 rounded-8 mr-3"
              resizeMode="cover"
              source={item.image}
              />

              {/* Info produk */}
              <View className="flex-1">
                <Text className="text-black text-sm font-medium">
                  {item.name}
                </Text>
                <Text className="text-black text-base font-bold">
                  Rp.{item.price.toLocaleString("id-ID")}
                </Text>
              </View>

              {/* Kontrol Quantity */}
              <View className="flex-row items-center mr-3">
                <TouchableOpacity
                  onPress={() => decreaseQuantity(item.id)}
                  className="w-7 h-7 bg-gray-300 rounded items-center justify-center"
                >
                  <Text className="text-black text-lg">-</Text>
                </TouchableOpacity>
                <Text className="mx-2 text-base font-semibold text-black">
                  {item.quantity}
                </Text>
                <TouchableOpacity
                  onPress={() => increaseQuantity(item.id)}
                  className="w-7 h-7 bg-gray-300 rounded items-center justify-center"
                >
                  <Text className="text-black text-lg">+</Text>
                </TouchableOpacity>
              </View>

              {/* Tombol hapus */}
              <TouchableOpacity onPress={() => removeFromCart(item.id)}>
                <Ionicons name="close-circle" size={22} color="gray" />
              </TouchableOpacity>
            </View>
          ))
        )}
      </ScrollView>

      {/* Bar bawah */}
      {cart.length > 0 && (
        <View className="absolute bottom-0 left-0 right-0 flex-row justify-between items-center bg-green-500 px-5 py-3">
          <Text className="text-white font-bold text-base">
            Rp.{totalHarga.toLocaleString("id-ID")}
          </Text>

          <TouchableOpacity
            activeOpacity={0.8}
            className="bg-black px-5 py-2 rounded-md"
            onPress={() => alert("Lanjut ke pembayaran")}
          >
            <Text className="text-white font-semibold text-sm">Beli</Text>
          </TouchableOpacity>
        </View>
      )}
    </SafeAreaView>
  );
}
            // copyright @makipak
            // github : https://github.com/Makipak
            // linkedin : muhamadfarhanqolbi
            // Universitas Faletehan

import { Ionicons } from "@expo/vector-icons";
import { Image } from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";
import React from "react";
import {
  Dimensions,
  Platform,
  ScrollView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView, useSafeAreaInsets } from "react-native-safe-area-context";
import "../../global.css";
import { useCart } from "../context/context"; // ✅ pakai context cart
import { products } from "../data/product";

export default function DetailProduk() {
  const router = useRouter();
  const { id } = useLocalSearchParams();
  const product = products.find((p) => p.id === id);
  const insets = useSafeAreaInsets();
  const screenHeight = Dimensions.get("window").height;
  const { addToCart } = useCart(); // ✅ ambil fungsi addToCart

  if (!product) return <Text>produk tidak ditemukan</Text>
  const topOffset =
    Platform.OS === "android"
      ? (StatusBar.currentHeight || 0) + 4
      : insets.top + 4;

  // ✅ Fungsi tambah ke keranjang
  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      quantity: 1,
    });
    alert("Produk ditambahkan ke keranjang!");
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      {/* Konten scrollable */}
      <ScrollView
        className="flex-1"
        contentContainerStyle={{ paddingBottom: 100 }}
        showsVerticalScrollIndicator={false}
      >
        {/* Gambar produk */}
        <View>
          <Image
            source={product.image}
            className="w-full bg-gray-300"
            style={{ height: screenHeight * 0.4 }}
            resizeMode="cover"
          />
        </View>

        {/* Detail produk */}
        <View className="p-5">
          <Text className="text-lg font-extrabold text-black">
            Rp.{product.price.toLocaleString("id-ID")}
          </Text>
          <Text className="text-base text-black mt-2">{product.name}</Text>

          <Text className="text-sm text-gray-600 mt-3 leading-5">
            Deskripsi produk ini bisa diisi dengan penjelasan lengkap, spesifikasi,
            atau informasi tambahan lain.
          </Text>
        </View>
      </ScrollView>

      {/* Header melayang (Back + Cart) */}
      <View
        style={{ top: topOffset }}
        className="absolute left-0 right-0 flex-row justify-between px-4 z-20"
      >
        {/* Tombol Back */}
        <TouchableOpacity
          onPress={() => router.back()}
          activeOpacity={0.7}
          className="bg-white/80 rounded-full p-2 shadow-md"
        >
          <Ionicons name="arrow-back" size={22} color="black" />
        </TouchableOpacity>

        {/* Tombol Keranjang */}
        <TouchableOpacity
          onPress={() => router.push("/produk/keranjang")}
          activeOpacity={0.7}
          className="bg-white/80 rounded-full p-2 shadow-md"
        >
          <Ionicons name="cart-outline" size={22} color="black" />
        </TouchableOpacity>
      </View>

      {/* Tombol bawah */}
      <View className="absolute bottom-0 left-0 right-0 bg-green-500 p-3 items-end">
        <TouchableOpacity
          activeOpacity={0.8}
          className="bg-black rounded-md px-4 py-2"
          onPress={handleAddToCart} // ✅ panggil fungsi tambah keranjang
        >
          <Text className="text-white font-semibold text-sm">+ Keranjang</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
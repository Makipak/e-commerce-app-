import { Ionicons } from "@expo/vector-icons";
import { Link, useRouter } from "expo-router";
import React from "react";
import {
  Image,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import "../../global.css";
import { products } from "../data/product";

export default function HomeScreen() {
  const router = useRouter();

  return (
    <SafeAreaView className="flex-1 bg-white">
      {/* Header */}
      <View className="bg-green-500 px-4 py-4 rounded-b-2xl">
        <View className="flex-row items-center justify-between">
          <View className="flex-row items-center bg-gray-200 rounded-md px-3 flex-1 mr-3">
            <Ionicons name="search" size={18} color="black" />
            <TextInput
              placeholder="Search"
              placeholderTextColor="#555"
              className="ml-2 flex-1 text-base"
            />
          </View>
          <TouchableOpacity onPress={() => router.push("/produk/keranjang")}>
            <Ionicons name="cart-outline" size={22} color="white" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Product list */}
      <ScrollView
        className="flex-1 px-3 pt-3"
        contentContainerStyle={{ paddingBottom: 20 }}
        showsVerticalScrollIndicator={false}
      >
        <View className="flex-row flex-wrap justify-between mt-2">
          {products.map((item) => (
            <Link
              key={item.id}
              href={{
                pathname: "/produk/detailproduk",
                params: { id: item.id },
              }}
              asChild
            >
              <TouchableOpacity
                activeOpacity={0.8}
                className="w-[48%] mb-4 bg-gray-200 rounded-md overflow-hidden"
              >
                <Image
                  source={item.image}
                  className="w-full h-40 bg-gray-700"
                  resizeMode="cover"
                />
                <View className="p-2">
                  <Text className="text-sm text-gray-800">{item.name}</Text>
                  <Text className="text-sm font-bold text-black">
                    Rp.{item.price.toLocaleString("id-ID")}
                  </Text>
                </View>
              </TouchableOpacity>
            </Link>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

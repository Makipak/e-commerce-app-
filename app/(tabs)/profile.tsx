            // copyright @makipak
            // github : https://github.com/Makipak
            // linkedin : muhamadfarhanqolbi
            // Universitas Faletehan

import React from "react";
import { View, Text, TouchableOpacity, ScrollView, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import "../../global.css";

export default function ProfileScreen() {
  const user = {
    name: "John Doe",
    email: "john.doe@gmail.com",
    avatar: "https://i.pravatar.cc/150?img=12",
  };

  const menuItems = [
    { icon: "person-circle-outline", title: "Akun Saya", onPress: () => alert("Buka Akun Saya") },
    { icon: "cart-outline", title: "Pesanan Saya", onPress: () => alert("Buka Pesanan") },
    { icon: "heart-outline", title: "Favorit", onPress: () => alert("Buka Favorit") },
    { icon: "settings-outline", title: "Pengaturan", onPress: () => alert("Buka Pengaturan") },
    { icon: "help-circle-outline", title: "Bantuan", onPress: () => alert("Buka Bantuan") },
  ];

  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View className="bg-green-500 px-5 py-6 rounded-b-3xl">
          <View className="flex-row items-center">
            <Image
              source={{ uri: user.avatar }}
              className="w-16 h-16 rounded-full border-2 border-white"
            />
            <View className="ml-4">
              <Text className="text-white text-lg font-bold">{user.name}</Text>
              <Text className="text-white text-sm">{user.email}</Text>
            </View>
          </View>
        </View>

        {/* Menu Section */}
        <View className="px-5 mt-5">
          <Text className="text-gray-600 font-semibold mb-3">Akun</Text>
          {menuItems.map((item, index) => (
            <TouchableOpacity
              key={index}
              onPress={item.onPress}
              activeOpacity={0.7}
              className="flex-row items-center justify-between bg-gray-100 p-3 mb-3 rounded-xl"
            >
              <View className="flex-row items-center">
                <Ionicons name={item.icon as any} size={22} color="#00C400" />
                <Text className="ml-3 text-black text-base">{item.title}</Text>
              </View>
              <Ionicons name="chevron-forward" size={20} color="#888" />
            </TouchableOpacity>
          ))}
        </View>

        {/* Logout Button */}
        <View className="px-5 mt-8">
          <TouchableOpacity
            onPress={() => alert("Anda telah logout")}
            className="flex-row items-center justify-center bg-red-500 py-3 rounded-xl"
            activeOpacity={0.8}
          >
            <Ionicons name="log-out-outline" size={20} color="white" />
            <Text className="text-white ml-2 font-semibold text-base">Logout</Text>
          </TouchableOpacity>
        </View>

        {/* App Info */}
        <View className="mt-8 mb-6 items-center">
          <Text className="text-gray-400 text-sm">Versi 1.0.0</Text>
          <Text className="text-gray-400 text-sm mt-1">© 2025 ParanShop</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}